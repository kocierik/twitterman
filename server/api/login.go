package api

import (
	"log"
	"twitterman/server/database"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func isUser(email string, password string) bool {
	user, err := database.GetUserByEmail(email)
	if err != nil {
		return false
	}
	return user.Password == password
}

func bind[T any](c *gin.Context) T {
	var param T
	c.BindJSON(&param)
	return param
}

func registerApi(c *gin.Context) {
	type RequestBody struct {
		Email    string `json:"email"`
		Password string `json:"password"`
		Username string `json:"username"`
	}
	param := bind[RequestBody](c)

	// TODO: Check the validity of all parameters
	_, err := database.GetUserByEmail(param.Email)
	if err == nil {
		log.Fatalf("User already exist")
	}

	emptyguy := []utils.Tweet{}
	database.InsertUser(param.Email, param.Username, param.Password, emptyguy)
	c.JSON(200, gin.H{
		"success": true,
	})

}

func loginApi(c *gin.Context) {
	type RequestBody struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	param := bind[RequestBody](c)

	// TODO: make the jwt
	if isUser(param.Email, param.Password) {
		c.SetCookie("AUTHORIZATION", "make.this.jwt", 3600, "", "", true, true)
		c.JSON(200, gin.H{
			"success": true,
		})
	} else {
		c.JSON(400, gin.H{
			"success": false,
			"message": "Something went wrong",
		})
	}
}
