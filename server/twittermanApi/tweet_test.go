package twittermanApi

import (
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
	"twitterman/server/utils"

	"github.com/stretchr/testify/assert"
)

func initTest() {
	utils.InitClient()
	InitApi()
}

func sendRequest(method, url string, body io.Reader) ([]byte, *httptest.ResponseRecorder) {
	req, _ := http.NewRequest(method, url, body)
	res := httptest.NewRecorder()
	utils.Router.ServeHTTP(res, req)

	responseData, _ := ioutil.ReadAll(res.Body)
	return responseData, res
}

func TestGetTweetById(t *testing.T) {
	initTest()
	response, res := sendRequest("GET", "/tweet/id/1581295611013320706", nil)

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

	utils.StringToJson(response, &result)
	utils.StringToJson([]byte(mockResponse), &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

// func TestGetRecentTweet(t *testing.T) {
// 	initTest()
// 	response, res := sendRequest("GET", "/tweet/recent/Pontifex", nil)

// 	var result utils.Tweet
// 	var tmpMock utils.Tweet
// 	mockResponse := utils.Request(http.MethodGet, "https://api.twitter.com/2/tweets/search/recent?query=%23meme", nil)

// 	utils.StringToJson(response, &result)
// 	utils.StringToJson(mockResponse, &tmpMock)

// 	assert.Equal(t, http.StatusOK, res.Code)
// 	assert.Equal(t, tmpMock, result)
// }
