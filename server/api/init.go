package api

import (
	"math"

	"git.hjkl.gq/team7/twitterman/server/TwitterApi"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

type endpoint struct {
	Endpoint string
	Function func(*gin.Context)
	Method   string
}

var corsEnabledURLs = []string{
	"http://localhost:5173",
}

var endpointList = []endpoint{
	{"/tweet/id/:id", getTweetById, "GET"},
	{"/tweet/hashtag/:hashtag", getTweetsByHashtag, "GET"},
	{"/tweet/keyword/:keyword", getTweetsByKeyword, "GET"},
	{"/tweet/loadNextPage", getNewPageLastQuery, "GET"},
	{"/user/:username", getUserInfo, "GET"},
	{"/user/:username/tweets", getUserTweetsByUsername, "GET"},
	{"/count/:username/:granularity", getTweetCountByUsername, "GET"},
	{"/login", loginApi, "POST"},
	{"/register", registerApi, "POST"},
}

func cORSMiddleware() gin.HandlerFunc {
	corsString := ""
	for i, val := range corsEnabledURLs {
		corsString += val
		if i != len(corsEnabledURLs)-1 {
			corsString += ", "
		}
	}
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", corsString)
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func InitApi() {
	// log.Println(utils.Router.Routes())
	utils.Router.Use(cORSMiddleware())
	for _, v := range endpointList {
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

func round(num float64) int {
	return int(num + math.Copysign(0.5, num))
}

func toFixed(num float64, precision int) float64 {
	output := math.Pow(10, float64(precision))
	return float64(round(num*output)) / output
}

func CastTweetStructToMyStruct(tw TwitterApi.Data[[]TwitterApi.TwitterTweetStructure]) []utils.Tweet {

	var ret []utils.Tweet

	for _, t := range tw.DataTmp {
		var x utils.Tweet = utils.Tweet{
			TwitterId:     t.Id,
			Content:       t.Text,
			Timestamp:     t.Timestamp,
			PublicMetrics: t.PublicMetrics,
		}

		for _, g := range tw.Include.Places {
			if g.Id == t.Geo.PlaceId {
				x.Geo.Id = g.Id
				x.Geo.Name = g.Name
				if len(g.Place.BoundingBox) > 2 {
					x.Geo.Coords = utils.Dict{
						"x": toFixed((g.Place.BoundingBox[1]+g.Place.BoundingBox[3])/2, 4),
						"y": toFixed((g.Place.BoundingBox[0]+g.Place.BoundingBox[2])/2, 4),
					}
				} else {
					x.Geo.Coords = utils.Dict{
						"x": toFixed((g.Place.BoundingBox[0]), 4),
						"y": toFixed((g.Place.BoundingBox[1]), 4),
					}
				}

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
