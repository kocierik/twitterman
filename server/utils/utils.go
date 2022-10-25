package utils

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"
)

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

func GetEnvVar(key string) string {
	return os.Getenv(key)
}

func InitClient() {
	Client = &http.Client{Timeout: 10 * time.Second}
}

func StringToJson(response []byte, result *ApiTweet) {
	// Parse []byte to go struct pointer
	err := json.Unmarshal(response, result)
	ErrorMessage(err, "Can not unmarshal JSON")
}

func ErrorMessage(err error, msg string) {
	if err != nil {
		log.Fatalf(msg+" %+v", err)
	}
}
