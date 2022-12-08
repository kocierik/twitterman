package api

import (
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

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
			"username": "team7test",
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
	sendTestRequest("GET", "/tweet/id/1598367424365137934", nil)
	response, res := sendTestRequest("GET", "/tweet/15/hashtag/estremamentespecifico/date/2022-11-25T20:39:08.913Z/2022-12-02T22:59:59.914Z", nil)

	mockResponse := `[
		{
			"id": "1598367424365137934",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-01T17:24:24.000Z",
			"content": "ciao pisquani\n\n#estremamentespecifico",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
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

func TestGetTweetsByUsername(t *testing.T) {
	initApiTest()
	sendTestRequest("GET", "/tweet/id/1598367424365137934", nil)
	response, res := sendTestRequest("GET", "/tweet/15/user/team7test/date/2022-11-29T00:00:00.000Z/2022-12-30T00:00:00.000Z", nil)

	mockResponse := `[
		{
			"id": "1598367424365137934",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-01T17:24:24.000Z",
			"content": "ciao pisquani\n\n#estremamentespecifico",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
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

func TestDateTime(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/15/hashtag/bella/date/2022-11-25T20:39:08.913aZ/2022-12-02T22:59:59.914Z", nil)

	mockResponse := `{"message":"start date format wrong","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)

	response, res = sendTestRequest("GET", "/tweet/15/hashtag/bella/date/2022-11-25T20:39:08.913Z/2022-12-02T22:5A9:59.914Z", nil)

	mockResponse = `{"message":"end date format wrong","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)
}

func TestInvalidMode(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/15/hasahtag/bella/date/2022-11-25T20:39:08.913Z/2022-12-02T22:59:59.914Z", nil)

	mockResponse := `{"message":"invalid mode: hashtag, keyword, user and id permitted","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)
}

/*
//uncomment on need
func TestGetUserInfo(t *testing.T) {
	initApiTest()
	user := "elonmusk"

	response, res := sendTestRequest("GET", "/user/"+user, nil)

	tmpMock := TwitterApi.DataGeneric[TwitterApi.TwitterUserStruct]{
		Data: TwitterApi.TwitterUserStruct{
			Id:       "44196397",
			Propic:   "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
			Name:     "Elon Musk",
			Username: "elonmusk",
		},
	}

	result := utils.UnmarshalToJson[TwitterApi.TwitterUserStruct](response)

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}
*/
