package database

import (
	"testing"
	"twitterman/server/utils"

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
	InitDbTest()
	Disconnect()
	err := Client.Ping(Ctx, nil)
	assert.NotEqual(t, err, nil)
}

func TestInsertandGetUser(t *testing.T) {
	InitDbTest()
	defer Disconnect()

	// It insert the user
	InsertUser("gianni@gianni", "gianni", "gianni", []utils.Tweet{})

	// It returns an error if the email doesn't exist
	_, err := GetUserByEmail("no-user-with-this-email")
	assert.NotEqual(t, err, nil)

	// It returns the user if the mail does exist
	userEmail, err := GetUserByEmail("gianni@gianni")
	utils.ErrorMessage(err)
	assert.Equal(t, userEmail.Email, "gianni@gianni")

	// It returns an error if the ID doesn't exist
	_, err = GetUserById(primitive.NewObjectID())
	assert.NotEqual(t, err, nil)

	// It returns the user if the id exist
	userId, err := GetUserById(userEmail.ID)
	utils.ErrorMessage(err)
	assert.Equal(t, userEmail, userId)
}