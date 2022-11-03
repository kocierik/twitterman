package api

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func request(method string, endpoint string, query utils.Dict) []byte {
	req := newRequest(method, endpoint)
	req.Header.Add("Authorization", "Bearer "+utils.GetEnvVar("BEARER_TOKEN"))

	// formo la query
	if query != nil {
		addQueryToReq(req, query)
	}

	res := doRequest(req)
	defer res.Body.Close() // Close the connection to reuse it

	body := parseBody(res)

	return body
}

func addQueryToReq(req *http.Request, params utils.Dict) {
	q := req.URL.Query()
	for key, value := range params {
		q.Add(key, value.(string))
	}
	req.URL.RawQuery = q.Encode()

	fmt.Println("twitter url: ", req.URL) // debug purpose, uncomment on needs
}

func newRequest(method string, endpoint string) *http.Request {
	req, err := http.NewRequest(method, endpoint, nil)
	utils.ErrorMessage(err, "(http.go) Cannot create new request")
	return req
}

func doRequest(req *http.Request) *http.Response {
	res, err := utils.Client.Do(req)
	utils.ErrorMessage(err, "(http.go) Cannot do the request")
	return res
}

func parseBody(res *http.Response) []byte {
	body, err := ioutil.ReadAll(res.Body)
	utils.ErrorMessage(err, "(http.go) Cannot parse the body of response")
	return body
}

func sendOkResponse(c *gin.Context, ret any) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.IndentedJSON(http.StatusOK, ret)
}

func sendNotFoundResponse(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.AbortWithStatus(http.StatusNotFound)
}

func sendErrorResponse(c *gin.Context, ret string) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.JSON(400, gin.H{
		"success": false,
		"message": "Something went wrong",
	})
}
