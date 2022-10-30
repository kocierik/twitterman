package api

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

	body := Request(http.MethodGet, endpoint, nil)

	var result utils.Data[utils.Tweet]
	utils.UnmarshalToJson(body, &result)

	c.IndentedJSON(http.StatusOK, result)
}

func GetTweetsByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag") // prendo l'hashtag

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := map[string]string{"query": "#" + hashtag}

	body := Request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.Tweet]
	utils.UnmarshalToJson(body, &result)

	c.IndentedJSON(http.StatusOK, result)
}

func GetUserTweetsById(c *gin.Context) {
	username := c.Param("username")
	id := getUserIdByUsername(username)

	endpoint := utils.TwitterApi + "/users/" + id + "/tweets"
	body := Request(http.MethodGet, endpoint, nil)

	var result utils.Data[[]utils.Tweet]
	utils.UnmarshalToJson(body, &result)

	c.IndentedJSON(http.StatusOK, result)
}

func getUserIdByUsername(username string) string {
	endpoint := utils.TwitterApi + "/users/by/username/" + username
	body := Request(http.MethodGet, endpoint, nil)

	var result utils.Data[utils.User]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp.ID.Hex()
}
