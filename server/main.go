package main

import (
	"twitterman/server/twittermanApi"
	"twitterman/server/utils"
)

func main() {
	utils.InitClient()
	twittermanApi.InitApi()

	utils.Router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
