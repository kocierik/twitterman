package utils

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

const ServerPort = "8080"
const ServerUrl = "localhost"

var DbUrl = os.Getenv("DATABASE_URL_ATLAS")

const TwitterApi string = "https://api.twitter.com/2"

var Client *http.Client

var Router = gin.Default()
