package utils

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

/* Tweet structure used by our code */
type Tweet struct {
	TwitterId     string                  `json:"id" bson:"id"`
	Name          string                  `json:"name" bson:"name"`
	Propic        string                  `json:"propic" bson:"propic"`
	Timestamp     string                  `json:"timestamp" bson:"timestamp"`
	Content       string                  `json:"content" bson:"content"`
	PublicMetrics PublicMetrics           `json:"public_metrics"`
	Media         []TwitterMediaStructure `json:"media" bson:"media"`
	Geo           GeoPosition             `json:"geo" bson:"geo"`
}

/* User structure */
type User struct {
	ID            primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Email         string             `bson:"email" json:"email"`
	Username      string             `bson:"username" json:"username"`
	Password      string             `bson:"password" json:"password"`
	SavedTweetsId []string           `bson:"tweets" json:"tweets"`
}

type Dict map[string]any

/* Useful structure for fetching data from Twitter API */
type PublicMetrics struct {
	RetweetCount int64 `json:"retweet_count"`
	ReplyCount   int64 `json:"reply_count"`
	LikeCount    int64 `json:"like_count"`
	QuoteCount   int64 `json:"quote_count"`
}

/* Frontend data structure to send tweets position*/
type GeoPosition struct {
	Id     string `json:"id"`
	Name   string `json:"full_name"`
	Coords Dict   `json:"coordinates"`
}

/* Twitter data structure to send images and videos */
type TwitterMediaStructure struct {
	Id      string `json:"media_key"`
	Type    string `json:"type"`
	Url     string `json:"url"`
	Height  uint64 `json:"height"`
	Width   uint64 `json:"width"`
	Preview string `json:"preview_image_url"`
}
