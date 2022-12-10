package TwitterApi

import (
	"io/ioutil"
	"net/http"

	"git.hjkl.gq/team7/twitterman/server/utils"
)

type requestStruct struct {
	Method    string
	EndPoint  string
	Params    utils.Dict
	NextToken string
}

func makeTwitterRequest(method, endpoint string, param utils.Dict) []byte {
	req := newRequest(method, endpoint)
	req.Header.Add("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAGY9iQEAAAAA%2B9F%2FomFSQBTgpxO0M2q9rfbfhBs%3DumBmJlZ7yoZIj96NHUTgjLnTDs0t1y0Cuxr9fcQlvmAT27SJcR")

	if param != nil {
		q := utils.Dict{
			"expansions":   expansions,
			"tweet.fields": tweetsField,
			"media.fields": mediaField,
			"user.fields":  userField,
			"place.fields": placeField,
		}
		for k, i := range param {
			q[k] = i
		}
		// formo la query
		addQueryToReq(req, q)
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
	// fmt.Println("twitter url: ", req.URL) // debug purpose, uncomment on needs
}

func newRequest(method string, endpoint string) *http.Request {
	req, err := http.NewRequest(method, endpoint, nil)
	utils.TestError(err, "(http.go) Cannot create new request")
	return req
}

func doRequest(req *http.Request) *http.Response {
	res, err := utils.Client.Do(req)
	utils.TestError(err, "(http.go) Cannot do the request")
	return res
}

func parseBody(res *http.Response) []byte {
	body, err := ioutil.ReadAll(res.Body)
	utils.TestError(err, "(http.go) Cannot parse the body of response")
	return body
}

func baseQuery(key, value string) utils.Dict {
	return utils.Dict{
		key: value,
	}
}
