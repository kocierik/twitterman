package utils

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetEnvVar(t *testing.T) {
	assert.Equal(t, "https://qube.hjkl.gq", GetEnvVar("SONAR_HOST_URL"))
	assert.Equal(t, "", GetEnvVar("COSE_A_CASO"))
}
