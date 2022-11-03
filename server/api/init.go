package api

import (
	"log"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

type Endpoint struct {
	Endpoint string
	Function func(*gin.Context)
	Method   string
}

var EndpointList = []Endpoint{
	{"/tweet/id/:id", getTweetById, "GET"},
	{"/tweet/hashtag/:hashtag", getTweetsByHashtag, "GET"},
	{"/tweet/keyword/:keyword", getTweetsByKeyword, "GET"},
	{"/user/:username", getUserInfo, "GET"},
	{"/user/:username/tweets", getUserTweetsById, "GET"},
	{"/count/:username/:granularity", getTweetCountByUsername, "GET"},
	{"/login", loginApi, "POST"},
	{"/register", registerApi, "POST"},
}

func InitApi() {
	log.Println(utils.Router.Routes())
	for _, v := range EndpointList {
		if v.Method == "GET" {
			utils.Router.GET(v.Endpoint, v.Function)
		} else {
			utils.Router.POST(v.Endpoint, v.Function)
		}
	}
}
