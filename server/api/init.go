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
	{"/tweet/id/:id", getTweetById, "GET"},
	{"/tweet/hashtag/:hashtag", getTweetsByHashtag, "GET"},
	{"/tweet/keyword/:keyword", getTweetsByKeyword, "GET"},
	{"/tweet/loadNextPage", getNewPageLastQuery, "GET"},
	{"/user/:username", getUserInfo, "GET"},
	{"/user/:username/tweets", getUserTweetsByUsername, "GET"},
	{"/count/:username/:granularity", getTweetCountByUsername, "GET"},
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
	// log.Println(utils.Router.Routes())
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
