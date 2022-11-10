package database

import (
	"testing"

	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func TestDatabaseConnect(t *testing.T) {
	Connect()
	defer Disconnect()
	err := Client.Ping(Ctx, nil)
	assert.Equal(t, err, nil)
}

func TestDatabaseDisconnect(t *testing.T) {
	Connect()
	Disconnect()
	err := Client.Ping(Ctx, nil)
	assert.NotEqual(t, err, nil)
}

func TestInsertandGetUser(t *testing.T) {
	InitDbTest()

	// It insert the user
	InsertUser("gianni@gianni", "gianni", "gianni", []string{})

	// It returns an error if the email doesn't exist
	_, err := GetUserByEmail("no-user-with-this-email")
	assert.NotEqual(t, err, nil)

	// It returns the user if the mail does exist
	userEmail, err := GetUserByEmail("gianni@gianni")
	utils.ErrorMessage(err, "Test GetUserByEmail function error")
	assert.Equal(t, userEmail.Email, "gianni@gianni")

	// It returns an error if the ID doesn't exist
	_, err = GetUserById(primitive.NewObjectID())
	assert.NotEqual(t, err, nil)

	// It returns the user if the id exist
	userId, err := GetUserById(userEmail.ID)
	utils.ErrorMessage(err, "Test GetUserById function error")
	assert.Equal(t, userEmail, userId)
}
