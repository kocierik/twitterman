package TwitterApi

import (
	"net/http"
	"testing"

	"git.hjkl.gq/team7/twitterman/server/utils"
	"github.com/stretchr/testify/assert"
)

func TestGetTwsByHashtag(t *testing.T) {
	utils.InitHttpClient()
	hashtag := "bellazio"
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := BaseQueryPlus("query", "#"+hashtag)

	body := utils.Request(http.MethodGet, endpoint, q)

	tmpMock := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	res := GetTwsByHashtag(hashtag)
	assert.Equal(t, tmpMock, res)
}

func TestGetTwsByKeyword(t *testing.T) {
	utils.InitHttpClient()
	keyword := "bellazio"
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := BaseQueryPlus("query", keyword)

	body := utils.Request(http.MethodGet, endpoint, q)

	tmpMock := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	res := GetTwsByKeyword(keyword)
	assert.Equal(t, tmpMock, res)
}

func TestGetUsrTwsByUsername(t *testing.T) {
	utils.InitHttpClient()
	username := "team7test"
	endpoint := utils.TwitterApi + "/tweets/search/recent"

	q := BaseQueryPlus("query", "from:"+username)

	body := utils.Request(http.MethodGet, endpoint, q)

	tmpMock := utils.UnmarshalToJson[Data[[]TwitterTweetStructure]](body)

	res := GetUsrTwsByUsername(username)
	assert.Equal(t, tmpMock, res)
}
