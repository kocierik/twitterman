package TwitterApi

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"twitterman/utils"
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
