package api

import (
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"git.hjkl.gq/team7/twitterman/server/TwitterApi"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/stretchr/testify/assert"
)

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
	mockResponse := utils.Request(http.MethodGet, utils.TwitterApi+"/tweets/search/recent?query=%23bellazio&tweet.fields="+TwitterApi.TweetsField, nil)

	var result []utils.Tweet
	var tmpMock TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	var ret []utils.Tweet

	for _, elem := range tmpMock.DataTmp {
		tmp := ConvertTweetDataToMyTweet(elem, TwitterApi.GetUserInfoByUserId(elem.Author))
		ret = append(ret, tmp)
	}

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}

func TestGetTweetsByKeyword(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/keyword/buongiorno", nil)
	mockResponse := utils.Request(http.MethodGet, utils.TwitterApi+"/tweets/search/recent?query=buongiorno&tweet.fields="+TwitterApi.TweetsField, nil)

	var result []utils.Tweet
	var tmpMock TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	var ret []utils.Tweet

	for _, elem := range tmpMock.DataTmp {
		usr := TwitterApi.GetUserInfoByUserId(elem.Author)
		tmp := ConvertTweetDataToMyTweet(elem, usr)
		ret = append(ret, tmp)
	}

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}

func TestGetUserInfo(t *testing.T) {
	initApiTest()
	user := "elonmusk"
	// fmt.Println(TwitterApi.GetUserInfoByUsername(user))
	response, res := sendTestRequest("GET", "/user/"+user, nil)

	var result TwitterApi.TwitterUserStructure
	var tmpMock = TwitterApi.TwitterUserStructure{
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
	usrData := TwitterApi.GetUserInfoByUsername(user)
	mockResponse := utils.Request(http.MethodGet, utils.TwitterApi+"/users/"+usrData.Id+"/tweets?tweet.fields="+TwitterApi.TweetsField, nil)

	var result []utils.Tweet
	var tmpMock TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]

	utils.UnmarshalToJson(response, &result)
	utils.UnmarshalToJson(mockResponse, &tmpMock)

	var ret []utils.Tweet

	for _, elem := range tmpMock.DataTmp {
		tmp := ConvertTweetDataToMyTweet(elem, usrData)
		ret = append(ret, tmp)
	}

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}
