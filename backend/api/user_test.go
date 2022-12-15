package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
	"twitterman/database"
	"twitterman/utils"
)

type register struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Username string `json:"username"`
}

var testUser = register{
	Email:    "testUser@sium",
	Password: "testUser123",
	Username: "testUser",
}

func TestUpdateUser(t *testing.T) {
	initApiTest()
	database.InitDbTest()
	database.InsertUser(testUser.Email, testUser.Username, testUser.Password, []utils.TweetsFolder{})

	body := register{
		Email:    "porca@paletta",
		Username: "testUser",
		Password: "agg1123DDDD",
	}

	bodyMarshaled, err := json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")

	cookie := getTestCookie(testUser.Email, testUser.Password)
	sendTestReqAuth("POST", "/user/modify/update", bytes.NewBuffer(bodyMarshaled), cookie)

	usr, _ := database.GetUserByEmail("porca@paletta")
	assert.Equal(t, body.Username, usr.Username)
	assert.Equal(t, body.Password, usr.Password)
}

func TestGetUserInfo(t *testing.T) {
	initApiTest()
	database.InitDbTest()
	database.InsertUser(testUser.Email, testUser.Username, testUser.Password, []utils.TweetsFolder{})

	cookie := getTestCookie(testUser.Email, testUser.Password)
	response, _ := sendTestReqAuth("GET", "/user", nil, cookie)
	var userRep utils.User
	json.Unmarshal([]byte(response), &userRep)
	fmt.Println(userRep)
	assert.Equal(t, testUser.Username, userRep.Username)

}

func TestSavingTweets(t *testing.T) {
	initApiTest()
	database.InitDbTest()
	defer database.Disconnect()
	database.InsertUser(testUser.Email, testUser.Username, testUser.Password, []utils.TweetsFolder{})
	cookie := getTestCookie(testUser.Email, testUser.Password)

	response, _ := sendTestReqAuth("POST", "/user/folder/sium/add/123456789", nil, cookie)
	usr, _ := database.GetUserByEmail(testUser.Email)
	fmt.Println(usr)
	assert.Equal(t, "123456789", usr.SavedFolders[0].Tweets[0])

	response, _ = sendTestReqAuth("POST", "/user/folder/delete/sium", nil, cookie)
	usr, _ = database.GetUserByEmail(testUser.Email)
	assert.Equal(t, 0, len(usr.SavedFolders))

	response, _ = sendTestReqAuth("POST", "/user/folder/create/rosalinda", nil, cookie)
	usr, _ = database.GetUserByEmail(testUser.Email)
	assert.Equal(t, 1, len(usr.SavedFolders))
	fmt.Println(response)

	response, _ = sendTestReqAuth("GET", "/user/folders", nil, cookie)
	assert.Equal(t, "[\n    {\n        \"name\": \"rosalinda\",\n        \"tweets\": []\n    }\n]", string(response))

}
