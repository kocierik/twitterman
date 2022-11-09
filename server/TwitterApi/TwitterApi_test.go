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

	q := baseQueryPlus("query", "#"+hashtag)

	body := utils.Request(http.MethodGet, endpoint, q)

	var tmpMock Data[[]TwitterTweetStructure]
	utils.UnmarshalToJson(body, &tmpMock)

	res := GetTwsByHashtag(hashtag)
	assert.Equal(t, tmpMock, res)
}
