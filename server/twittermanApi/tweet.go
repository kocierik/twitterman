package twittermanApi

import (
	"net/http"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
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
func GetTweetById(c *gin.Context) {
	id := c.Param("id") // prendo l'id

	// eseguo la richiesta a twitter
	endpoint := utils.TwitterApi + "/tweets/" + id

	body := utils.Request(http.MethodGet, endpoint, nil)

	var result utils.Tweet
	utils.StringToJson(body, &result)

	c.IndentedJSON(http.StatusOK, result)
}

func GetTweetByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag") // prendo l'hashtag

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := map[string]string{"query": "%23" + hashtag}

	body := utils.Request(http.MethodGet, endpoint, q)

	var result utils.Tweet
	utils.StringToJson(body, &result)

	c.IndentedJSON(http.StatusOK, result)
}
