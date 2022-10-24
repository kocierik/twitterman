package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type TweetData struct {
	EditHistoryTweetIds []string `json:"edit_history_tweet_ids"`
	Id                  string   `json:"id"`
	Text                string   `json:"text"`
}

type Tweet struct {
	DataTmp TweetData `json:"data"`
}

const ServerPort string = "8080"
const ServerUrl string = "localhost"

const DatabaseUrl string = "localhost"
const DatabasePort string = ""

const TwitterApi string = "https://api.twitter.com/2/tweets/"

var Client *http.Client

var Router = gin.Default()
