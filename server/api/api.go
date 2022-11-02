package api

import (
	"net/http"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

var TweetsField = "created_at,author_id,public_metrics"
var UserField = "profile_image_url"

func GetTweetById(c *gin.Context) {
	id := c.Param("id") // prendo l'id

	// eseguo la richiesta a twitter
	endpoint := utils.TwitterApi + "/tweets/" + id

	q := map[string]string{"tweet.fields": TweetsField}

	body := Request(http.MethodGet, endpoint, q)

	var result utils.Data[utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	ret := utils.ConvertTweetDataToMyTweet(result.DataTmp, GetUserInfoByUserId(result.DataTmp.Author))

	sendResponse(c, ret)
}

func GetTweetsByKeyword(c *gin.Context) {
	keyword := c.Param("keyword") // prendo la keyword

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := map[string]string{"query": keyword, "tweet.fields": TweetsField, "expansions": "author_id", "user.fields": "created_at"}

	body := Request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		tmp := utils.ConvertTweetDataToMyTweet(elem, GetUserInfoByUserId(elem.Author))
		ret = append(ret, tmp)
	}

	sendResponse(c, ret)
}

func GetUserTweetsById(c *gin.Context) {
	username := c.Param("username")
	id := GetUserIdByUsername(username)

	endpoint := utils.TwitterApi + "/users/" + id + "/tweets"
	q := map[string]string{"tweet.fields": TweetsField}

	body := Request(http.MethodGet, endpoint, q)

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
	body := Request(http.MethodGet, endpoint, nil)

	var result utils.Data[utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp.Id
}

func GetUserInfoByUserId(userId string) utils.TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users"
	q := map[string]string{"ids": userId, "user.fields": UserField}
	body := Request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp[0]
}
