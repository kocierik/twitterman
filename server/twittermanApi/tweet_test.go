package twittermanApi

import (
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"
	"twitterman/server/database"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func initTest() {
	utils.Router = gin.Default()
	utils.InitClient()
	InitApi()
}

func sendRequest(method, url string, body io.Reader) (string, *httptest.ResponseRecorder) {
	req, _ := http.NewRequest(method, url, body)
	res := httptest.NewRecorder()
	utils.Router.ServeHTTP(res, req)

	responseData, _ := ioutil.ReadAll(res.Body)
	return string(responseData), res
}

func TestLoginApi(t *testing.T) {
	initTest()
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
	if err != nil {
		log.Fatal(err)
	}
	out, res := sendRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))
	assert.Equal(t, `{"success":true}`, out)
	assert.Equal(t, `AUTHORIZATION=make.this.jwt; Path=/; Max-Age=3600; HttpOnly; Secure`, res.Header().Get("Set-Cookie"))

	// Test incorrect credentials
	body = login{
		Email:    "notamail@outneh",
		Password: "notapsw",
	}
	bodyMarshaled, err = json.Marshal(body)
	if err != nil {
		log.Fatal(err)
	}
	out, res = sendRequest("POST", "/login", bytes.NewBuffer(bodyMarshaled))
	assert.NotEqual(t, `{"success":true}`, out)
	assert.Equal(t, ``, res.Header().Get("Set-Cookie"))
}

func TestRegisterApi(t *testing.T) {
	initTest()
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
	if err != nil {
		log.Fatal(err)
	}
	out, _ := sendRequest("POST", "/register", bytes.NewBuffer(bodyMarshaled))
	usr, err := database.GetUserByEmail("aldo@aldo")
	if err != nil {
		log.Fatal(err)
	}
	if err != nil {
		log.Fatal(err)
	}
	assert.Equal(t, body.Email, usr.Email)
	assert.Equal(t, body.Password, usr.Password)
	assert.Equal(t, body.Username, usr.Username)
	assert.Equal(t, `{"success":true}`, out)
	// TODO: Test with invalid register fields
}
