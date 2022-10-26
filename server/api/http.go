package api

import (
	"io/ioutil"
	"net/http"
	"time"
	"twitterman/server/utils"
)

func InitClient() {
	utils.Client = &http.Client{Timeout: 10 * time.Second}
}

func Request(method string, endpoint string, query map[string]string) []byte {
	req := newRequest(method, endpoint)
	req.Header.Add("Authorization", "Bearer "+GetEnvVar("BEARER_TOKEN"))

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
	ErrorMessage(err, "Error Occurred.")
	return req
}

func doRequest(req *http.Request) *http.Response {
	res, err := utils.Client.Do(req)
	ErrorMessage(err, "Error sending request to API endpoint.")
	return res
}

func parseBody(res *http.Response) []byte {
	body, err := ioutil.ReadAll(res.Body)
	ErrorMessage(err, "Couldn't parse response body.")
	return body
}
