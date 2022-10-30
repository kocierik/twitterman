package utils

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet

/*
TODO: implementare il poter inserite dei parametri per avere informazioni più precise
Campi di un tweet:
  - id
  - expansions
  - tweet.fields
  - media.fields
  - poll.fields
  - place.fields
  - user.fields
*/
type TweetData struct {
	EditHistoryTweetIds []string `json:"edit_history_tweet_ids"`
	Id                  string   `json:"id"`
	Text                string   `json:"text"`
}

type ApiTweet struct {
	DataTmp TweetData `json:"data"`
}

type Tweet struct {
	Id        string  `json:"id" bson:"id"`
	Name      string  `json:"name" bson:"name"`
	Title     string  `json:"title" bson:"title"`
	Timestamp string  `json:"timestamp" bson:"timestamp"`
	Content   string  `json:"content" bson:"content"`
	Likes     int     `json:"likes" bson:"likes"`
	IsLiked   bool    `json:"isLiked" bson:"isLiked"`
	Comments  []Tweet `json:"comments" bson:"comments"`
}

type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Email    string             `bson:"email" json:"email"`
	Username string             `bson:"username" json:"username"`
	Password string             `bson:"password" json:"password"`
	Tweets   []Tweet            `bson:"tweets" json:"tweets"`
}

// type MetaData struct {
// 	NewestId    string `json:"newest_id"`
// 	OldestId    string `json:"oldest_id"`
// 	ResultCount string `json:"result_count"`
// 	NextToken   string `json:"next_token"`
// }

type Data[T any] struct {
	DataTmp T `json:"data"`
}

const ServerPort = "8080"
const ServerUrl = "localhost"

var DatabaseUrl = os.Getenv("DATABASE_URL")

const TwitterApi string = "https://api.twitter.com/2"

var Client *http.Client

var Router = gin.Default()
