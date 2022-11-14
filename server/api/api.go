package api

import (
	"fmt"

	"git.hjkl.gq/team7/twitterman/server/TwitterApi"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func getTweetById(c *gin.Context) {
	id := c.Param("id")

	tmp := TwitterApi.GetTweetInfoById(id)
	ret := CastTweetStructToMyStruct(tmp)

	utils.SendOkResponse(c, ret)
}

func getTweetsByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag")

	tmp := TwitterApi.GetTwsByHashtag(hashtag)
	ret := CastTweetStructToMyStruct(tmp)

	utils.SendOkResponse(c, ret)
}

func getTweetByDate(c *gin.Context) {
	keyword := c.Param("keyword")
	start := c.Param("start")
	end := c.Param("end")

	tmp := TwitterApi.GetTwsBtDate(keyword, start, end)
	fmt.Println(tmp)
	ret := CastTweetStructToMyStruct(tmp)

	utils.SendOkResponse(c, ret)
}

func getTweetsByKeyword(c *gin.Context) {
	keyword := c.Param("keyword")

	tmp := TwitterApi.GetTwsByKeyword(keyword)
	ret := CastTweetStructToMyStruct(tmp)

	utils.SendOkResponse(c, ret)
}

func getUserTweetsByUsername(c *gin.Context) {
	username := c.Param("username")

	tmp := TwitterApi.GetUsrTwsByUsername(username)
	ret := CastTweetStructToMyStruct(tmp)

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

	utils.SendOkResponse(c, result.DataTmp)
}

func getNewPageLastQuery(c *gin.Context) {
	tmp := TwitterApi.GetNextTokenReq(utils.LastRequest)

	ret := CastTweetStructToMyStruct(tmp)

	utils.SendOkResponse(c, ret)
}
