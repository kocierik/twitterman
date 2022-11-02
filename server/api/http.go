package api

import (
	"io/ioutil"
	"net/http"
	"time"
	"twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

func InitHttpClient() {
	utils.Client = &http.Client{Timeout: 10 * time.Second}
}

func Request(method string, endpoint string, query map[string]string) []byte {
	req := newRequest(method, endpoint)
	req.Header.Add("Authorization", "Bearer "+utils.GetEnvVar("BEARER_TOKEN"))

	// formo la query
	if query != nil {
		addQueryToReq(req, query)
	}

	res := doRequest(req)

	// Close the connection to reuse it
	defer res.Body.Close()

	body := parseBody(res)
	return body
}

func addQueryToReq(req *http.Request, params map[string]string) {
	q := req.URL.Query()
	for key, value := range params {
		q.Add(key, value)
	}
	req.URL.RawQuery = q.Encode()
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

func sendResponse(c *gin.Context, ret any) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.IndentedJSON(http.StatusOK, ret)
}
