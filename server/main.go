package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// Global variables
var client *http.Client

func initClient() {
	client = &http.Client{Timeout: 10 * time.Second}
}

func getEnvVar(key string) string {
	// load .env file
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}
	return os.Getenv(key)
}

func getTweetById(c *gin.Context) {
	id := c.Param("id") // prendo l'id

	endpoint := "https://api.twitter.com/2/tweets/" + id
	req, err := http.NewRequest(http.MethodGet, endpoint, nil)

	if err != nil {
		log.Fatalf("Error Occurred. %+v", err)
	}

	req.Header.Add("Authorization", "Bearer "+getEnvVar("BEARER_TOKEN"))

	response, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error sending request to API endpoint. %+v", err)
	}

	// Close the connection to reuse it
	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		log.Fatalf("Couldn't parse response body. %+v", err)
	}

	c.IndentedJSON(http.StatusOK, string(body))
}

func main() {
	initClient()
	router := gin.Default()

	router.GET("/tweet/:id", getTweetById)

	router.Run("localhost:8081")
}
