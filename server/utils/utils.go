package utils

import (
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
