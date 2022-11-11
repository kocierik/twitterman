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

func GetUserInfoByUsername(username string) TwitterUserStruct {
	endpoint := utils.TwitterApi + "/users/by/username/" + username

	q := utils.Dict{"user.fields": UserField}

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[DataGeneric[TwitterUserStruct]](body)

	return result.Data
}

// dont need
// func GetUserInfoByUserId(userId string) TwitterUserStructure {
// 	endpoint := utils.TwitterApi + "/users"

// 	q := utils.Dict{"ids": userId, "user.fields": UserField}

// 	body := utils.Request("GET", endpoint, q)

// 	result := utils.UnmarshalToJson[DataGeneric[[]TwitterUserStructure]](body)

// 	return result.DataTmp[0]
// }

func GetTweetInfoById(id string) DataTweet {
	endpoint := utils.TwitterApi + "/tweets"

	q := BaseQueryPlus("ids", id)

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[DataTweet](body)

	return result
}

// Get next page of last req
func GetNextTokenReq(req utils.RequestStruct) DataTweet {
	req.Params["next_token"] = req.NextToken

	body := utils.Request("GET", req.EndPoint, req.Params)

	result := utils.UnmarshalToJson[DataTweet](body)

	utils.LastRequest.NextToken = result.Meta.NextToken

	return result
}

// Get recent tweets by query
func GetTwsByQuery(query string) DataTweet {
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := BaseQueryPlus("query", query)

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[DataTweet](body)

	utils.LastRequest = utils.RequestStruct{EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}

	return result
}

// Get recent tweets count by query
func GetTwCount(query, granularity string) DataGeneric[[]tweetCount] {
	endpoint := utils.TwitterApi + "/tweets/counts/recent"

	q := utils.Dict{"query": query, "granularity": granularity}

	body := utils.Request("GET", endpoint, q)

	result := utils.UnmarshalToJson[DataGeneric[[]tweetCount]](body)

	return result
}
