package TwitterApi

import (
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

func BaseQueryPlus(key string, value any) utils.Dict {
	return utils.Dict{
		key:            value,
		"expansions":   Expansions,
		"tweet.fields": TweetsField,
		"media.fields": MediaField,
		"user.fields":  UserField,
		"place.fields": placeField,
	}
}

func GetUserInfoByUsername(username string) Data[TwitterUserStructure] {
	endpoint := utils.TwitterApi + "/users/by/username/" + username

	q := utils.Dict{"user.fields": UserField}

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[Data[TwitterUserStructure]](body)

	return result
}

func GetUserInfoByUserId(userId string) TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users"

	q := utils.Dict{"ids": userId, "user.fields": UserField}

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[Data[[]TwitterUserStructure]](body)

	return result.DataTmp[0]
}

func GetTweetInfoById(id string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets"

	q := BaseQueryPlus("ids", id)

	body := utils.Request("GET", endpoint, q)
	result := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

func GetNextTokenReq(req utils.RequestStruct) Data[[]TwitterTweetStructure] {
	req.Params["next_token"] = req.NextToken

	body := utils.Request(req.Method, req.EndPoint, req.Params)

	result := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	utils.LastRequest.NextToken = result.Meta.NextToken

	return result
}

func GetTwsByHashtag(hashtag string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := BaseQueryPlus("query", "#"+hashtag)

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

func GetTwsBtDate(keyword string, start string, end string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := utils.Dict{"query": keyword, "start_time": start, "end_time": end}

	body := utils.Request("GET", endpoint, q)
	result := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

func GetTwsByKeyword(keyword string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := BaseQueryPlus("query", keyword)

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

func GetTwCount(username, granularity string) Data[[]utils.TweetCount] {
	endpoint := utils.TwitterApi + "/tweets/counts/recent"

	q := utils.Dict{"query": "from:" + username, "granularity": granularity}

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[Data[[]utils.TweetCount]](body)

	return result
}

func GetUsrTwsByUsername(username string) Data[[]TwitterTweetStructure] {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := BaseQueryPlus("query", "from:"+username)

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	utils.LastRequest = utils.RequestStruct{Method: "GET", EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}
