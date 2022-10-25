package database

import (
	"context"
	"log"
	"time"
	"twitterman/server/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type User struct {
	Email    string        `bson:"email"`
	Username string        `bson:"username"`
	Password string        `bson:"password"`
	Tweets   []utils.Tweet `bson:"tweets"`
}

var Client *mongo.Client
var Ctx context.Context
var dbname string = "twitterman"

const collection string = "Users"

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

func find(query interface{}) interface{} {
	col := Client.Database(dbname).Collection(collection)

	var decoded interface{}
	if err := col.FindOne(Ctx, query).Decode(&decoded); err != nil {
		log.Fatal(err)
	}
	return decoded
}

func insert(query interface{}) {
	col := Client.Database(dbname).Collection(collection)
	_, err := col.InsertOne(Ctx, query)
	if err != nil {
		log.Fatal(err)
	}
}

func GetUserByEmail(email string) User {
	query := bson.D{{"email", email}}
	res := find(query)
	doc, err := bson.Marshal(res)
	if err != nil {
		log.Fatal(err)
	}
	var user User
	if err := bson.Unmarshal(doc, &user); err != nil {
		log.Fatal(err)
	}

	return user
}

func InsertUser(email, username, password string, tweets []utils.Tweet) {
	user := User{email, username, password, tweets}
	insert(user)
}
