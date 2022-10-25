package twittermanApi

import (
	"io/ioutil"
	"net/http"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func getTweetById(c *gin.Context) {
	id := c.Param("id") // prendo l'id

	// eseguo la richiesta a twitter
	endpoint := utils.TwitterApi + "/tweets/" + id
	req, err := http.NewRequest(http.MethodGet, endpoint, nil)

	utils.ErrorMessage(err, "Error Occurred.")

	req.Header.Add("Authorization", "Bearer "+utils.GetEnvVar("BEARER_TOKEN"))

	response, err := utils.Client.Do(req)

	utils.ErrorMessage(err, "Error sending request to API endpoint.")

	// Close the connection to reuse it
	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)

	utils.ErrorMessage(err, "Couldn't parse response body.")

	var result utils.ApiTweet
	utils.StringToJson(body, &result)

	c.IndentedJSON(http.StatusOK, result)
}
