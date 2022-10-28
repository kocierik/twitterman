package database

import (
	"context"
	"errors"
	"log"
	"time"
	"twitterman/server/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty"`
	Email    string             `bson:"email"`
	Username string             `bson:"username"`
	Password string             `bson:"password"`
	Tweets   []utils.Tweet      `bson:"tweets"`
}

var Client *mongo.Client
var Ctx context.Context
var Dbname string = "twitterman"

const Collection string = "Users"

func Connect(saveGlobal bool) *mongo.Client {
	currClient, err := mongo.NewClient(options.Client().ApplyURI(utils.DatabaseUrl))
	if err != nil {
		log.Fatal(err)
	}
	currCtx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = currClient.Connect(currCtx)
	if err != nil {
		log.Fatal(err)
	}
	if saveGlobal {
		Client = currClient
		Ctx = currCtx
	}
	return currClient
}

func Disconnect() {
	if err := Client.Disconnect(Ctx); err != nil {
		log.Fatal(err)
	}
}

func find(query interface{}) *mongo.Cursor {
	col := Client.Database(Dbname).Collection(Collection)
	cursor, err := col.Find(Ctx, query)
	if err != nil {
		log.Fatal(err)
	}
	return cursor
}

func insert(query interface{}) {
	col := Client.Database(Dbname).Collection(Collection)
	_, err := col.InsertOne(Ctx, query)
	if err != nil {
		log.Fatal(err)
	}
}

func GetUserByEmail(email string) (User, error) {
	query := bson.D{{"email", email}}
	res := find(query)
	var user []User
	if err := res.All(Ctx, &user); err != nil {
		log.Fatal(err)
	}
	if len(user) == 0 {
		return User{primitive.ObjectID{}, "", "", "", []utils.Tweet{}}, errors.New("no user with that email")
	} else {
		return user[0], nil
	}
}

func GetUserById(id primitive.ObjectID) (User, error) {
	query := bson.M{"_id": id}
	res := find(query)
	var user []User
	if err := res.All(Ctx, &user); err != nil {
		log.Fatal(err)
	}

	if len(user) == 0 {
		return User{primitive.ObjectID{}, "", "", "", []utils.Tweet{}}, errors.New("no user with that ID")
	} else {
		return user[0], nil
	}
}

func InsertUser(email, username, password string, tweets []utils.Tweet) {
	user := User{
		Email:    email,
		Username: username,
		Password: password,
		Tweets:   tweets,
	}
	insert(user)
}
