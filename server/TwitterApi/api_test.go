package TwitterApi

import (
	"testing"
	"time"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
	geojson "github.com/paulmach/go.geojson"
	"github.com/stretchr/testify/assert"
)

func TestGetTweetInfoById(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	twRet := GetTweetById("1581295611013320706")

	mockResponse := `[
		{
			"id": "1581295611013320706",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-10-15T14:47:07.000Z",
			"content": "#swetesting prova primo tweet",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 1,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "",
				"full_name": "",
				"coordinates": null
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))
	assert.Equal(t, tmpMock, twRet)
}

func TestGetTwsByHashtag(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	start, _ := time.Parse(time.RFC3339, "2022-11-26T00:00:00.000Z")
	end, _ := time.Parse(time.RFC3339, "2022-12-03T00:00:00.000Z")
	twRet := GetTwsByQuery("hashtag", "#estremamentespecifico", "15", start, end)

	mockResponse := `[
		{
			"id": "1598367424365137934",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-01T17:24:24.000Z",
			"content": "ciao pisquani\n\n#estremamentespecifico",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "",
				"full_name": "",
				"coordinates": null
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, twRet, tmpMock)
}

func TestGetTwsByKeyword(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	start, _ := time.Parse(time.RFC3339, "2022-11-26T00:00:00.000Z")
	end, _ := time.Parse(time.RFC3339, "2022-12-03T00:00:00.000Z")
	twRet := GetTwsByQuery("keyword", "estremamentespecifico", "15", start, end)

	mockResponse := `[
		{
			"id": "1598367424365137934",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-01T17:24:24.000Z",
			"content": "ciao pisquani\n\n#estremamentespecifico",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "",
				"full_name": "",
				"coordinates": null
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, twRet, tmpMock)
}

func TestGetTwsByUsername(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	start, _ := time.Parse(time.RFC3339, "2022-11-19T00:00:00.000Z")
	end, _ := time.Parse(time.RFC3339, "2022-11-19T16:00:00.000Z")
	twRet := GetTwsByQuery("user", "from:team7test", "15", start, end)

	mockResponse := `[
		{
			"id": "1593990467896713216",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-11-19T15:31:57.000Z",
			"content": "Buono Bonelli Burger",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "12c5ecd63e147001",
				"full_name": "Bonelli",
				"coordinates": {
					"x": 44.4988,
					"y": 11.3398
				}
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, twRet, tmpMock)
}

func TestCaster(t *testing.T) {
	tw := DataTweet{
		Data: []twitterTweetStruct{{
			Id:     "1",
			Text:   "1",
			Author: "1",
			PublicMetrics: utils.PublicMetrics{
				RetweetCount: 1,
				ReplyCount:   1,
				LikeCount:    1,
				QuoteCount:   1,
			},
			Timestamp: "1",
			Attachments: attachments{
				PollIds:   []string{"1"},
				MediaKeys: []string{"1"},
			},
			Geo: geoStruct{
				PlaceId: "1",
			},
		}},
		Include: TwitterInclude{
			User: []TwitterUserStruct{{
				Id:       "1",
				Propic:   "1",
				Name:     "1",
				Username: "1",
			}},
			Media: []utils.TwitterMediaStruct{{

				Id:      "1",
				Type:    "1",
				Url:     "1",
				Height:  1,
				Width:   1,
				Preview: "1",
			}},
			Places: []geoTwitterStruct{{
				Id:    "1",
				Name:  "1",
				Place: geojson.Feature{}}},
		},
		Meta: TwitterMetaStruct{},
	}

	twCasted := castTweetStructToMyTweet(tw)

	mockTw := []utils.Tweet{
		{
			TwitterId: "1",
			Name:      "1",
			Propic:    "1",
			Username:  "1",
			Content:   "1",
			Timestamp: "1",
			PublicMetrics: utils.PublicMetrics{
				RetweetCount: 1,
				ReplyCount:   1,
				LikeCount:    1,
				QuoteCount:   1,
			},
			Media: []utils.TwitterMediaStruct{{
				Id:      "1",
				Type:    "1",
				Url:     "1",
				Height:  1,
				Width:   1,
				Preview: "1",
			}},
			Geo: utils.GeoPosition{
				Id:     "1",
				Name:   "1",
				Coords: nil,
			},
		},
	}

	assert.Equal(t, twCasted, mockTw)
}
