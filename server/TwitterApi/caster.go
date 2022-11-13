package TwitterApi

import (
	"math"

	"git.hjkl.gq/team7/twitterman/server/utils"
)

func round(num float64) int {
	return int(num + math.Copysign(0.5, num))
}

func toFixed(num float64, precision int) float64 {
	output := math.Pow(10, float64(precision))
	return float64(round(num*output)) / output
}

func castTweetStructToMyStruct(tw Data[[]twitterTweetStructure]) []utils.Tweet {

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
