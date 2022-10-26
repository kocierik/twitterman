package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)


// https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet

type Tweet struct {
	EditHistoryTweetIds []string `json:"edit_history_tweet_ids"`
	Id                  string   `json:"id"`
	Text                string   `json:"text"`
}

type User struct {
	Id                  string   `json:"id"`
	Name                string   `json:"name"`
	Username 			string 	 `json:"username"`
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

const ServerPort string = "8080"
const ServerUrl string = "localhost"

const DatabaseUrl string = "localhost"
const DatabasePort string = ""

const TwitterApi string = "https://api.twitter.com/2"

var Client *http.Client

var Router = gin.Default()
