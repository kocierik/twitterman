package TwitterApi

import (
	"net/http"

	"git.hjkl.gq/team7/twitterman/server/utils"
)

// FIELD SOURCE: https://developer.twitter.com/en/docs/twitter-api/fields

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet
var TweetsField = "created_at,author_id,public_metrics"

// Source: https://developer.twitter.com/en/docs/twitter-api/expansions
var Expansions = "author_id,attachments.media_keys,geo.place_id" //ci interesserà anche attachments.poll_ids?

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
var UserField = "profile_image_url"

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
var MediaField = "url,height,width,preview_image_url"

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/place
var placeField = "geo"

/* Utils function for getting user information */

func baseQueryPlus(key string, value any) utils.Dict {
	return utils.Dict{
		key:            value,
		"expansions":   Expansions,
		"tweet.fields": TweetsField,
		"media.fields": MediaField,
		"user.fields":  UserField,
		"place.fields": placeField,
	}
}

func GetUserInfoByUsername(username string) Data[[]TwitterUserStructure] {
	endpoint := utils.TwitterApi + "/users/by/username/" + username

	q := utils.Dict{"user.fields": UserField}

	body := utils.Request(http.MethodGet, endpoint, q)

	var result Data[[]TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result
}

func GetUserInfoByUserId(userId string) TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users"

	q := utils.Dict{"ids": userId, "user.fields": UserField}

	body := utils.Request(http.MethodGet, endpoint, q)

	var result Data[[]TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp[0]
}

func GetTweetInfoById(id string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets"

	q := baseQueryPlus("ids", id)

	body := utils.Request(http.MethodGet, endpoint, q)

	var result Data[[]TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

func GetNextTokenReq(req utils.RequestStruct) Data[[]TwitterTweetStructure] {
	req.Params["next_token"] = req.NextToken

	body := utils.Request(req.Method, req.EndPoint, req.Params)

	var result Data[[]TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	utils.LastRequest.NextToken = result.Meta.NextToken

	return result
}

func GetTwsByHashtag(hashtag string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := baseQueryPlus("query", "#"+hashtag)

	body := utils.Request(http.MethodGet, endpoint, q)

	var result Data[[]TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

func GetTwsByKeyword(keyword string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := baseQueryPlus("query", keyword)

	body := utils.Request(http.MethodGet, endpoint, q)

	var result Data[[]TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

func GetTwCount(username, granularity string) Data[[]utils.TweetCount] {
	endpoint := utils.TwitterApi + "/tweets/counts/recent"

	q := utils.Dict{"query": "from:" + username, "granularity": granularity}

	body := utils.Request(http.MethodGet, endpoint, q)

	var result Data[[]utils.TweetCount]
	utils.UnmarshalToJson(body, &result)

	return result
}

func GetUsrTwsById(username string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := baseQueryPlus("query", "from:"+username)

	body := utils.Request(http.MethodGet, endpoint, q)

	var result Data[[]TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}
