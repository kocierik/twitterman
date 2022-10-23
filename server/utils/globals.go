package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

const ServerPort string = "8080"
const ServerUrl string = "localhost"

const DatabaseUrl string = "localhost"
const DatabasePort string = ""

const TwitterApi string = "https://api.twitter.com/2/tweets/"

var Client *http.Client

var Router = gin.Default()
