package api

type register struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Username string `json:"username"`
}

/*
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


func TestGetUserInfo(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/user/aodawo", nil)

	tmpMock := `{"message":"Problem fetching the user","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), tmpMock)

	//TODO: test user esistente
}*/
