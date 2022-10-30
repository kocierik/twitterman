package main

import (
	"twitterman/server/api"
	"twitterman/server/database"
	"twitterman/server/utils"
)

func main() {
	api.InitHttpClient()
	database.Connect()
	api.InitApi()

	utils.Router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
