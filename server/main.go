package main

import (
	"twitterman/server/api"
	"twitterman/server/utils"
)

func main() {
	api.InitClient()
	api.InitApi()

	utils.Router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
