package api

import (
	"bytes"
	"encoding/json"
	"log"
	"testing"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/stretchr/testify/assert"
)

const aldomail = "aldo@aldo"
const aldoname = "aldo"
const aldopsw = "Aldo1234"

func TestLoginApi(t *testing.T) {
	database.InitDbTest()
	initApiTest()
	// Insert user to database
	database.InsertUser(aldomail, aldoname, aldopsw, []utils.TweetsFolder{})

	// Test Correct credentials
	type login struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	body := login{
		Email:    aldomail,
		Password: aldopsw,
	}

	bodyMarshaled, err := json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")

	out, res := sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))

	// test success
	assert.Equal(t, `{"success":true}`, string(out))
	assert.Equal(t, `AUTHTOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFsZG9AYWxkbyIsIkF1dGhvcml6ZWQiOiIifQ.dust9uVBs695iWBurA-sJ5IUUVNirwTQ4ALZVjbNybQ; Path=/; Domain=localhost; Max-Age=3600`, res.Header().Get("Set-Cookie"))

	// Test incorrect credentials
	body = login{
		Email:    "notamail@outneh",
		Password: "notapsw1W",
	}

	bodyMarshaled, err = json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled")

	out, res = sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))

	// test success but no AUTHORIZATION given
	log.Println("NotEqual, ", string(out))
	assert.NotEqual(t, `{"success":true}`, string(out))
	assert.Equal(t, ``, res.Header().Get("Set-Cookie"))
}

func TestRegisterApi(t *testing.T) {
	initApiTest()
	// Insert user to database
	database.InitDbTest()

	// Test Correct credentials
	type register struct {
		Email    string `json:"email"`
		Password string `json:"password"`
		Username string `json:"username"`
	}
	body := register{
		Email:    aldomail,
		Password: aldopsw,
		Username: aldoname,
	}
	bodyMarshaled, err := json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	out, _ := sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	usr, err := database.GetUserByEmail(aldomail)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	assert.Equal(t, body.Email, usr.Email)
	assert.Equal(t, body.Password, usr.Password)
	assert.Equal(t, body.Username, usr.Username)
	assert.Equal(t, `{"success":true}`, string(out))

	out, _ = sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	assert.Equal(t, `{"message":"Email already registered","success":false}`, string(out))

	body = register{
		Email:    "not an email",
		Password: aldopsw,
		Username: aldoname,
	}

	bodyMarshaled, err = json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	out, _ = sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	assert.Equal(t, `{"message":"email not valid","success":false}`, string(out))

	body = register{
		Email:    "random@uno",
		Password: "shrtpsw",
		Username: aldoname,
	}
	bodyMarshaled, err = json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	out, _ = sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	assert.Equal(t, `{"message":"Password should be at least 8 character and should have at least an uppercase letters and a number","success":false}`, string(out))

	body = register{
		Email:    "random@uno",
		Password: aldopsw,
		Username: "no",
	}
	bodyMarshaled, err = json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	out, _ = sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	assert.Equal(t, `{"message":"username too short","success":false}`, string(out))

}

func TestDeleteUser(t *testing.T) {
	initApiTest()
	// Insert user to database
	database.InitDbTest()
	database.InsertUser("testUser@sium", "testUser", "testUser12", []utils.TweetsFolder{})
	database.InsertUser(aldomail, aldoname, aldopsw, []utils.TweetsFolder{})
	// Test Correct credentials
	cookie := getTestCookie("testUser@sium", "testUser12")
	sendTestReqAuth("POST", "/user/modify/delete", bytes.NewBuffer(nil), cookie)
	usr, _ := database.GetUserByEmail("testUser@sium")
	assert.Equal(t, usr.Username, "")
	usr2, _ := database.GetUserByEmail(aldomail)
	assert.Equal(t, usr2.Username, aldoname)
	database.DeleteUser(aldomail)

}
