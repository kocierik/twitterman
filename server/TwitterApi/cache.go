package TwitterApi

import (
	"time"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
)

func searchCache(key, value string, start, end time.Time) []utils.Tweet {
	retValue := []utils.Tweet{}
	switch key {
	case "user":
		retValue = database.GetTweetsByUsername(value[5:], start, end) // remove "from:"
	case "hashtag":
		retValue = database.GetTweetsByKeyword(value, start, end)
	case "keyword":
		retValue = database.GetTweetsByKeyword(value, start, end)
	}

	return retValue
}

func searchTwCache(id string) []utils.Tweet {
	retValue := database.GetTweetsByTwitterId(id)
	return retValue
}
