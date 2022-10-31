package utils

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet

/* Useful structure for fetching data from Twitter API */
type PublicMetrics struct {
	RetweetCount int64 `json:"retweet_count"`
	ReplyCount   int64 `json:"reply_count"`
	LikeCount    int64 `json:"like_count"`
	QuoteCount   int64 `json:"quote_count"`
}

type TwitterTweetStructure struct {
	EditHistoryTweetIds []string      `json:"edit_history_tweet_ids"`
	Id                  string        `json:"id"`
	Text                string        `json:"text"`
	Author              string        `json:"author_id"`
	PublicMetrics       PublicMetrics `json:"public_metrics"`
	Timestamp           string        `json:"created_at"`
}

type TwitterUserStructure struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Username string `json:"username"`
}

type Data[T any] struct {
	DataTmp T `json:"data"`
}

// My tweet structure
type Tweet struct {
	Id            string        `json:"id" bson:"id"`
	Name          string        `json:"name" bson:"name"`
	Timestamp     string        `json:"timestamp" bson:"timestamp"`
	Content       string        `json:"content" bson:"content"`
	PublicMetrics PublicMetrics `json:"public_metrics"`
	Comments      []Tweet       `json:"comments" bson:"comments"`
}

// Db user structure
type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Email    string             `bson:"email" json:"email"`
	Username string             `bson:"username" json:"username"`
	Password string             `bson:"password" json:"password"`
	Tweets   []Tweet            `bson:"tweets" json:"tweets"`
}

const ServerPort = "8080"
const ServerUrl = "localhost"

var DatabaseUrl = os.Getenv("DATABASE_URL")

const TwitterApi string = "https://api.twitter.com/2"

var Client *http.Client

var Router = gin.Default()
