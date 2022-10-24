package test

import (
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
	"twitterman/server/twittermanApi"
	"twitterman/server/utils"

	"github.com/stretchr/testify/assert"
)

func initTest() {
	utils.InitClient()
	twittermanApi.InitApi()
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
	response, res := sendRequest("GET", "/tweet/1581295611013320706", nil)

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
