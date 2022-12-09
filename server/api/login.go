package api

import (
	"log"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func bind[T any](c *gin.Context) T {
	var param T
	c.BindJSON(&param)
	return param
}

func isUser(email string, password string) bool {
	user, err := database.GetUserByEmail(email)
	log.Print(err)
	if err != nil {
		return false
	}
	return user.Password == password
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

	emptyguy := []string{}
	database.InsertUser(param.Email, param.Username, param.Password, emptyguy)
	if myjwt, err := utils.GenerateJWT(param.Email); err == nil {
		c.SetCookie("AUTHTOKEN", myjwt, 3600, "/", utils.ServerUrl, true, true)
		c.JSON(200, gin.H{
			"success": true,
		})
	} else {
		c.JSON(400, gin.H{
			"success": false,
			"message": "error when generating token",
		})
	}
}

func loginApi(c *gin.Context) {
	type RequestBody struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	param := bind[RequestBody](c)
	if isUser(param.Email, param.Password) {
		if myjwt, err := utils.GenerateJWT(param.Email); err == nil {
			c.SetCookie("AUTHTOKEN", myjwt, 3600, "/", utils.ServerUrl, true, true)
			c.JSON(200, gin.H{
				"success": true,
			})
		} else {
			c.JSON(400, gin.H{
				"success": false,
				"message": "Can't generate jwt",
			})
		}
	} else {
		c.JSON(400, gin.H{
			"success": false,
			"message": "Something went wrong",
		})
	}
}

func isLoggedIn(c *gin.Context) {
	if utils.IsLoggedIn(c) {
		c.JSON(200, gin.H{
			"success": true,
		})
	} else {
		c.JSON(400, gin.H{
			"success": false,
			"message": "jwt is not correct",
		})
	}
}

func logout(c *gin.Context) {
	c.SetCookie("AUTHTOKEN", "", 0, "/", utils.ServerUrl, true, true)
	c.Redirect(302, utils.ClientUrl)
}
