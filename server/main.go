package main

import (
	"git.hjkl.gq/team7/twitterman/server/api"
	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-contrib/cors"
)

func main() {
	utils.InitHttpClient()
	database.Connect()
	api.InitApi()

	utils.Router.Use(cors.Default())
	utils.Router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
