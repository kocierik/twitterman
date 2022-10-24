package utils

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"
)

func GetEnvVar(key string) string {
	return os.Getenv(key)
}

func InitClient() {
	Client = &http.Client{Timeout: 10 * time.Second}
}

func StringToJson(response []byte, result *Tweet) {
	// Parse []byte to go struct pointer
	err := json.Unmarshal(response, result)
	ErrorMessage(err, "Can not unmarshal JSON")
}

func ErrorMessage(err error, msg string) {
	if err != nil {
		log.Fatalf(msg+" %+v", err)
	}
}
