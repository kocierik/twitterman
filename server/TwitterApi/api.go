package TwitterApi

import (
	"fmt"
	"time"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
	"github.com/google/go-cmp/cmp"
	"golang.org/x/exp/slices"
)

// FIELD SOURCE: https://developer.twitter.com/en/docs/twitter-api/fields

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet
var tweetsField = "created_at,author_id,public_metrics"

// Source: https://developer.twitter.com/en/docs/twitter-api/expansions
var expansions = "author_id,attachments.media_keys,geo.place_id" //ci interesserà anche attachments.poll_ids?

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
var userField = "profile_image_url"

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
var mediaField = "url,height,width,preview_image_url"

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/place
var placeField = "geo"

// Last request made by this package
var lastRequest = requestStruct{}

/* Utils function for getting user information */

func GetUserInfoByUsername(username string) TwitterUserStruct {
	endpoint := utils.TwitterApi + "/users/by/username/" + username

	q := utils.Dict{"user.fields": userField}

	body := makeTwitterRequest("GET", endpoint, q)

	result := utils.UnmarshalToJson[DataGeneric[TwitterUserStruct]](body)

	return result.Data
}

func GetTweetInfoById(id, start, end string) []utils.Tweet {
	endpoint := utils.TwitterApi + "/tweets"

	q := baseQuery("ids", id)
	q["start_time"] = start
	q["end_time"] = end

	body := makeTwitterRequest("GET", endpoint, q)

	result := utils.UnmarshalToJson[DataTweet](body)

	ret := castTweetStructToMyTweet(result)

	// Get other results from cache
	cache := searchCache("id", id, start, end)

	// Save new results in cache
	database.InsertTweetList(ret)

	// remove duplicates from result
	for _, k := range cache {
		if slices.IndexFunc(ret, func(v utils.Tweet) bool { return (v.TwitterId == k.TwitterId) }) == -1 {
			ret = append(ret, k)
		}
	}
	return ret
}

// Get next page of last req
func GetNextTokenReq() []utils.Tweet {
	if !cmp.Equal(lastRequest, requestStruct{}) {
		fmt.Println("NextTOKEN")
		lastRequest.Params["next_token"] = lastRequest.NextToken

		body := makeTwitterRequest("GET", lastRequest.EndPoint, lastRequest.Params)

		result := utils.UnmarshalToJson[DataTweet](body)

		lastRequest.NextToken = result.Meta.NextToken

		ret := castTweetStructToMyTweet(result)

		// Save new query in cache
		database.InsertTweetList(ret)

		return ret
	}
	return nil
}

func checkDates(start, end string) (string, string, bool) {
	now := time.Now()
	sstart, _ := time.Parse("2006-01-_2T15:04:05.000Z", start)
	eend, _ := time.Parse("2006-01-_2T15:04:05.000Z", end)
	week_before := now.AddDate(0, 0, -7) // in Format va questa data perché gli sviluppatori di go sono dei pazzi furenti
	shouldRequest := true

	//if end date is before
	if eend.Before(week_before) {
		shouldRequest = false
	} else {
		if sstart.Before(week_before) {
			start = week_before.Format("2006-01-_2T15:04:05Z")
		}
	}

	return start, end, shouldRequest
}

// Get recent tweets by query
func GetTwsByQuery(mode, query, start, end string) []utils.Tweet {
	var ret []utils.Tweet
	endpoint := utils.TwitterApi + "/tweets/search/recent"
	q := baseQuery("query", query)

	// fmt.Println(start, end)
	newstart, newend, shouldRequest := checkDates(start, end)

	if shouldRequest {
		q["start_time"] = newstart
		q["end_time"] = newend
		body := makeTwitterRequest("GET", endpoint, q)
		result := utils.UnmarshalToJson[DataTweet](body)
		lastRequest = requestStruct{EndPoint: endpoint, Params: q, NextToken: result.Meta.NextToken}
		ret = castTweetStructToMyTweet(result)
		// Save new query in cache
		database.InsertTweetList(ret)
	}

	// Get other results from cache
	cache := searchCache(mode, query, start, end)

	for _, k := range cache {
		if slices.IndexFunc(ret, func(v utils.Tweet) bool { return (v.TwitterId == k.TwitterId) }) == -1 {
			ret = append(ret, k)
		}
	}

	return ret
}

// Get recent tweets count by query
func GetTwCount(query, granularity string) DataGeneric[[]tweetCount] {
	endpoint := utils.TwitterApi + "/tweets/counts/recent"

	q := utils.Dict{"query": query, "granularity": granularity}

	body := makeTwitterRequest("GET", endpoint, q)

	result := utils.UnmarshalToJson[DataGeneric[[]tweetCount]](body)

	return result
}
