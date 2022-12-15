package api

import (
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"twitterman/utils"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
	"github.com/stretchr/testify/assert"
)

func getTestCookie(email string, password string) *http.Cookie {
	type login struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	body := login{
		Email:    email,
		Password: password,
	}

	bodyMarshaled, err := json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")

	_, res := sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))
	return res.Result().Cookies()[0]

}

func sendTestReqAuth(method, url string, body io.Reader, cookie *http.Cookie) ([]byte, *httptest.ResponseRecorder) {
	req, _ := http.NewRequest(method, url, body)
	req.AddCookie(cookie)
	res := httptest.NewRecorder()
	utils.Router.ServeHTTP(res, req)

	responseData, _ := ioutil.ReadAll(res.Body)
	return responseData, res
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
	database.InitDbTest()
	defer database.Disconnect()

	response, res := sendTestRequest("GET", "/tweet/id/1602802989407899648", nil)

	mockResponse := `[
		{
			"id": "1602802989407899648",
			"name": "",
			"propic": "",
			"timestamp": "",
			"content": "Attenzione, forse i vecchi non vanno bene per test",
			"username": "",
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

func TestGetTweetsByHashtag(t *testing.T) {
	initApiTest()
	database.InitDbTest()
	defer database.Disconnect()

	response, res := sendTestRequest("GET", "/tweet/hashtag/mannaggiaallamonetizzazione/date/2022-12-13T12:15:53.000Z/2022-12-14T00:35:36.000Z", nil)
	mockResponse := `[
		{
			"id": "1602803405940232192",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-13T23:11:25.000Z",
			"content": "Confermato, le test request si arrabbiano #mannaggiaallamonetizzazione",
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
	database.InitDbTest()
	defer database.Disconnect()

	response, res := sendTestRequest("GET", "/tweet/user/team7test/date/2022-12-13T12:15:53.000Z/2022-12-14T00:35:36.000Z", nil)

	mockResponse := `[
		{
			"id": "1602810191078215681",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-13T23:38:22.000Z",
			"content": "#oddashtag\n\ntwitter dai devo fare il progetto pls",
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
		},
		{
			"id": "1602803405940232192",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-13T23:11:25.000Z",
			"content": "Confermato, le test request si arrabbiano #mannaggiaallamonetizzazione",
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
		},
		{
			"id": "1602802989407899648",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-13T23:09:45.000Z",
			"content": "Attenzione, forse i vecchi non vanno bene per test",
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
	database.InitDbTest()
	defer database.Disconnect()

	response, res := sendTestRequest("GET", "/tweet/hashtag/bella/date/2022-11-25T20:39:08.913aZ/2022-12-02T22:59:59.914Z", nil)

	mockResponse := `{"message":"start date format wrong","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)

	response, res = sendTestRequest("GET", "/tweet/hashtag/bella/date/2022-11-25T20:39:08.913Z/2022-12-02T22:5A9:59.914Z", nil)

	mockResponse = `{"message":"end date format wrong","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)
}

func TestInvalidMode(t *testing.T) {
	initApiTest()
	database.InitDbTest()
	defer database.Disconnect()

	response, res := sendTestRequest("GET", "/tweet/hasahtag/bella/date/2022-11-25T20:39:08.913Z/2022-12-02T22:59:59.914Z", nil)

	mockResponse := `{"message":"invalid mode: hashtag, keyword, user and id permitted","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)
}
