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
	case "username":
		//retValue = database.GetTweetsByUsername(value)
		// TODO: Per fare lo username bisogna cambiare la struttura dei tweet, quindi bello complicato
		// TODO: Per qualche motivo twitter restituisce username e userid spostati dunque va visto
	case "hashtag":
		retValue = database.GetTweetsByKeyword("#" + value)
	case "keyword":
		retValue = database.GetTweetsByKeyword(value)
	}

	log.Print(retValue)
	return retValue
}
