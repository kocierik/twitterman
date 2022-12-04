package utils

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func UnmarshalToJson[T any](response []byte) T {
	var result T
	// Parse []byte to go struct pointer
	err := json.Unmarshal(response, &result)
	TestError(err, "UnmarshalToJson function")
	return result
}

func TestError(err error, msg string) {
	if err != nil {
		log.Fatalf(msg+"= %+v", err)
	}
}

func IsLoggedIn(c *gin.Context) bool {
	// TODO: handle jwt cookie from request
	return true
}

func InitHttpClient() {
	Client = &http.Client{Timeout: 10 * time.Second}
}
