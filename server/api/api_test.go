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

	mockResponse := `[
		{
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
			"media": null,
			"geo": {
				"id": "",
				"full_name": "",
				"coordinates": null
			}
		}
	]`

	result := utils.UnmarshalToJson[[]utils.Tweet](response)
	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetTweetsByHashtag(t *testing.T) {
	initApiTest()

	hashtag := "bellazio"

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := TwitterApi.BaseQueryPlus("query", "#"+hashtag)

	mockResponse := utils.Request(http.MethodGet, endpoint, q)

	response, res := sendTestRequest("GET", "/tweet/hashtag/"+hashtag, nil)

	result := utils.UnmarshalToJson[[]utils.Tweet](response)
	tmpMock := utils.UnmarshalToJson[TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]]([]byte(mockResponse))

	ret := CastTweetStructToMyStruct(tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}

func TestGetTweetsByKeyword(t *testing.T) {
	initApiTest()

	keyword := "bellazio"

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := TwitterApi.BaseQueryPlus("query", keyword)

	mockResponse := utils.Request(http.MethodGet, endpoint, q)

	response, res := sendTestRequest("GET", "/tweet/keyword/"+keyword, nil)

	result := utils.UnmarshalToJson[[]utils.Tweet](response)
	tmpMock := utils.UnmarshalToJson[TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]]([]byte(mockResponse))

	ret := CastTweetStructToMyStruct(tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}

func TestGetUserInfo(t *testing.T) {
	initApiTest()
	user := "elonmusk"

	response, res := sendTestRequest("GET", "/user/"+user, nil)

	tmpMock := TwitterApi.Data[TwitterApi.TwitterUserStructure]{
		DataTmp: TwitterApi.TwitterUserStructure{
			Id:       "44196397",
			Propic:   "https://pbs.twimg.com/profile_images/1587290337587904512/Y4s_eu5O_normal.jpg",
			Name:     "Elon Musk",
			Username: "elonmusk",
		},
		Include: TwitterApi.TwitterInclude{},
		Meta:    TwitterApi.TwitterMetaStructure{},
	}

	result := utils.UnmarshalToJson[TwitterApi.Data[TwitterApi.TwitterUserStructure]](response)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetUserTweetsByUsername(t *testing.T) {
	initApiTest()
	user := "team7test"
	response, res := sendTestRequest("GET", "/user/"+user+"/tweets", nil)

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := TwitterApi.BaseQueryPlus("query", "from:"+user)
	mockResponse := utils.Request(http.MethodGet, endpoint, q)

	result := utils.UnmarshalToJson[[]utils.Tweet](response)
	tmpMock := utils.UnmarshalToJson[TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]]([]byte(mockResponse))

	ret := CastTweetStructToMyStruct(tmpMock)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, ret, result)
}
