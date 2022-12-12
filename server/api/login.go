package api

import (
	"log"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

func bind[T any](c *gin.Context) T {
	var param T
	c.BindJSON(&param)
	return param
}

func isUser(email string, password string) bool {
	user, err := database.GetUserByEmail(email)
	// log.Print(err)
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

	standardFolder := utils.TweetsFolder{Name: "Preferiti", Tweets: []string{}}
	database.InsertUser(param.Email, param.Username, param.Password, []utils.TweetsFolder{standardFolder})
	if myjwt, err := utils.GenerateJWT(param.Email); err == nil {
		c.SetCookie("AUTHTOKEN", myjwt, 3600, "/", utils.ServerUrl, false, false) // todo: http onlty set to true when on production
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
			c.SetCookie("AUTHTOKEN", myjwt, 3600, "/", utils.ServerUrl, false, false) // todo: http onlty set to true when on production
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
	c.SetCookie("AUTHTOKEN", "null", 0, "/", utils.ServerUrl, false, false)
	c.JSON(200, gin.H{
		"success": true,
	})
}

func getMailFromJwt(c *gin.Context) {
	token, err := c.Cookie("AUTHTOKEN")
	if !utils.CheckJWT(token) || err != nil {
		c.JSON(400, gin.H{
			"success": false,
			"message": "token not correct",
		})
		return
	}

	var claims utils.JwtClaims
	_, err = jwt.ParseWithClaims(token, &claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(utils.JwtSecretKey), nil
	})
	if err != nil {
		c.JSON(400, gin.H{
			"success": false,
			"message": "cannot parse claims from jwt token",
		})
		return
	}
	c.JSON(200, gin.H{
		"success": true,
		"email":   claims.Email,
	})
}
