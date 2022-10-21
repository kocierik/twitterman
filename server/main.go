package main

import (
	"twitterman/server/twittermanApi"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func main() {
	utils.InitClient()
	router := gin.Default()

	for _, v := range twittermanApi.EndpointList {
		if v.Method == "GET" {
			router.GET(v.Endpoint, v.Function)
		} else {
			router.POST(v.Endpoint, v.Function)
		}
	}

	router.Run(utils.ServerUrl + ":" + utils.ServerPort)
}
