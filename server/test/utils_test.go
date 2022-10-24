package test

import (
	"testing"
	"twitterman/server/utils"

	"github.com/stretchr/testify/assert"
)

func TestGetEnvVar(t *testing.T) {
	assert.Equal(t, "https://qube.hjkl.gq", utils.GetEnvVar("SONAR_HOST_URL"))
	assert.Equal(t, "", utils.GetEnvVar("COSE_A_CASO"))
}
