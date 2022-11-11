package TwitterApi

import (
	"git.hjkl.gq/team7/twitterman/server/utils"
	geojson "github.com/paulmach/go.geojson"
)

type attachments struct {
	PollIds   []string `json:"poll_ids"`
	MediaKeys []string `json:"media_keys"`
}

type geoStruct struct {
	PlaceId string `json:"place_id"`
}

/* Twitter data structure that counts how many tweets you tweet in a day/hour */
type tweetCount struct {
	Start string `json:"start"`
	End   string `json:"end"`
	Count uint64 `json:"tweet_count"`
}

type GeoTwitterStruct struct {
	Id    string          `json:"id"`
	Name  string          `json:"full_name"`
	Place geojson.Feature `json:"geo"`
}

type TwitterUserStructure struct {
	Id       string `json:"id"`
	Propic   string `json:"profile_image_url"`
	Name     string `json:"name"`
	Username string `json:"username"`
}

type TwitterTweetStructure struct {
	Id            string              `json:"id"`
	Text          string              `json:"text"`
	Author        string              `json:"author_id"`
	PublicMetrics utils.PublicMetrics `json:"public_metrics"`
	Timestamp     string              `json:"created_at"`
	Attachments   attachments         `json:"attachments,omitempty"`
	Geo           geoStruct           `json:"geo,omitempty"`
}

type TwitterInclude struct {
	User   []TwitterUserStructure        `json:"users,omitempty"`
	Media  []utils.TwitterMediaStructure `json:"media,omitempty"`
	Places []GeoTwitterStruct            `json:"places,omitempty"`
}

type TwitterMetaStructure struct {
	// OldestId      string `json:"oldest_id"`
	// NewestId      string `json:"newest_id"`
	// ResultCount   uint64 `json:"result_count"`
	NextToken string `json:"next_token,omitempty"`
	// PreviousToken string `json:"previous_token"`
}

type Data[T any] struct {
	DataTmp T                    `json:"data"`
	Include TwitterInclude       `json:"includes,omitempty"`
	Meta    TwitterMetaStructure `json:"meta,omitempty"`
}
