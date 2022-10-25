package utils

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"
)

func GetEnvVar(key string) string {
	return os.Getenv(key)
}

func InitClient() {
	Client = &http.Client{Timeout: 10 * time.Second}
}

func StringToJson(response []byte, result *Tweet) {
	// Parse []byte to go struct pointer
	err := json.Unmarshal(response, result)
	ErrorMessage(err, "Can not unmarshal JSON")
}

func ErrorMessage(err error, msg string) {
	if err != nil {
		log.Fatalf(msg+"= %+v", err)
	}
}

func DoQuery(req *http.Request, params map[string]string) {
	q := req.URL.Query()
	for key, value := range params {
		q.Add(key, value)
	}
	req.URL.RawQuery = q.Encode()
}

func NewRequest(method string, endpoint string) *http.Request {
	req, err := http.NewRequest(method, endpoint, nil)
	ErrorMessage(err, "Error Occurred.")
	req.Header.Add("Authorization", "Bearer "+GetEnvVar("BEARER_TOKEN"))
	return req
}

func DoRequest(req *http.Request) *http.Response {
	res, err := Client.Do(req)
	ErrorMessage(err, "Error sending request to API endpoint.")
	return res
}

func ParseBody(res *http.Response) []byte {
	body, err := ioutil.ReadAll(res.Body)
	ErrorMessage(err, "Couldn't parse response body.")
	return body
}

func Request(method string, endpoint string, query map[string]string) []byte {
	req := NewRequest(method, endpoint)
	// formo la query
	if query != nil {
		DoQuery(req, query)
	}
	res := DoRequest(req)

	// Close the connection to reuse it
	defer res.Body.Close()

	body := ParseBody(res)
	return body
}
