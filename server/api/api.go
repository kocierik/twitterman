package api

import (
	"net/http"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func getTweetById(c *gin.Context) {
	id := c.Param("id")

	// endpoint := utils.TwitterApi + "/tweets/" + id

	// q := utils.Dict{"tweet.fields": TweetsField}

	// body := request(http.MethodGet, endpoint, q)

	// var result utils.Data[utils.TwitterTweetStructure, any]
	// utils.UnmarshalToJson(body, &result)

	// user := getUserInfoByUserId(result.DataTmp.Author)
	// ret := utils.ConvertTweetDataToMyTweet(result.DataTmp, user)

	ret := getTweetInfoById(id)

	sendOkResponse(c, ret)
}

func getTweetsByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag")

	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := utils.Dict{"query": "#" + hashtag, "tweet.fields": TweetsField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		user := getUserInfoByUserId(elem.Author)
		tmp := utils.ConvertTweetDataToMyTweet(elem, user)
		ret = append(ret, tmp)
	}

	sendOkResponse(c, ret)
}

func getTweetsByKeyword(c *gin.Context) {
	keyword := c.Param("keyword") // prendo la keyword

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := utils.Dict{"query": keyword, "tweet.fields": TweetsField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		user := getUserInfoByUserId(elem.Author)
		tmp := utils.ConvertTweetDataToMyTweet(elem, user)
		ret = append(ret, tmp)
	}

	sendOkResponse(c, ret)
}

func getUserTweetsById(c *gin.Context) {
	username := c.Param("username")
	usr := getUserInfoByUsername(username)

	endpoint := utils.TwitterApi + "/users/" + usr.Id + "/tweets"
	q := utils.Dict{"tweet.fields": TweetsField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		tmp := utils.ConvertTweetDataToMyTweet(elem, usr)
		ret = append(ret, tmp)
	}

	sendOkResponse(c, ret)
}

func getUserInfo(c *gin.Context) {
	username := c.Param("username")

	usr := getUserInfoByUsername(username)

	sendOkResponse(c, usr)
}

// TODO: capire perché alla fine delle risposte con granularity sbagliata appare un null di troppo, fare test
// possible granularity: day, hour or minute
func getTweetCountByUsername(c *gin.Context) {
	username := c.Param("username")
	granularity := c.Param("granularity")

	if (granularity != "day") && (granularity != "hour") && (granularity != "minute") {
		sendOkResponse(c, `{"message": "Invalid granularity"}`)
	}

	// https://api.twitter.com/2/tweets/counts/recent?query=from%3Aelonmusk&granularity=day
	endpoint := utils.TwitterApi + "/tweets/counts/recent"
	q := utils.Dict{"query": "from:" + username, "granularity": granularity}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TweetCount]
	utils.UnmarshalToJson(body, &result)

	sendOkResponse(c, result.DataTmp)
}
