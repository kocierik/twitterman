package utils

import (
	"encoding/json"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func GetEnvVar(key string) string {
	return os.Getenv(key)
}

func UnmarshalToJson[T any](response []byte, result *T) {
	// Parse []byte to go struct pointer
	err := json.Unmarshal(response, result)
	ErrorMessage(err)
}

func ErrorMessage(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func IsLoggedIn(c *gin.Context) bool {
	// TODO: handle jwt cookie from request
	return true
}

func ConvertTweetDataToMyTweet(tw TwitterTweetStructure, usr TwitterUserStructure) Tweet {
	var ret Tweet = Tweet{
		Id:            tw.Id,
		Name:          usr.Name,
		Propic:        usr.Propic,
		Content:       tw.Text,
		Timestamp:     tw.Timestamp,
		PublicMetrics: tw.PublicMetrics,
		Comments:      []Tweet{},
	}

	return ret
}
