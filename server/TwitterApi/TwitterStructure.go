package TwitterApi

import "git.hjkl.gq/team7/twitterman/server/utils"

type Attachments struct {
	PollIds   []string `json:"poll_ids"`
	MediaKeys []string `json:"media_keys"`
}

type TwitterTweetStructure struct {
	Id            string              `json:"id"`
	Text          string              `json:"text"`
	Author        string              `json:"author_id"`
	PublicMetrics utils.PublicMetrics `json:"public_metrics"`
	Timestamp     string              `json:"created_at"`
	Attachments   Attachments         `json:"attachments"`
}

type TwitterUserStructure struct {
	Id       string `json:"id"`
	Propic   string `json:"profile_image_url"`
	Name     string `json:"name"`
	Username string `json:"username"`
}

type TwitterMetaStructure struct {
	// OldestId      string `json:"oldest_id"`
	// NewestId      string `json:"newest_id"`
	// ResultCount   string `json:"result_count"`
	NextToken string `json:"next_token"`
	// PreviousToken string `json:"previous_token"`
}

type TwitterInclude struct {
	User  []TwitterUserStructure        `json:"users"`
	Media []utils.TwitterMediaStructure `json:"media"`
}

type Data[T any] struct {
	DataTmp T                    `json:"data"`
	Include TwitterInclude       `json:"includes"`
	Meta    TwitterMetaStructure `json:"meta"`
}
