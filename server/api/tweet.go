package api

import (
	"time"

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
	max_results := c.Param("results")
	mode := c.Param("mode")
	query := c.Param("query")
	start, err := time.Parse(time.RFC3339, c.Param("start"))
	if err != nil {
		utils.SendErrorResponse(c)
		return // TODO
	}
	end, err := time.Parse(time.RFC3339, c.Param("end"))
	if err != nil {
		utils.SendErrorResponse(c)
		return // TODO
	}
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
		twRet = TwitterApi.GetTwsByQuery(mode, query, max_results, start, end)
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
	max_results := c.Param("results")
	ret := TwitterApi.GetNextTokenReq(max_results)

	utils.SendOkResponse(c, ret)
}
