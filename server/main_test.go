package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func TestWelcome(t *testing.T) {
	initClient()
	mockResponse := "\"{message:'This is a Go server!'}\""
	r := gin.Default()
	r.GET("/welcome", getWelcome)
	req, _ := http.NewRequest("GET", "/welcome", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	responseData, _ := ioutil.ReadAll(w.Body)
	assert.Equal(t, mockResponse, string(responseData))
	assert.Equal(t, http.StatusOK, w.Code)
}

func TestGetTweetById(t *testing.T) {
	initClient()
	mockResponse := `{
		"data": {
			"edit_history_tweet_ids": [
				"1581295611013320706"
			],
			"id": "1581295611013320706",
			"text": "#swetesting prova primo tweet"
		}
	}`

	r := gin.Default()
	r.GET("/tweet/:id", getTweetById)
	req, _ := http.NewRequest("GET", "/tweet/1581295611013320706", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	responseData, _ := ioutil.ReadAll(w.Body)
	var result Tweet
	var tmpMock Tweet
	if err := json.Unmarshal(responseData, &result); err != nil { // Parse []byte to go struct pointer
		fmt.Println("Can not unmarshal JSON", err)
	}
	if err := json.Unmarshal([]byte(mockResponse), &tmpMock); err != nil { // Parse []byte to go struct pointer
		fmt.Println("Can not unmarshal JSON", err)
	}
	assert.Equal(t, tmpMock, result)
	assert.Equal(t, http.StatusOK, w.Code)
}
