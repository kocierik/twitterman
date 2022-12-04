package database

import (
	"context"
	"errors"
	"fmt"
	"log"
	"time"

	"git.hjkl.gq/team7/twitterman/server/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client
var ctx context.Context
var dbname string = "twitterman"

var collectionList [2]string = [2]string{"Users", "Tweets"}

var nullUser = utils.User{ID: primitive.ObjectID{}, Email: "", Username: "", Password: "", SavedTweetsId: []string{}}

type queryTypeInterface interface {
	GetKey() string
}

func bindType[T any](res *mongo.Cursor) T {
	var currentFoundValue T
	err := res.All(ctx, &currentFoundValue)
	utils.TestError(err, "bind type after find error: ")
	return currentFoundValue
}

func GetUserByEmail(email string) (utils.User, error) {
	query := bson.M{"email": email}
	res := find(query, "Users")
	//log.Print(res)
	var user []utils.User
	err := res.All(ctx, &user)
	utils.TestError(err, "GetUserByEmail function")
	if len(user) == 0 {
		return nullUser, errors.New("no user with that email")
	} else {
		return user[0], nil
	}
}

func GetUserById(id primitive.ObjectID) (utils.User, error) {
	query := bson.M{"_id": id}
	res := find(query, "Users")
	binded := bindType[[]utils.User](res)
	if len(binded) == 0 {
		return nullUser, errors.New("no user with that ID")
	} else {
		return binded[0], nil
	}
}

func GetTweetsByTwitterId(id string) []utils.Tweet {
	myDict := bson.M{
		"id": primitive.Regex{Pattern: id, Options: "i"},
	}
	res := find(myDict, "Tweets")
	binded := bindType[[]utils.Tweet](res)
	return binded
}

func GetTweetsByUsername(username string, start, end time.Time) []utils.Tweet {
	sstart := start.Format("2006-01-02T15:04:05Z")
	eend := end.Format("2006-01-02T15:04:05Z")
	fmt.Println(sstart, eend)
	myDict := bson.M{
		"username":  primitive.Regex{Pattern: username, Options: "i"},
		"timestamp": bson.M{"$gte": sstart, "$lte": eend},
	}
	res := find(myDict, "Tweets")
	binded := bindType[[]utils.Tweet](res)
	return binded
}

func GetTweetsByKeyword(keyword string, start, end time.Time) []utils.Tweet {
	sstart := start.Format("2006-01-02T15:04:05Z")
	eend := end.Format("2006-01-02T15:04:05Z")
	myDict := bson.M{
		"content":   primitive.Regex{Pattern: keyword, Options: "i"},
		"timestamp": bson.M{"$gte": sstart, "$lte": eend},
	}
	res := find(myDict, "Tweets")
	binded := bindType[[]utils.Tweet](res)
	return binded
}

func InsertUser(email, username, password string, tweets []string) {
	user := utils.User{
		Email:         email,
		Username:      username,
		Password:      password,
		SavedTweetsId: tweets,
	}
	insert(user, "Users")
}

func InsertTweetList(twts []utils.Tweet) {
	for _, t := range twts {
		insert(t, "Tweets")
	}
}

func Connect() {
	var err error
	if client != nil && client.Ping(ctx, nil) == nil {
		return
	}
	ctx = context.Background()
	clientOptions := options.Client().ApplyURI(utils.DbUrl)
	client, err = mongo.Connect(ctx, clientOptions)
	utils.TestError(err, "database.Connect function, new client error")
}

func Disconnect() {
	err := client.Disconnect(ctx)
	utils.TestError(err, "database.Disconnect function, some error")
}

func find(query interface{}, collection string) *mongo.Cursor {
	log.Println(dbname, collection, query)
	col := client.Database(dbname).Collection(collection)
	cursor, err := col.Find(ctx, query)
	utils.TestError(err, "find function")
	return cursor
}

func insert[T queryTypeInterface](query T, collection string) {
	var updateQuery bson.M
	switch collection {
	case "Tweets":
		updateQuery = bson.M{"id": query.GetKey()}
	case "Users":
		updateQuery = bson.M{"email": query.GetKey()}
	default:
		updateQuery = bson.M{}
	}
	mytrue := true
	col := client.Database(dbname).Collection(collection)
	_, err := col.UpdateOne(ctx, updateQuery, bson.M{"$set": query}, &options.UpdateOptions{Upsert: &mytrue})
	utils.TestError(err, "insert function")
}

func InitDbTest() {
	dbname = "test"
	client = nil
	Connect()
	// defer Disconnect()

	// Clear database
	for _, col := range collectionList {
		_, err := client.Database(dbname).Collection(col).DeleteMany(ctx, bson.D{})
		utils.TestError(err, "InitDbTest clear function error on collection:"+col)
	}
}
