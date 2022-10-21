package utils

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"
)

func GetEnvVar(key string) string {
	// load .env file
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}
	return os.Getenv(key)
}

func InitClient() {
	Client = &http.Client{Timeout: 10 * time.Second}
}
