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

func TestLoginApi(t *testing.T) {
	database.InitDbTest()
	initApiTest()
	// Insert user to database
	database.InsertUser("aldo@aldo", "aldo", "aldo", []utils.TweetsFolder{})

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
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")

	out, res := sendTestRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))

	// test success
	assert.Equal(t, `{"success":true}`, string(out))
	assert.Equal(t, `AUTHORIZATION=aldo%40aldo; Path=/; Max-Age=3600; HttpOnly; Secure`, res.Header().Get("Set-Cookie"))

	// Test incorrect credentials
	body = login{
		Email:    "notamail@outneh",
		Password: "notapsw",
	}

	bodyMarshaled, err = json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled2")

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
		Email:    "aldo@aldo",
		Password: "aldo",
		Username: "aldo",
	}
	bodyMarshaled, err := json.Marshal(body)
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	out, _ := sendTestRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	usr, err := database.GetUserByEmail("aldo@aldo")
	utils.TestError(err, "(api_test.go) Cannot parse bodyMarshaled1")
	assert.Equal(t, body.Email, usr.Email)
	assert.Equal(t, body.Password, usr.Password)
	assert.Equal(t, body.Username, usr.Username)
	assert.Equal(t, `{"success":true}`, string(out))
	// TODO: Test with invalid register fields
}

func TestDeleteUser(t *testing.T) {
	initApiTest()
	// Insert user to database
	database.InitDbTest()
	database.InsertUser("testUser@sium", "testUser", "testUser", []utils.TweetsFolder{})
	database.InsertUser("aldo@aldo", "aldo", "aldo", []utils.TweetsFolder{})
	sendTestRequest("POST", "/user/testUser/modify/delete", bytes.NewBuffer(nil))
	usr, _ := database.GetUserByName("testUser")
	log.Println(usr.Username == "")
	assert.Equal(t, usr.Username, "")
	usr2, _ := database.GetUserByName("aldo")
	assert.Equal(t, usr2.Username, "aldo")
}
