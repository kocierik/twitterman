package database

import (
	"context"
	"errors"
	"time"

	"twitterman/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const savedFolderConst = "saved_folders.name"
const goFormatDate = "2006-01-02T15:04:05Z"

var client *mongo.Client
var ctx context.Context
var dbname string = "twitterman"

var collectionList [2]string = [2]string{"Users", "Tweets"}

var nullUser = utils.User{ID: primitive.ObjectID{}, Email: "", Username: "", Password: "", SavedFolders: []utils.TweetsFolder{}}

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
	sstart := start.Format(goFormatDate)
	eend := end.Format(goFormatDate)
	myDict := bson.M{
		"username":  primitive.Regex{Pattern: username, Options: "i"},
		"timestamp": bson.M{"$gte": sstart, "$lte": eend},
	}
	res := find(myDict, "Tweets")
	binded := bindType[[]utils.Tweet](res)
	return binded
}

func GetTweetsByKeyword(keyword string, start, end time.Time) []utils.Tweet {
	sstart := start.Format(goFormatDate)
	eend := end.Format(goFormatDate)
	myDict := bson.M{
		"content":   primitive.Regex{Pattern: keyword, Options: "i"},
		"timestamp": bson.M{"$gte": sstart, "$lte": eend},
	}
	res := find(myDict, "Tweets")
	binded := bindType[[]utils.Tweet](res)
	return binded
}

func InsertUser(email string, username string, password string, tweetsFolder []utils.TweetsFolder) error {
	user := utils.User{
		Email:        email,
		Username:     username,
		Password:     password,
		SavedFolders: tweetsFolder,
	}
	return insert(user, "Users")
}

func InsertTweetList(twts []utils.Tweet) {
	for _, t := range twts {
		insert(t, "Tweets")
	}
}

func ChangeField(email string, field string, content string) error {
	query := bson.M{field: content}
	updateQ := bson.M{"email": email}
	return insertMode(updateQ, bson.M{"$set": query}, "Users")
}

/* finds the correct saved folder of a user and push the tweet id*/
func insertTweetIntoFolder(email string, folderName string, id string) error {
	duplicate := find(bson.M{"email": email, savedFolderConst: folderName, "saved_folders.tweets": id}, "Users")
	if len(bindType[[]utils.TweetsFolder](duplicate)) > 0 {
		return errors.New("Duplicate tweet")
	}
	query := bson.M{"saved_folders.$.tweets": id}
	updateQ := bson.M{"email": email, savedFolderConst: folderName}
	insertMode(updateQ, bson.M{"$push": query}, "Users")
	return nil
}

func CreateFolder(email string, folderName string) error {
	folder := utils.TweetsFolder{
		Name:   folderName,
		Tweets: []string{},
	}
	return insertMode(bson.M{"email": email}, bson.M{"$push": bson.M{"saved_folders": folder}}, "Users")
}

func DeleteFolder(email string, folderName string) error {
	query := bson.M{"saved_folders": bson.M{"name": folderName}}
	err := insertMode(bson.M{"email": email}, bson.M{"$pull": query}, "Users")
	return err
}

/* add tweet into the folder of said user, if the folder doesn't exists create it*/
func InsertSavedTweet(email string, folderName string, id string) error {
	folder := find(bson.M{"email": email, savedFolderConst: folderName}, "Users")
	if len(bindType[[]utils.TweetsFolder](folder)) == 0 {
		err := CreateFolder(email, folderName)
		if err != nil {
			return err
		}
	}
	return insertTweetIntoFolder(email, folderName, id)
}

func RemoveSavedTweet(email string, folderName string, id string) error {
	query := bson.M{"saved_folders.$.tweets": id}
	updateQ := bson.M{"email": email, savedFolderConst: folderName}
	return insertMode(updateQ, bson.M{"$pull": query}, "Users")
}

func DeleteUser(email string) error {
	query := bson.M{"email": email}
	return delete(query, "Users")
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
	// log.Println(dbname, collection, query)
	col := client.Database(dbname).Collection(collection)
	cursor, err := col.Find(ctx, query)
	utils.TestError(err, "find function")
	return cursor
}

func insert[T queryTypeInterface](query T, collection string) error {
	var updateQuery bson.M
	switch collection {
	case "Tweets":
		updateQuery = bson.M{"id": query.GetKey()}
	case "Users":
		updateQuery = bson.M{"email": query.GetKey()}
	default:
		updateQuery = bson.M{}
	}
	return insertMode(updateQuery, bson.M{"$set": query}, collection)
}

func insertMode(updateQuery primitive.M, query primitive.M, collection string) error {
	mytrue := true
	col := client.Database(dbname).Collection(collection)
	_, err := col.UpdateOne(ctx, updateQuery, query, &options.UpdateOptions{Upsert: &mytrue})
	utils.TestError(err, "insert function")
	return err
}

func delete(query primitive.M, collection string) error {
	col := client.Database(dbname).Collection(collection)
	_, err := col.DeleteOne(ctx, query)
	utils.TestError(err, "delete function")
	return err
}

func InitDbTest() {
	dbname = "test"
	client = nil
	Connect()

	// Clear database
	for _, col := range collectionList {
		_, err := client.Database(dbname).Collection(col).DeleteMany(ctx, bson.D{})
		utils.TestError(err, "InitDbTest clear function error on collection:"+col)
	}
}
