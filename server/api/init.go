package api

import (
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

type endpoint struct {
	Endpoint string
	Function func(*gin.Context)
	Method   string
}

var corsEnabledURLs = []string{
	"http://localhost:5173",
}

var endpointList = []endpoint{
	// {"/tweet/:mode/:query/date/:start/:end", getTweets, "GET"},
	{"/tweet/:mode/:query", getTweets, "GET"},
	{"/tweet/loadNextPage", getNewPageTweets, "GET"},
	{"/count/:mode/:query/:granularity", getTweetCount, "GET"},
	{"/user/:username", getUserInfo, "GET"},
	{"/login", loginApi, "POST"},
	{"/register", registerApi, "POST"},
}

func cORSMiddleware() gin.HandlerFunc {
	corsString := ""
	for i, val := range corsEnabledURLs {
		corsString += val
		if i != len(corsEnabledURLs)-1 {
			corsString += ", "
		}
	}
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", corsString)
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func InitApi() {
	utils.Router.Use(cORSMiddleware())
	for _, v := range endpointList {
		if v.Method == "GET" {
			utils.Router.GET(v.Endpoint, v.Function)
		} else {
			utils.Router.POST(v.Endpoint, v.Function)
		}
	}
}

func initApiTest() {
	utils.Router = gin.Default()
	utils.InitHttpClient()
	InitApi()
}

// Check if the granularity is valid
func isGranularityCorrect(c *gin.Context, granularity string) bool {
	if (granularity != "day") && (granularity != "hour") && (granularity != "minute") {
		utils.SendOkResponse(c, utils.Dict{"message": "Invalid granularity"})
		return false
	}
	return true
}

// Check if the mode is valid
func isModeCorrect(c *gin.Context, mode string) bool {
	if (mode != "id") && (mode != "hashtag") && (mode != "keyword") && (mode != "user") {
		utils.SendOkResponse(c, utils.Dict{"message": "Invalid mode"})
		return false
	}
	return true
}
