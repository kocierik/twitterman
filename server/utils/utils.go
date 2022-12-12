package utils

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

type JwtClaims struct {
	jwt.RegisteredClaims
	Email      string
	Authorized string
}

var JwtSecretKey = "WjYZ2B349qN8BhTkCy4G" // TODO: renderla variabile ambientale maybe

func UnmarshalToJson[T any](response []byte) T {
	var result T
	// Parse []byte to go struct pointer
	err := json.Unmarshal(response, &result)
	TestError(err, "UnmarshalToJson function")
	return result
}

func TestError(err error, msg string) {
	if err != nil {
		log.Fatalf(msg+"= %+v", err)
	}
}

func IsLoggedIn(c *gin.Context) bool {
	if cookie, err := c.Request.Cookie("AUTHTOKEN"); err == nil {
		return CheckJWT(cookie.Value)
	} else {
		return false
	}

}

func InitHttpClient() {
	Client = &http.Client{Timeout: 10 * time.Second}
}

func CheckJWT(mytoken string) bool {
	var claims JwtClaims
	token, err := jwt.ParseWithClaims(mytoken, &claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(JwtSecretKey), nil
	})
	if err != nil {
		return false
	}
	return token.Valid
}

func GenerateJWT(email string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, JwtClaims{
		RegisteredClaims: jwt.RegisteredClaims{},
		Email:            email,
	})

	signedString, err := token.SignedString([]byte(JwtSecretKey))

	if err != nil {
		return "", errors.New("error creating jwt")
	}
	return signedString, nil
}
