package twittermanApi

import (
	"github.com/gin-gonic/gin"
)

type Endpoint struct {
	Endpoint string
	Function func(*gin.Context)
	Method   string
}

var EndpointList = []Endpoint{
	{"/tweet/:id", getTweetById, "GET"},
}
