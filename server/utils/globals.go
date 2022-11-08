package utils

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/* Useful structure for fetching data from Twitter API */
type PublicMetrics struct {
	RetweetCount int64 `json:"retweet_count"`
	ReplyCount   int64 `json:"reply_count"`
	LikeCount    int64 `json:"like_count"`
	QuoteCount   int64 `json:"quote_count"`
}

type TwitterMediaStructure struct {
	Id      string `json:"media_key"`
	Type    string `json:"type"`
	Url     string `json:"url"`
	Height  uint64 `json:"height"`
	Width   uint64 `json:"width"`
	Preview string `json:"preview_image_url"`
}

// tweet count
type TweetCount struct {
	Start string `json:"start"`
	End   string `json:"end"`
	Count uint64 `json:"tweet_count"`
}

// My tweet structure
type Tweet struct {
	Id            string        `json:"id" bson:"id"`
	Name          string        `json:"name" bson:"name"`
	Propic        string        `json:"propic" bson:"propic"`
	Timestamp     string        `json:"timestamp" bson:"timestamp"`
	Content       string        `json:"content" bson:"content"`
	PublicMetrics PublicMetrics `json:"public_metrics"`
	// Comments      []Tweet                 `json:"comments" bson:"comments"`
	Media []TwitterMediaStructure `json:"media" bson:"media"`
}

// Db user structure
type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Email    string             `bson:"email" json:"email"`
	Username string             `bson:"username" json:"username"`
	Password string             `bson:"password" json:"password"`
	Tweets   []Tweet            `bson:"tweets" json:"tweets"`
}

type Dict map[string]any

const ServerPort = "8080"
const ServerUrl = "localhost"

var DatabaseUrl = os.Getenv("DATABASE_URL")

const TwitterApi string = "https://api.twitter.com/2"

var Client *http.Client

var Router = gin.Default()
