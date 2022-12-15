package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"testing"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
	"github.com/stretchr/testify/assert"
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
	fmt.Println(usr.Password, usr.Email)
	assert.Equal(t, body.Username, usr.Username)
	assert.Equal(t, body.Password, usr.Password)
}

/*
func TestGetUserInfo(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/user/aodawo", nil)

	tmpMock := `{"message":"Problem fetching the user","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), tmpMock)

	//TODO: test user esistente
}*/
