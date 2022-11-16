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

const Collection string = "Users"

var nullUser = utils.User{ID: primitive.ObjectID{}, Email: "", Username: "", Password: "", SavedTweetsId: []string{}}

func GetUserByEmail(email string) (utils.User, error) {
	query := bson.M{"email": email}
	res := find(query)
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
	res := find(query)
	var user []utils.User
	err := res.All(ctx, &user)
	utils.TestError(err, "GetUserById function")
	if len(user) == 0 {
		return nullUser, errors.New("no user with that ID")
	} else {
		return user[0], nil
	}
}

func InsertUser(email, username, password string, tweets []string) {
	user := utils.User{
		Email:         email,
		Username:      username,
		Password:      password,
		SavedTweetsId: tweets,
	}
	insert(user)
}

func InitDbTest() {
	dbname = "test"
	client = nil
	connect()
	defer disconnect()

	// Clear database
	_, err := client.Database(dbname).Collection(Collection).DeleteMany(ctx, bson.D{})
	utils.TestError(err, "InitDbTest function")
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

func find(query interface{}) *mongo.Cursor {
	connect()
	defer disconnect()
	col := client.Database(dbname).Collection(Collection)
	cursor, err := col.Find(ctx, query)
	utils.TestError(err, "find function")
	return cursor
}

func insert(query interface{}) {
	connect()
	defer disconnect()
	col := client.Database(dbname).Collection(Collection)
	_, err := col.InsertOne(ctx, query)
	utils.TestError(err, "insert function")
}
