package api

import (
	"fmt"
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
	{"/tweet/:mode/:query", getTweets, "GET"},
	{"/tweet/loadNextPage", getNewPageTweets, "GET"},
	{"/count/:mode/:query/:granularity", getTweetCount, "GET"},
	{"/user/:username", getUserInfo, "GET"},
	{"/login", loginApi, "POST"},
	{"/register", registerApi, "POST"},
}

func CORSMiddleware() gin.HandlerFunc {
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
	utils.Router.Use(CORSMiddleware())
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

/* helper functions to round a number for getPlace function */
func round(num float64) int {
	return int(num + math.Copysign(0.5, num))
}

func toFixed(num float64, precision int) float64 {
	output := math.Pow(10, float64(precision))
	return float64(round(num*output)) / output
}

// set the geo position of a tweet given a list of tweet taken from the Twitter Api
func setPlace(tw TwitterApi.TwitterTweetStruct, new *utils.Tweet, allTwData TwitterApi.DataTweet) {
	for _, g := range allTwData.Include.Places {
		if g.Id == tw.Geo.PlaceId {
			new.Geo.Id = g.Id
			new.Geo.Name = g.Name
			// set coords
			if len(g.Place.BoundingBox) > 2 {
				new.Geo.Coords = utils.Dict{
					"x": toFixed((g.Place.BoundingBox[1]+g.Place.BoundingBox[3])/2, 4),
					"y": toFixed((g.Place.BoundingBox[0]+g.Place.BoundingBox[2])/2, 4),
				}
			} else {
				fmt.Println("Unexpected case")
			}
			break
		}
	}
}

// set the media of a tweet given a list of tweet taken from the Twitter Api
func setMedia(tw TwitterApi.TwitterTweetStruct, new *utils.Tweet, allTwData TwitterApi.DataTweet) {
	for _, id := range tw.Attachments.MediaKeys {
		for _, m := range allTwData.Include.Media {
			if id == m.Id {
				new.Media = append(new.Media, m)
				break
			}
		}
	}
}

// set the user info of a tweet given a list of tweet taken from the Twitter Api
func getUser(t TwitterApi.TwitterTweetStruct, new *utils.Tweet, allTwData TwitterApi.DataTweet) {
	for _, m := range allTwData.Include.User {
		if m.Id == t.Author {
			new.Name = m.Name
			new.Propic = m.Propic
		}
	}
}

func castTweetStructToMyTweet(tw TwitterApi.DataTweet) []utils.Tweet {
	var ret []utils.Tweet

	for _, t := range tw.Data {
		var x utils.Tweet = utils.Tweet{
			TwitterId:     t.Id,
			Content:       t.Text,
			Timestamp:     t.Timestamp,
			PublicMetrics: t.PublicMetrics,
		}

		setPlace(t, &x, tw)
		setMedia(t, &x, tw)
		getUser(t, &x, tw)

		ret = append(ret, x)
	}

	return ret
}

// Check if the granularity is valid
func isGranularityCorrect(c *gin.Context, granularity string) bool {
	if (granularity != "day") && (granularity != "hour") && (granularity != "minute") {
		utils.SendOkResponse(c, utils.Dict{"message": "Invalid granularity"})
		return false
	}
	return true
}

// Check if the mode is valid
func isModeCorrect(c *gin.Context, mode string) bool {
	if (mode != "id") && (mode != "hashtag") && (mode != "keyword") && (mode != "user") {
		utils.SendOkResponse(c, utils.Dict{"message": "Invalid mode"})
		return false
	}
	return true
}
