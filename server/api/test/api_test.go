package test

import (
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
	"twitterman/server/api"
	"twitterman/server/utils"

	"github.com/stretchr/testify/assert"
)

func initTest() {
	api.InitClient()
	api.InitApi()
}

func sendTestRequest(method, url string, body io.Reader) ([]byte, *httptest.ResponseRecorder) {
	req, _ := http.NewRequest(method, url, body)
	res := httptest.NewRecorder()
	utils.Router.ServeHTTP(res, req)

	responseData, _ := ioutil.ReadAll(res.Body)
	return responseData, res
}

func TestGetTweetById(t *testing.T) {
	initTest()
	response, res := sendTestRequest("GET", "/tweet/id/1581295611013320706", nil)

	var result utils.Tweet
	var tmpMock utils.Tweet
	mockResponse := `{
		"data": {
			"edit_history_tweet_ids": [
				"1581295611013320706"
			],
			"id": "1581295611013320706",
			"text": "#swetesting prova primo tweet"
		}
	}`

	api.UnmarshalToJson(response, &result)
	api.UnmarshalToJson([]byte(mockResponse), &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetRecentTweet(t *testing.T) {
	response, res := sendTestRequest("GET", "/tweet/hashtag/meme", nil)
	mockResponse := api.Request(http.MethodGet, "https://api.twitter.com/2/tweets/search/recent?query=%23meme", nil)

	var result utils.Data[[]utils.Tweet]
	var tmpMock utils.Data[[]utils.Tweet]

	api.UnmarshalToJson(response, &result)
	api.UnmarshalToJson(mockResponse, &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

// func TestGetEnvVar(t *testing.T) {
// 	assert.Equal(t, "https://qube.hjkl.gq", api.GetEnvVar("SONAR_HOST_URL"))
// 	assert.Equal(t, "", api.GetEnvVar("COSE_A_CASO"))
// }
