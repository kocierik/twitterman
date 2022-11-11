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
	var twRet any

	if !isModeCorrect(c, mode) {
		return
	}

	switch mode {
	case "id":
		tmp := TwitterApi.GetTweetInfoById(query)
		twRet = castTweetStructToMyTweet(tmp)
		utils.SendOkResponse(c, twRet)
		return
	case "hashtag":
		query = "#" + query
		break
	case "keyword":
		break
	case "user":
		query = "from:" + query
		break
	}

	twData := TwitterApi.GetTwsByQuery(query)
	twRet = castTweetStructToMyTweet(twData)
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
	tmp := TwitterApi.GetNextTokenReq(utils.LastRequest)

	ret := castTweetStructToMyTweet(tmp)

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
	granularity := c.Param("granularity")
	var ret any

	if !isModeCorrect(c, mode) || !isGranularityCorrect(c, granularity) {
		return
	}

	switch mode {
	case "hashtag":
		ret = TwitterApi.GetTwCount("#"+query, granularity)
		break
	case "keyword":
		ret = TwitterApi.GetTwCount(query, granularity)
		break
	case "user":
		ret = TwitterApi.GetTwCount("from:"+query, granularity)
		break
	default:
		utils.SendOkResponse(c, "")
		return
	}

	utils.SendOkResponse(c, ret)
}
