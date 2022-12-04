package TwitterApi

import (
	"fmt"
	"math"

	"twitterman/utils"
)

/* helper functions to round a number for getPlace function */
func round(num float64) int {
	return int(num + math.Copysign(0.5, num))
}

func toFixed(num float64, precision int) float64 {
	output := math.Pow(10, float64(precision))
	return float64(round(num*output)) / output
}

// set the geo position of a tweet given a list of tweet taken from the Twitter Api
func setPlace(tw twitterTweetStruct, new *utils.Tweet, allTwData DataTweet) {
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
func setMedia(tw twitterTweetStruct, new *utils.Tweet, allTwData DataTweet) {
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
func getUser(t twitterTweetStruct, new *utils.Tweet, allTwData DataTweet) {
	for _, m := range allTwData.Include.User {
		if m.Id == t.Author {
			new.Name = m.Name
			new.Propic = m.Propic
			new.Username = m.Username
		}
	}
}

func castTweetStructToMyTweet(tw DataTweet) []utils.Tweet {
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
