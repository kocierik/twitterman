package TwitterApi

import (
	"testing"

	"git.hjkl.gq/team7/twitterman/server/utils"
	"github.com/stretchr/testify/assert"
)

func TestGetTwsByHashtag(t *testing.T) {
	utils.InitHttpClient()
	// TODO: test this
	assert.Equal(t, 1, 1)
}

func TestGetTwsByKeyword(t *testing.T) {
	utils.InitHttpClient()
	// TODO: Test this
	assert.Equal(t, 1, 1)
}

func TestGetUsrTwsByUsername(t *testing.T) {
	utils.InitHttpClient()
	// TODO: Test this
	assert.Equal(t, 1, 1)
}
