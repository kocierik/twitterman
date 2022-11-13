package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SendOkResponse(c *gin.Context, ret any) {
	c.IndentedJSON(http.StatusOK, ret)
}
