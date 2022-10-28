package twittermanApi

import (
	"log"
	"twitterman/server/database"

	"github.com/gin-gonic/gin"
)

func isUser(email string, password string) bool {
	user, err := database.GetUserByEmail(email)
	if err != nil {
		log.Fatal(err)
	}
	return user.Password == password
}

func registerApi(c *gin.Context) {

}

func loginApi(c *gin.Context) {
	type RequestBody struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	var requestParam RequestBody
	c.BindJSON(&requestParam)

	c.Writer.Header().Set("AUTHORIZATION", "make.this.jwt")
	if isUser(requestParam.Email, requestParam.Password) {
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
