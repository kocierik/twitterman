package test

import (
	"log"
	"testing"
	"twitterman/server/database"
	"twitterman/server/utils"

	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func initDbTest() {
	database.Dbname = "test"
	database.Connect()

	// Clear database
	if _, err := database.Client.Database(database.Dbname).Collection(database.Collection).DeleteMany(database.Ctx, bson.D{}); err != nil {
		log.Fatal(err)
	}
}

func TestDatabaseConnect(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	err := database.Client.Ping(database.Ctx, nil)
	assert.Equal(t, err, nil)
}

func TestDatabaseDisconnect(t *testing.T) {
	initDbTest()
	database.Disconnect()
	err := database.Client.Ping(database.Ctx, nil)
	assert.NotEqual(t, err, nil)
}

func TestInsertandGetUser(t *testing.T) {
	initDbTest()
	defer database.Disconnect()

	// It insert the user
	database.InsertUser("gianni@gianni", "gianni", "gianni", []utils.Tweet{})

	// It returns an error if the email doesn't exist
	_, err := database.GetUserByEmail("no-user-with-this-email")
	assert.NotEqual(t, err, nil)

	// It returns the user if the mail does exist
	userEmail, err := database.GetUserByEmail("gianni@gianni")
	if err != nil {
		log.Fatal(err)
	}
	assert.Equal(t, userEmail.Email, "gianni@gianni")

	// It returns an error if the ID doesn't exist
	_, err = database.GetUserById(primitive.NewObjectID())
	assert.NotEqual(t, err, nil)

	// It returns the user if the id exist
	userId, err := database.GetUserById(userEmail.ID)
	if err != nil {
		log.Fatal(err)
	}
	assert.Equal(t, userEmail, userId)
}
