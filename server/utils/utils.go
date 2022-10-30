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
