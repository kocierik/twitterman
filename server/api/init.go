package api

import (
	"git.hjkl.gq/team7/twitterman/server/TwitterApi"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

type Endpoint struct {
	Endpoint string
	Function func(*gin.Context)
	Method   string
}

var EndpointList = []Endpoint{
	{"/tweet/id/:id", getTweetById, "GET"},
	{"/tweet/hashtag/:hashtag", getTweetsByHashtag, "GET"},
	{"/tweet/keyword/:keyword", getTweetsByKeyword, "GET"},
	{"/tweet/loadNextPage", getNewPageLastQuery, "GET"},
	{"/user/:username", getUserInfo, "GET"},
	{"/user/:username/tweets", getUserTweetsById, "GET"},
	{"/count/:username/:granularity", getTweetCountByUsername, "GET"},
	{"/login", loginApi, "POST"},
	{"/register", registerApi, "POST"},
}

func InitApi() {
	// log.Println(utils.Router.Routes())
	for _, v := range EndpointList {
		if v.Method == "GET" {
			utils.Router.GET(v.Endpoint, v.Function)
		} else {
			utils.Router.POST(v.Endpoint, v.Function)
		}
	}
}

func initApiTest() {
	utils.Router = gin.Default()
	utils.InitHttpClient()
	InitApi()
}

func ConvertTweetDataToMyTweet(tw TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]) []utils.Tweet {

	var ret []utils.Tweet

	for _, t := range tw.DataTmp {
		var x utils.Tweet = utils.Tweet{
			Id:            t.Id,
			Content:       t.Text,
			Timestamp:     t.Timestamp,
			PublicMetrics: t.PublicMetrics,
		}

		for _, m := range tw.Include.Places {
			if m.Id == t.Geo.PlaceId {
				x.Geo.Id = m.Id
				x.Geo.Name = m.Name
				x.Geo.Place = m.Place
				break
			}
		}

		for _, id := range t.Attachments.MediaKeys {
			for _, m := range tw.Include.Media {
				if id == m.Id {
					x.Media = append(x.Media, m)
					break
				}
			}
		}

		for _, m := range tw.Include.User {
			if m.Id == t.Author {
				x.Name = m.Name
				x.Propic = m.Propic
			}
		}

		ret = append(ret, x)
	}

	return ret
}
