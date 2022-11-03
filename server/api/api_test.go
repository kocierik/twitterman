package api

import (
	"bytes"
	"encoding/json"
	"fmt"
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
		"id": "1581295611013320706",
		"name": "team7",
		"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
		"timestamp": "2022-10-15T14:47:07.000Z",
		"content": "#swetesting prova primo tweet",
		"public_metrics": {
			"retweet_count": 0,
			"reply_count": 0,
			"like_count": 1,
			"quote_count": 0
		},
		"comments": []
	}`

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson([]byte(mockResponse), &tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetTweetsByHashtag(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/hashtag/bellazio", nil)
	mockResponse := request(http.MethodGet, utils.TwitterApi+"/tweets/search/recent?query=%23bellazio&tweet.fields="+TweetsField, nil)

	var result []utils.Tweet
	var tmpMock utils.Data[[]utils.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	var ret []utils.Tweet

	for _, elem := range tmpMock.DataTmp {
		tmp := utils.ConvertTweetDataToMyTweet(elem, getUserInfoByUserId(elem.Author))
		ret = append(ret, tmp)
	}

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}

func TestGetTweetsByKeyword(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/keyword/salvini", nil)
	mockResponse := request(http.MethodGet, utils.TwitterApi+"/tweets/search/recent?query=salvini&tweet.fields="+TweetsField, nil)

	var result []utils.Tweet
	var tmpMock utils.Data[[]utils.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	var ret []utils.Tweet

	for _, elem := range tmpMock.DataTmp {
		usr := getUserInfoByUserId(elem.Author)
		tmp := utils.ConvertTweetDataToMyTweet(elem, usr)
		ret = append(ret, tmp)
	}

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}

func TestGetUserInfo(t *testing.T) {
	initApiTest()
	user := "elonmusk"
	fmt.Println(getUserInfoByUsername(user))
	response, res := sendTestRequest("GET", "/user/"+user, nil)

	var result utils.TwitterUserStructure
	var tmpMock = utils.TwitterUserStructure{
		Id:       "44196397",
		Propic:   "https://pbs.twimg.com/profile_images/1587290337587904512/Y4s_eu5O_normal.jpg",
		Name:     "Elon Musk",
		Username: "elonmusk",
	}

	utils.UnmarshalToJson(response, &result)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetUserTweetsById(t *testing.T) {
	initApiTest()
	user := "team7test"
	response, res := sendTestRequest("GET", "/user/"+user+"/tweets", nil)
	usrData := getUserInfoByUsername(user)
	mockResponse := request(http.MethodGet, utils.TwitterApi+"/users/"+usrData.Id+"/tweets?tweet.fields="+TweetsField, nil)

	var result []utils.Tweet
	var tmpMock utils.Data[[]utils.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	var ret []utils.Tweet

	for _, elem := range tmpMock.DataTmp {
		tmp := utils.ConvertTweetDataToMyTweet(elem, usrData)
		ret = append(ret, tmp)
	}

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
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
	utils.ErrorMessage(err, "(api_test.go) Cannot parse bodyMarshaled1")

	out, res := sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))

	// test success
	assert.Equal(t, `{"success":true}`, string(out))
	assert.Equal(t, `AUTHORIZATION=make.this.jwt; Path=/; Max-Age=3600; HttpOnly; Secure`, res.Header().Get("Set-Cookie"))

	// Test incorrect credentials
	body = login{
		Email:    "notamail@outneh",
		Password: "notapsw",
	}

	bodyMarshaled, err = json.Marshal(body)
	utils.ErrorMessage(err, "(api_test.go) Cannot parse bodyMarshaled2")

	out, res = sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))

	// test success but no AUTHORIZATION given
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
	utils.ErrorMessage(err, "(api_test.go) Cannot parse bodyMarshaled1")
	out, _ := sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	usr, err := database.GetUserByEmail("aldo@aldo")
	utils.ErrorMessage(err, "(api_test.go) Cannot parse bodyMarshaled1")
	assert.Equal(t, body.Email, usr.Email)
	assert.Equal(t, body.Password, usr.Password)
	assert.Equal(t, body.Username, usr.Username)
	assert.Equal(t, `{"success":true}`, string(out))
	// TODO: Test with invalid register fields
}
