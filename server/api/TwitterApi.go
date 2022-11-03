package api

import (
	"fmt"
	"net/http"
	"twitterman/server/utils"
)

// FIELD SOURCE: https://developer.twitter.com/en/docs/twitter-api/fields

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet
var TweetsField = "created_at,author_id,public_metrics"

// Source: https://developer.twitter.com/en/docs/twitter-api/expansions
var Expansions = "author_id,attachments.media_keys" //ci interesserà anche attachments.poll_ids?,geo.place_id

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
var UserField = "profile_image_url"

// Source: https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/media
var MediaField = "url,height,width,alt_text,preview_image_url"

/* Utils function for getting user information */

func getUserInfoByUsername(username string) utils.TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users/by/username/" + username

	q := utils.Dict{"user.fields": UserField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp
}

func getUserInfoByUserId(userId string) utils.TwitterUserStructure {
	endpoint := utils.TwitterApi + "/users"

	q := utils.Dict{"ids": userId, "user.fields": UserField}

	body := request(http.MethodGet, endpoint, q)

	var result utils.Data[[]utils.TwitterUserStructure]
	utils.UnmarshalToJson(body, &result)

	return result.DataTmp[0]
}

func getTweetInfoById(id string) any {
	endpoint := utils.TwitterApi + "/tweets"

	q := utils.Dict{"ids": id, "tweet.fields": TweetsField, "expansions": Expansions, "media.fields": MediaField, "user.fields": UserField}

	body := request(http.MethodGet, endpoint, q)

	fmt.Println(string(body))
	var result utils.Data[[]utils.TwitterTweetStructure]
	utils.UnmarshalToJson(body, &result)

	return result
}
