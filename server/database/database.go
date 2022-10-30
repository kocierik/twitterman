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
var Cancel context.CancelFunc
var Dbname string = "twitterman"

const Collection string = "Users"

func Connect() {
	var err error
	Client, err = mongo.NewClient(options.Client().ApplyURI(utils.DatabaseUrl))
	if err != nil {
		log.Fatal(err)
	}
	Ctx, Cancel = context.WithTimeout(context.Background(), 10*time.Second)
	err = Client.Connect(Ctx)
	if err != nil {
		log.Fatal(err)
	}
}

func Disconnect() {
	defer Cancel()
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
	query := bson.M{"email": email}
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

func InitDbTest() {
	Dbname = "test"
	Connect()

	// Clear database
	if _, err := Client.Database(Dbname).Collection(Collection).DeleteMany(Ctx, bson.D{}); err != nil {
		log.Fatal(err)
	}
}
