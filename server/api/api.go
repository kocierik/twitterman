package api

import (
	"net/http"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

var TweetsField = "created_at,author_id,public_metrics"
var Expansions = "author_id"
var UserField = "profile_image_url"

func GetTweetById(c *gin.Context) {
	id := c.Param("id")

	endpoint := utils.TwitterApi + "/tweets/" + id

	q := utils.Dict{"tweet.fields": TweetsField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	user := GetUserInfoByUserId(result.DataTmp.Author)
	ret := utils.ConvertTweetDataToMyTweet(result.DataTmp, user)

	sendResponse(c, ret)
}

func GetTweetsByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag")

	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := utils.Dict{"query": "#" + hashtag, "tweet.fields": TweetsField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		user := GetUserInfoByUserId(elem.Author)
		tmp := utils.ConvertTweetDataToMyTweet(elem, user)
		ret = append(ret, tmp)
	}

	sendResponse(c, ret)
}

func GetTweetsByKeyword(c *gin.Context) {
	keyword := c.Param("keyword") // prendo la keyword

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := utils.Dict{"query": keyword, "tweet.fields": TweetsField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		user := GetUserInfoByUserId(elem.Author)
		tmp := utils.ConvertTweetDataToMyTweet(elem, user)
		ret = append(ret, tmp)
	}

	sendResponse(c, ret)
}

func GetUserTweetsById(c *gin.Context) {
	username := c.Param("username")
	id := GetUserIdByUsername(username)

	endpoint := utils.TwitterApi + "/users/" + id + "/tweets"
	q := utils.Dict{"tweet.fields": TweetsField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		tmp := utils.ConvertTweetDataToMyTweet(elem, GetUserInfoByUserId(elem.Author))
		ret = append(ret, tmp)
	}

	sendResponse(c, ret)
}

func GetUserInfo(c *gin.Context) {
	username := c.Param("username")

	id := GetUserIdByUsername(username)
	ret := GetUserInfoByUserId(id)

	sendResponse(c, ret)
}

func GetUserIdByUsername(username string) string {
	endpoint := utils.TwitterApi + "/users/by/username/" + username
	body := request(http.MethodGet, endpoint, nil)

	var result utils.Data[utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp.Id
}

func GetUserInfoByUserId(userId string) utils.TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users"
	q := utils.Dict{"ids": userId, "user.fields": UserField}
	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp[0]
}
