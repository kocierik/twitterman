package api

import (
	"bytes"
	"encoding/json"
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

func TestUpdateUser(t *testing.T) {
	initApiTest()
	database.InitDbTest()
	database.InsertUser("testUser@sium", "testUser", "testUser", []utils.TweetsFolder{})

	body := register{
		Email:    "porca@paletta",
		Password: "agg1",
		Username: "testUser",
	}

	bodyMarshaled, err := json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	sendTestRequest("POST", "/user/testUser/modify/update", bytes.NewBuffer(bodyMarshaled))
	usr, _ := database.GetUserByName("testUser")
	assert.Equal(t, usr.Email, body.Email)
	assert.Equal(t, usr.Password, body.Password)

	sendTestRequest("POST", "/user/testUser/modify/delete", bytes.NewBuffer(nil))
}
