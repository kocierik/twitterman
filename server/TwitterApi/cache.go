package TwitterApi

import (
	"log"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
)

func searchCache(key, value string) []utils.Tweet {
	retValue := []utils.Tweet{}
	switch key {
	case "id":
		retValue = database.GetTweetsByTwitterId(value)
	case "user":
		retValue = database.GetTweetsByUsername(value[5:]) // remove "from:"
	case "hashtag":
		retValue = database.GetTweetsByKeyword(value)
	case "keyword":
		retValue = database.GetTweetsByKeyword(value)
	}

	log.Print(retValue)
	return retValue
}
