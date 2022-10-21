package twittermanApi

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

type TweetData struct {
	EditHistoryTweetIds []string `json:"edit_history_tweet_ids"`
	Id                  string   `json:"id"`
	Text                string   `json:"text"`
}

type Tweet struct {
	DataTmp TweetData `json:"data"`
}

func getTweetById(c *gin.Context) {
	id := c.Param("id") // prendo l'id

	// eseguo la richiesta a twitter
	endpoint := utils.TwitterApi + id
	req, err := http.NewRequest(http.MethodGet, endpoint, nil)

	if err != nil {
		log.Fatalf("Error Occurred. %+v", err)
	}

	req.Header.Add("Authorization", "Bearer "+utils.GetEnvVar("BEARER_TOKEN"))

	response, err := utils.Client.Do(req)

	if err != nil {
		log.Fatalf("Error sending request to API endpoint. %+v", err)
	}

	// Close the connection to reuse it
	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)

	var result Tweet
	if err := json.Unmarshal(body, &result); err != nil { // Parse []byte to go struct pointer
		log.Fatalf("Can not unmarshal JSON. %+v", err)
	}

	if err != nil {
		log.Fatalf("Couldn't parse response body. %+v", err)
	}

	c.IndentedJSON(http.StatusOK, result)
}
