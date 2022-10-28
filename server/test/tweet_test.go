package test

import (
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"log"
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

func sendRequest(method, url string, body io.Reader) (string, *httptest.ResponseRecorder) {
	req, _ := http.NewRequest(method, url, body)
	res := httptest.NewRecorder()
	utils.Router.ServeHTTP(res, req)

	responseData, _ := ioutil.ReadAll(res.Body)
	return string(responseData), res
}

func TestGetTweetById(t *testing.T) {
	initTest()
	response, res := sendRequest("GET", "/tweet/1581295611013320706", nil)

	var result utils.ApiTweet
	var tmpMock utils.ApiTweet
	mockResponse := `{
		"data": {
			"edit_history_tweet_ids": [
				"1581295611013320706"
			],
			"id": "1581295611013320706",
			"text": "#swetesting prova primo tweet"
		}
	}`

	log.Println(result, tmpMock, mockResponse, response, res)

	//utils.StringToJson(response, &result)
	// utils.StringToJson([]byte(mockResponse), &tmpMock)

	// assert.Equal(t, http.StatusOK, res.Code)
	// assert.Equal(t, tmpMock, result)
}

func TestLoginApi(t *testing.T) {
	initTest()
	body := struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}{
		Username: "aldo",
		Password: "aldo",
	}
	bodyMarshaled, err := json.Marshal(body)
	if err != nil {
		log.Fatal(err)
	}
	out, res := sendRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))
	assert.Equal(t, `{"success":true}`, out)
	assert.Equal(t, `make.this.jwt`, res.Header().Get("AUTHORIZATION"))
}
