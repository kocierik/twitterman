package main

import (
	"twitterman/api"
	"twitterman/utils"

	"twitterman/database"
)

func main() {
	database.Connect()
	defer database.Disconnect()

	utils.InitHttpClient()
	api.InitApi()
	utils.Router.Run("0.0.0.0:" + utils.ServerPort)
}
