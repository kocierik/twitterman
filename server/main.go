package main

import (
	"git.hjkl.gq/team7/twitterman/server/api"
	"git.hjkl.gq/team7/twitterman/server/utils"
)

func main() {
	utils.InitHttpClient()
	api.InitApi()
	utils.Router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
