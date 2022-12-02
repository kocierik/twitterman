package utils

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

const ServerPort = "8080"
const ServerUrl = "localhost"
const TwitterApi string = "https://api.twitter.com/2"

var DbUrl = os.Getenv("DATABASE_URL")

var Client *http.Client

var Router = gin.Default()
