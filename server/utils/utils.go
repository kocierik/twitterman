package utils

import (
	"encoding/json"
	"log"
	"os"
)

func GetEnvVar(key string) string {
	return os.Getenv(key)
}

func UnmarshalToJson(response []byte, result any) {
	// Parse []byte to go struct pointer
	err := json.Unmarshal(response, result)
	ErrorMessage(err, "Can not unmarshal JSON")
}

func ErrorMessage(err error, msg string) {
	if err != nil {
		log.Fatalf(msg+"= %+v", err)
	}
}
