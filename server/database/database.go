package database

import (
	"context"
	"errors"
	"time"

	"git.hjkl.gq/team7/twitterman/server/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client
var ctx context.Context
var cancel context.CancelFunc
var dbname string = "twitterman"

var collectionList [2]string = [2]string{"Users", "Tweets"}

var nullUser = utils.User{ID: primitive.ObjectID{}, Email: "", Username: "", Password: "", SavedTweetsId: []string{}}

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

func bindType[T any](res *mongo.Cursor) T {
	var currentFoundValue T
	err := res.All(ctx, &currentFoundValue)
	utils.TestError(err, "bind type after find error: ")
	return currentFoundValue
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

func InsertTweet(twt utils.Tweet) {
	insert(twt, "Tweets")
}

func GetTweetsByTwitterId(id string) []utils.Tweet {
	myDict := map[string]string{
		"id": id,
	}
	res := find(myDict, "Tweets")
	binded := bindType[[]utils.Tweet](res)
	return binded
}

func GetTweetsByUsername(username string) []utils.Tweet {

	// TODO: Appena la struttura Tweet ha lo username si puo fare
	/*
		myDict := map[string]string{
			"username": username,
		}
		res := find(myDict, "Tweets")
		binded := bindType[[]utils.Tweet](res)
		return binded
	*/
}

func GetTweetsByKeyword(keyword string) []utils.Tweet {
	myDict := map[string]interface{}{
		"content": map[string]string{"$regex": "/#" + keyword + "/", "$options": "i"},
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

func InitDbTest() {
	dbname = "test"
	client = nil
	connect()
	defer disconnect()

	// Clear database
	for _, col := range collectionList {
		_, err := client.Database(dbname).Collection(col).DeleteMany(ctx, bson.D{})
		utils.TestError(err, "InitDbTest clear function error on collection:"+col)
	}
}

func connect() {
	var err error
	if client != nil && client.Ping(ctx, nil) == nil {
		return
	}
	client, err = mongo.NewClient(options.Client().ApplyURI(utils.DbUrl))
	utils.TestError(err, "database.Connect function, new client error")
	ctx, cancel = context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	utils.TestError(err, "database.Connect function, connection error")
}

func disconnect() {
	defer cancel()
	err := client.Disconnect(ctx)
	utils.TestError(err, "database.Disconnect function, some error")
}

func find(query interface{}, collection string) *mongo.Cursor {
	connect()
	defer disconnect()
	col := client.Database(dbname).Collection(collection)
	cursor, err := col.Find(ctx, query)
	utils.TestError(err, "find function")
	return cursor
}

func insert(query interface{}, collection string) {
	connect()
	defer disconnect()
	col := client.Database(dbname).Collection(collection)
	_, err := col.InsertOne(ctx, query)
	utils.TestError(err, "insert function")
}
