package database

import (
	"context"
	"errors"
	"fmt"
	"time"

	"git.hjkl.gq/team7/twitterman/server/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client
var Ctx context.Context
var Cancel context.CancelFunc
var Dbname string = "twitterman"

const Collection string = "Users"

var nullUser = utils.User{ID: primitive.ObjectID{}, Email: "", Username: "", Password: "", SavedTweetsId: []string{}}

func Connect() {
	var err error
	if Client != nil && Client.Ping(Ctx, nil) == nil {
		fmt.Println("Errore di connessione")
		return
	}
	Client, err = mongo.NewClient(options.Client().ApplyURI(utils.DatabaseUrl))
	utils.ErrorMessage(err, "database.Connect func, new client error")
	Ctx, Cancel = context.WithTimeout(context.Background(), 10*time.Second)
	err = Client.Connect(Ctx)
	utils.ErrorMessage(err, "database.Connect func, connection error")
}

func Disconnect() {
	defer Cancel()
	err := Client.Disconnect(Ctx)
	utils.ErrorMessage(err, "database.Disconnect func, some error")
}

func find(query interface{}) *mongo.Cursor {
	Connect()
	defer Disconnect()
	col := Client.Database(Dbname).Collection(Collection)
	cursor, err := col.Find(Ctx, query)
	utils.ErrorMessage(err, "find func")
	return cursor
}

func insert(query interface{}) {
	Connect()
	defer Disconnect()
	col := Client.Database(Dbname).Collection(Collection)
	_, err := col.InsertOne(Ctx, query)
	utils.ErrorMessage(err, "insert func")
}

func GetUserByEmail(email string) (utils.User, error) {
	query := bson.M{"email": email}
	res := find(query)
	var user []utils.User
	err := res.All(Ctx, &user)
	utils.ErrorMessage(err, "GetUserByEmail func")
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
	err := res.All(Ctx, &user)
	fmt.Println(user)
	utils.ErrorMessage(err, "GetUserById func")
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
	Dbname = "test"
	Connect()
	defer Disconnect()

	// Clear database
	_, err := Client.Database(Dbname).Collection(Collection).DeleteMany(Ctx, bson.D{})
	utils.ErrorMessage(err, "InitDbTest func")
}
