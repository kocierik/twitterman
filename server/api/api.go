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

	ret := utils.ConvertTweetDataToMyTweet(result.DataTmp, getUserInfoByUserId(result.DataTmp.Author))

	c.Header("Access-Control-Allow-Origin", "*")
	c.IndentedJSON(http.StatusOK, ret)
}

func GetTweetsByHashtag(c *gin.Context) {
	hashtag := c.Param("hashtag") // prendo l'hashtag

	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := map[string]string{"query": "#" + hashtag, "tweet.fields": TweetsField}

	body := Request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	var ret []utils.Tweet

	for _, elem := range result.DataTmp {
		tmp := utils.ConvertTweetDataToMyTweet(elem, getUserInfoByUserId(elem.Author))
		ret = append(ret, tmp)
	}

	c.Header("Access-Control-Allow-Origin", "*")
	c.IndentedJSON(http.StatusOK, ret)
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
		tmp := utils.ConvertTweetDataToMyTweet(elem, getUserInfoByUserId(elem.Author))
		ret = append(ret, tmp)
	}

	c.Header("Access-Control-Allow-Origin", "*")
	c.IndentedJSON(http.StatusOK, ret)
}

func GetUserIdByUsername(username string) string {
	endpoint := utils.TwitterApi + "/users/by/username/" + username
	body := Request(http.MethodGet, endpoint, nil)

	var result utils.Data[utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp.Id
}

func getUserInfoByUserId(userId string) utils.TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users"
	q := map[string]string{"ids": userId, "user.fields": UserField}
	body := Request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp[0]
}
