package database

import (
	"context"
	"testing"

	"git.hjkl.gq/team7/twitterman/server/utils"
	"github.com/go-playground/assert/v2"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var testMail string = "gianni@gianni"
var testTwtId string = "12345678987654"
var testFolder string = "testFolder"

func TestDatabaseConnect(t *testing.T) {
	Connect()
	defer client.Disconnect(ctx)

	err := client.Ping(context.Background(), nil)
	assert.Equal(t, err, nil)
}

func TestDatabaseDisconnect(t *testing.T) {
	Connect()
	Disconnect()
	err := client.Ping(ctx, nil)
	assert.NotEqual(t, err, nil)
}

func TestInsertandGetUser(t *testing.T) {
	InitDbTest()
	defer Disconnect()

	// It insert the user
	InsertUser("gianni@gianni", "gianni", "gianni", []utils.TweetsFolder{})

	// It returns an error if the email doesn't exist
	_, err := GetUserByEmail("no-user-with-this-email")
	assert.NotEqual(t, err, nil)

	// It returns the user if the mail does exist
	userEmail, err := GetUserByEmail("gianni@gianni")
	utils.TestError(err, "Test GetUserByEmail function error1")
	assert.Equal(t, userEmail.Email, "gianni@gianni")

	// It returns an error if the ID doesn't exist
	_, err = GetUserById(primitive.NewObjectID())
	assert.NotEqual(t, err, nil)

	// It returns the user if the id exist
	userId, err := GetUserById(userEmail.ID)
	utils.TestError(err, "Test GetUserById function error2")
	assert.Equal(t, userEmail, userId)

}

func TestFolderUsage(t *testing.T) {
	InitDbTest()
	defer Disconnect()
	InsertUser("gianni@gianni", "gianni", "gianni123A", []utils.TweetsFolder{})

	/* Test saving tweet */
	err := InsertSavedTweet(testMail, testFolder, testTwtId)
	assert.Equal(t, err, nil)

	/* delete tweet */
	err = RemoveSavedTweet(testMail, testFolder, testTwtId)
	assert.Equal(t, err, nil)

	/* delete folder*/
	err = DeleteFolder(testMail, testFolder)
	assert.Equal(t, err, nil)
}
