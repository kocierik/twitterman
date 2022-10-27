package api

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
	InitClient()
	InitApi()
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

	UnmarshalToJson(response, &result)
	UnmarshalToJson([]byte(mockResponse), &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetTweetsByHashtag(t *testing.T) {
	response, res := sendTestRequest("GET", "/tweet/hashtag/meme", nil)
	mockResponse := Request(http.MethodGet, utils.TwitterApi+"/tweets/search/recent?query=%23meme", nil)

	var result utils.Data[[]utils.Tweet]
	var tmpMock utils.Data[[]utils.Tweet]

	UnmarshalToJson(response, &result)
	UnmarshalToJson(mockResponse, &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetUserTweetsById(t *testing.T) {
	user := "Pontifex"
	response, res := sendTestRequest("GET", "/user/"+user+"/tweets", nil)
	user_id := getUserIdByUsername(user)
	mockResponse := Request(http.MethodGet, utils.TwitterApi+"/users/"+user_id+"/tweets", nil)

	var result utils.Data[[]utils.Tweet]
	var tmpMock utils.Data[[]utils.Tweet]

	UnmarshalToJson(response, &result)
	UnmarshalToJson(mockResponse, &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}
