package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SendOkResponse(c *gin.Context, ret any) {
	c.IndentedJSON(http.StatusOK, ret)
}

func SendNotFoundResponse(c *gin.Context) {
	c.AbortWithStatus(http.StatusNotFound)
}

func SendErrorResponse(c *gin.Context) {
	c.JSON(400, gin.H{
		"success": false,
		"message": "Something went wrong",
	})
}
