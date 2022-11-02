package main

import (
	"twitterman/server/api"
	"twitterman/server/database"
	"twitterman/server/utils"

	"github.com/gin-contrib/cors"
)

func main() {
	api.InitHttpClient()
	database.Connect()
	api.InitApi()

	utils.Router.Use(cors.Default())
	utils.Router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
