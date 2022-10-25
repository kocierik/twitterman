package test

import (
	"log"
	"testing"
	"twitterman/server/database"
	"twitterman/server/utils"

	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson"
)

func initDbTest() {
	database.Dbname = "test"
	_ = database.Connect(true)
	if _, err := database.Client.Database(database.Dbname).Collection(database.Collection).DeleteMany(database.Ctx, bson.D{}); err != nil {
		log.Fatal(err)
	}
}

func TestDatabaseConnect(t *testing.T) {
	mycli := database.Connect(true)
	defer database.Disconnect()
	err := database.Client.Ping(database.Ctx, nil)
	assert.Equal(t, err, nil)
	assert.Equal(t, mycli, database.Client)
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
	database.InsertUser("gianni@gianni", "gianni", "gianni", make([]utils.Tweet, 0))
	res := database.GetUserByEmail("gianni@gianni")
	assert.Equal(t, res.Email, "gianni@gianni")
}
