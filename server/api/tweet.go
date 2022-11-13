package api

import (
	"git.hjkl.gq/team7/twitterman/server/TwitterApi"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func getTweetById(c *gin.Context) {
	id := c.Param("id")

	ret := TwitterApi.GetTwsById(id)

	utils.SendOkResponse(c, ret)
}

func getTweetsByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag")

	ret := TwitterApi.GetTwsByHashtag(hashtag)

	utils.SendOkResponse(c, ret)
}

func getTweetsByKeyword(c *gin.Context) {
	keyword := c.Param("keyword")

	ret := TwitterApi.GetTwsByKeyword(keyword)

	utils.SendOkResponse(c, ret)
}

func getUserTweetsByUsername(c *gin.Context) {
	username := c.Param("username")

	ret := TwitterApi.GetTwsByUsername(username)

	utils.SendOkResponse(c, ret)
}

func getUserInfo(c *gin.Context) {
	username := c.Param("username")

	usr := TwitterApi.GetUserInfoByUsername(username)

	utils.SendOkResponse(c, usr)
}

// TODO: capire perché alla fine delle risposte con granularity sbagliata appare un null di troppo, fare test
// possible granularity: day, hour or minute
func getTweetCountByUsername(c *gin.Context) {
	username := c.Param("username")
	granularity := c.Param("granularity")

	if (granularity != "day") && (granularity != "hour") && (granularity != "minute") {
		utils.SendOkResponse(c, utils.Dict{"message": "Invalid granularity"})
	}

	result := TwitterApi.GetTwCount(username, granularity)

	utils.SendOkResponse(c, result)
}

func getNewPageLastQuery(c *gin.Context) {
	ret := TwitterApi.GetNextTokenReq()

	utils.SendOkResponse(c, ret)
}
