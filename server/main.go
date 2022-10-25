package main

import (
	"twitterman/server/database"
	"twitterman/server/twittermanApi"
	"twitterman/server/utils"
)

func main() {
	utils.InitClient()
	database.Connect(true)
	twittermanApi.InitApi()

	utils.Router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
