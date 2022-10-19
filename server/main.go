package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	twitter "github.com/g8rswimmer/go-twitter/v2"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type authorize struct {
	Token string
}

func (a authorize) Add(req *http.Request) {
	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", a.Token))
}

func getTweetById(c *gin.Context) {
	id := c.Param("id")

	token := flag.String("token", os.Getenv("BEARER_TOKEN"), "twitter API token")
	ids := flag.String("ids", id, "twitter ids")
	flag.Parse()

	client := &twitter.Client{
		Authorizer: authorize{
			Token: *token,
		},
		Client: http.DefaultClient,
		Host:   "https://api.twitter.com",
	}
	opts := twitter.TweetLookupOpts{
		Expansions:  []twitter.Expansion{twitter.ExpansionEntitiesMentionsUserName, twitter.ExpansionAuthorID},
		TweetFields: []twitter.TweetField{twitter.TweetFieldCreatedAt, twitter.TweetFieldConversationID, twitter.TweetFieldAttachments},
	}

	fmt.Println("Callout to tweet lookup callout")

	tweetDictionary, err := client.TweetLookup(context.Background(), strings.Split(*ids, ","), opts)
	if err != nil {
		log.Panicf("tweet lookup error: %v", err)
	}

	c.IndentedJSON(http.StatusOK, tweetDictionary)
}

func main() {
	godotenv.Load()
	router := gin.Default()

	router.GET("/tweet/:id", getTweetById)

	router.Run("localhost:8081")
}
