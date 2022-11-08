package api

import (
	"net/http"
	"twitterman/server/TwitterApi"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func getTweetById(c *gin.Context) {
	id := c.Param("id")

	tmp := TwitterApi.GetTweetInfoById(id)
	ret := ConvertTweetDataToMyTweet(tmp)

	utils.SendOkResponse(c, ret)
}

func getTweetsByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag")

	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := utils.Dict{"query": "#" + hashtag, "tweet.fields": TwitterApi.TweetsField, "expansions": TwitterApi.Expansions, "media.fields": TwitterApi.MediaField, "user.fields": TwitterApi.UserField}

	body := utils.Request(http.MethodGet, endpoint, q)

	var result TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	// var ret []utils.Tweet

	ret := ConvertTweetDataToMyTweet(result)

	utils.SendOkResponse(c, ret)
}

func getTweetsByKeyword(c *gin.Context) {
	// keyword := c.Param("keyword") // prendo la keyword

	// endpoint := utils.TwitterApi + "/tweets/search/recent"
	// q := utils.Dict{"query": keyword, "tweet.fields": TwitterApi.TweetsField}

	// body := utils.Request(http.MethodGet, endpoint, q)

	// var result TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]
	// utils.UnmarshalToJson(body, &result)

	// var ret []utils.Tweet

	// for _, elem := range result.DataTmp {
	// 	user := TwitterApi.GetUserInfoByUserId(elem.Author)
	// 	tmp := ConvertTweetDataToMyTweet(elem, user)
	// 	ret = append(ret, tmp)
	// }

	// utils.SendOkResponse(c, ret)
}

func getUserTweetsById(c *gin.Context) {
	// username := c.Param("username")
	// usr := TwitterApi.GetUserInfoByUsername(username)

	// endpoint := utils.TwitterApi + "/users/" + usr.Id + "/tweets"
	// q := utils.Dict{"tweet.fields": TwitterApi.TweetsField}

	// body := utils.Request(http.MethodGet, endpoint, q)

	// var result TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]
	// utils.UnmarshalToJson(body, &result)

	// var ret []utils.Tweet

	// for _, elem := range result.DataTmp {
	// 	tmp := ConvertTweetDataToMyTweet(elem, usr)
	// 	ret = append(ret, tmp)
	// }

	// utils.SendOkResponse(c, ret)
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

	// https://api.twitter.com/2/tweets/counts/recent?query=from%3Aelonmusk&granularity=day
	endpoint := utils.TwitterApi + "/tweets/counts/recent"
	q := utils.Dict{"query": "from:" + username, "granularity": granularity}

	body := utils.Request(http.MethodGet, endpoint, q)

	var result TwitterApi.Data[[]utils.TweetCount]
	utils.UnmarshalToJson(body, &result)

	utils.SendOkResponse(c, result.DataTmp)
}
