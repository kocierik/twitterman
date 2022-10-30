package api

import (
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
	"twitterman/server/database"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func initApiTest() {
	utils.Router = gin.Default()
	InitHttpClient()
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
	initApiTest()
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

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson([]byte(mockResponse), &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetTweetsByHashtag(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/hashtag/meme", nil)
	mockResponse := Request(http.MethodGet, utils.TwitterApi+"/tweets/search/recent?query=%23meme", nil)

	var result utils.Data[[]utils.TwitterTweetStructure]
	var tmpMock utils.Data[[]utils.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetUserTweetsById(t *testing.T) {
	initApiTest()
	user := "Pontifex"
	response, res := sendTestRequest("GET", "/user/"+user+"/tweets", nil)
	user_id := getUserIdByUsername(user)
	mockResponse := Request(http.MethodGet, utils.TwitterApi+"/users/"+user_id+"/tweets", nil)

	var result utils.Data[[]utils.TwitterTweetStructure]
	var tmpMock utils.Data[[]utils.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestLoginApi(t *testing.T) {
	initApiTest()
	// Insert user to database
	database.InitDbTest()
	defer database.Disconnect()
	database.InsertUser("aldo@aldo", "aldo", "aldo", []utils.Tweet{})

	// Test Correct credentials
	type login struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	body := login{
		Email:    "aldo@aldo",
		Password: "aldo",
	}
	bodyMarshaled, err := json.Marshal(body)
	utils.ErrorMessage(err)
	out, res := sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))
	assert.Equal(t, `{"success":true}`, string(out))
	assert.Equal(t, `AUTHORIZATION=make.this.jwt; Path=/; Max-Age=3600; HttpOnly; Secure`, res.Header().Get("Set-Cookie"))

	// Test incorrect credentials
	body = login{
		Email:    "notamail@outneh",
		Password: "notapsw",
	}
	bodyMarshaled, err = json.Marshal(body)
	utils.ErrorMessage(err)
	out, res = sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))
	assert.NotEqual(t, `{"success":true}`, string(out))
	assert.Equal(t, ``, res.Header().Get("Set-Cookie"))
}

func TestRegisterApi(t *testing.T) {
	initApiTest()
	// Insert user to database
	database.InitDbTest()
	defer database.Disconnect()

	// Test Correct credentials
	type register struct {
		Email    string `json:"email"`
		Password string `json:"password"`
		Username string `json:"username"`
	}
	body := register{
		Email:    "aldo@aldo",
		Password: "aldo",
		Username: "aldo",
	}
	bodyMarshaled, err := json.Marshal(body)
	utils.ErrorMessage(err)
	out, _ := sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	usr, err := database.GetUserByEmail("aldo@aldo")
	utils.ErrorMessage(err)
	assert.Equal(t, body.Email, usr.Email)
	assert.Equal(t, body.Password, usr.Password)
	assert.Equal(t, body.Username, usr.Username)
	assert.Equal(t, `{"success":true}`, string(out))
	// TODO: Test with invalid register fields
}
