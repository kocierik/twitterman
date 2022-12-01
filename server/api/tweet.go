package api

import (
	"git.hjkl.gq/team7/twitterman/server/TwitterApi"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

/*
Get 10 tweets with a defined mode and a query.
Possible mode:
  - id: get all info related one tweet
  - hashtag: get most recent tweets by hashtag
  - keyword: get most recent tweets by keyword
  - user: get most recent tweets by user

example:
  - tweet/id/0123456789
  - tweet/hashtag/salvini
  - tweet/user/elonmusk
  - tweet/keyword/mondo
*/
func getTweets(c *gin.Context) {
	mode := c.Param("mode")
	query := c.Param("query")
	start := c.Param("start")
	end := c.Param("end")
	var twRet any

	if !isModeCorrect(c, mode) {
		return
	}

	if mode == "id" {
		twRet = TwitterApi.GetTweetInfoById(query, start, end)
	} else {
		switch mode {
		case "keyword":
		case "hashtag":
			query = "#" + query
		case "user":
			query = "from:" + query
		}
		twRet = TwitterApi.GetTwsByQuery(mode, query, start, end)
	}

	utils.SendOkResponse(c, twRet)
}

/*
Get user info (id,name,username,profile_image_url)
*/
func getUserInfo(c *gin.Context) {
	username := c.Param("username")

	usr := TwitterApi.GetUserInfoByUsername(username)

	utils.SendOkResponse(c, usr)
}

/*
Load 10 new different tweets of the last query done
*/
func getNewPageTweets(c *gin.Context) {
	ret := TwitterApi.GetNextTokenReq()

	utils.SendOkResponse(c, ret)
}

/*
Get tweets granularity
Possible mode: hashtag/keyword/user
Possible granularity: day/hour/minute
*/
func getTweetCount(c *gin.Context) {
	mode := c.Param("mode")
	query := c.Param("query")
	// start := c.Param("start")
	// end := c.Param("end")
	granularity := c.Param("granularity")
	var ret any

	if !isModeCorrect(c, mode) || !isGranularityCorrect(c, granularity) {
		return
	}

	switch mode {
	case "keyword":
		break
	case "hashtag":
		query = "#" + query
		break
	case "user":
		query = "from:" + query
		break
	}

	ret = TwitterApi.GetTwCount(query, granularity)
	utils.SendOkResponse(c, ret)
}
