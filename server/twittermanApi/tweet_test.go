package twittermanApi

import (
	"encoding/json"
	"fmt"
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
	response, res := sendRequest("GET", "/tweet/1581295611013320706", nil)

	var result Tweet
	var tmpMock Tweet
	mockResponse := `{
		"data": {
			"edit_history_tweet_ids": [
				"1581295611013320706"
			],
			"id": "1581295611013320706",
			"text": "#swetesting prova primo tweet"
		}
	}`
	if err := json.Unmarshal(response, &result); err != nil { // Parse []byte to go struct pointer
		fmt.Println("Can not unmarshal JSON", err)
	}
	if err := json.Unmarshal([]byte(mockResponse), &tmpMock); err != nil { // Parse []byte to go struct pointer
		fmt.Println("Can not unmarshal JSON", err)
	}
	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}
