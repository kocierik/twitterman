package TwitterApi

import (
	"git.hjkl.gq/team7/twitterman/server/utils"
)

// FIELD SOURCE: https://developer.twitter.com/en/docs/twitter-api/fields

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet
const tweetsField = "created_at,author_id,public_metrics"

// Source: https://developer.twitter.com/en/docs/twitter-api/expansions
const expansions = "author_id,attachments.media_keys,geo.place_id" //ci interesserà anche attachments.poll_ids?

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
const userField = "profile_image_url"

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
const mediaField = "url,height,width,preview_image_url"

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/place
const placeField = "geo"

var lastRequest requestStruct

func GetUserInfoByUsername(username string) Data[TwitterUserStructure] {
	endpoint := utils.TwitterApi + "/users/by/username/" + username
	body := makeTwitterRequest("GET", endpoint, utils.Dict{"user.fields": userField})

	result := utils.UnmarshalToJson[Data[TwitterUserStructure]](body)

	return result
}

func GetUserInfoByUserId(userId string) TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users"
	body := makeTwitterRequest("GET", endpoint, utils.Dict{"ids": userId, "user.fields": userField})

	result := utils.UnmarshalToJson[Data[[]TwitterUserStructure]](body)

	return result.DataTmp[0]
}

func GetTwsById(id string) []utils.Tweet {
	endpoint := utils.TwitterApi + "/tweets"
	params := baseQuery("ids", id)
	body := makeTwitterRequest("GET", endpoint, params)

	result := utils.UnmarshalToJson[Data[[]twitterTweetStructure]](body)

	lastRequest = requestStruct{Method: "GET", EndPoint: endpoint, Params: params, NextToken: result.Meta.NextToken}

	return castTweetStructToMyStruct(result)
}

func GetTwsByHashtag(hashtag string) []utils.Tweet {
	endpoint := utils.TwitterApi + "/tweets/search/recent"
	params := baseQuery("query", "#"+hashtag)
	body := makeTwitterRequest("GET", endpoint, params)

	result := utils.UnmarshalToJson[Data[[]twitterTweetStructure]](body)

	lastRequest = requestStruct{Method: "GET", EndPoint: endpoint, Params: params, NextToken: result.Meta.NextToken}

	return castTweetStructToMyStruct(result)
}

func GetTwsByKeyword(keyword string) []utils.Tweet {
	endpoint := utils.TwitterApi + "/tweets/search/recent"
	params := baseQuery("query", keyword)
	body := makeTwitterRequest("GET", endpoint, params)

	result := utils.UnmarshalToJson[Data[[]twitterTweetStructure]](body)

	lastRequest = requestStruct{Method: "GET", EndPoint: endpoint, Params: params, NextToken: result.Meta.NextToken}

	return castTweetStructToMyStruct(result)
}

func GetTwCount(username, granularity string) []tweetCount {
	endpoint := utils.TwitterApi + "/tweets/counts/recent"
	params := utils.Dict{"query": "from:" + username, "granularity": granularity}
	body := makeTwitterRequest("GET", endpoint, params)

	result := utils.UnmarshalToJson[[]tweetCount](body)
	return result
}

func GetTwsByUsername(username string) []utils.Tweet {
	endpoint := utils.TwitterApi + "/tweets/search/recent"
	params := baseQuery("query", "from:"+username)
	body := makeTwitterRequest("GET", endpoint, params)

	result := utils.UnmarshalToJson[Data[[]twitterTweetStructure]](body)

	lastRequest = requestStruct{Method: "GET", EndPoint: endpoint, Params: params, NextToken: result.Meta.NextToken}

	return castTweetStructToMyStruct(result)
}

func GetNextTokenReq() []utils.Tweet {
	lastRequest.Params["next_token"] = lastRequest.NextToken

	body := makeTwitterRequest(lastRequest.Method, lastRequest.EndPoint, lastRequest.Params)

	result := utils.UnmarshalToJson[Data[[]twitterTweetStructure]](body)

	lastRequest.NextToken = result.Meta.NextToken

	return castTweetStructToMyStruct(result)
}
