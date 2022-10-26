package api

import (
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

type Endpoint struct {
	Endpoint string
	Function func(*gin.Context)
	Method   string
}

var EndpointList = []Endpoint{
	{"/tweet/id/:id", GetTweetById, "GET"},
	{"/tweet/hashtag/:hashtag", GetTweetsByHashtag, "GET"},
	{"/user/:username/tweets", GetUserTweetsById, "GET"},
}

func InitApi() {
	for _, v := range EndpointList {
		if v.Method == "GET" {
			utils.Router.GET(v.Endpoint, v.Function)
		} else {
			utils.Router.POST(v.Endpoint, v.Function)
		}
	}
}
