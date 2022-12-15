package TwitterApi

import (
	"twitterman/utils"

	geojson "github.com/paulmach/go.geojson"
)

type TwitterUserStruct struct {
	Id       string `json:"id"`
	Propic   string `json:"profile_image_url"`
	Name     string `json:"name"`
	Username string `json:"username"`
}

type TwitterInclude struct {
	User   []TwitterUserStruct        `json:"users,omitempty"`
	Media  []utils.TwitterMediaStruct `json:"media,omitempty"`
	Places []geoTwitterStruct         `json:"places,omitempty"`
}

// Token to load next page
type TwitterMetaStruct struct {
	NextToken string `json:"next_token,omitempty"`
}

// Structure returned from Twitter Api
type DataTweet struct {
	Data    []twitterTweetStruct `json:"data"`
	Include TwitterInclude       `json:"includes,omitempty"`
	Meta    TwitterMetaStruct    `json:"meta,omitempty"`
}

type DataGeneric[T any] struct {
	Data T `json:"data"`
}

type twitterTweetStruct struct {
	Id            string              `json:"id"`
	Text          string              `json:"text"`
	Author        string              `json:"author_id"`
	PublicMetrics utils.PublicMetrics `json:"public_metrics"`
	Timestamp     string              `json:"created_at"`
	Attachments   attachments         `json:"attachments,omitempty"`
	Geo           geoStruct           `json:"geo,omitempty"`
}

/* Twitter data structure that counts how many tweets you tweet in a day/hour */
type tweetCount struct {
	Start string `json:"start"`
	End   string `json:"end"`
	Count uint64 `json:"tweet_count"`
}

type geoTwitterStruct struct {
	Id    string          `json:"id"`
	Name  string          `json:"full_name"`
	Place geojson.Feature `json:"geo"`
}

type attachments struct {
	PollIds   []string `json:"poll_ids"`
	MediaKeys []string `json:"media_keys"`
}

type geoStruct struct {
	PlaceId string `json:"place_id"`
}
