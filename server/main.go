package main

import (
	"git.hjkl.gq/team7/twitterman/server/api"
	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
)

func main() {
	database.Connect()
	defer database.Disconnect()

	utils.InitHttpClient()
	api.InitApi()
	utils.Router.Run("0.0.0.0:" + utils.ServerPort)
}
