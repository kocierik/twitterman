package database

import (
	"log"
	"testing"
	"twitterman/server/utils"

	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson"
)

func initDbTest() {
	dbname = "test"
	_ = Connect(true)
	if _, err := Client.Database(dbname).Collection(collection).DeleteMany(Ctx, bson.D{}); err != nil {
		log.Fatal(err)
	}
}

func TestDatabaseConnect(t *testing.T) {
	mycli := Connect(true)
	defer Disconnect()
	err := Client.Ping(Ctx, nil)
	assert.Equal(t, err, nil)
	assert.Equal(t, mycli, Client)
}

func TestDatabaseDisconnect(t *testing.T) {
	initDbTest()
	Disconnect()
	err := Client.Ping(Ctx, nil)
	assert.NotEqual(t, err, nil)
}

func TestInsertandGetUser(t *testing.T) {
	initDbTest()
	defer Disconnect()
	InsertUser("gianni@gianni", "gianni", "gianni", make([]utils.Tweet, 0))
	res := GetUserByEmail("gianni@gianni")
	assert.Equal(t, res.Email, "gianni@gianni")
}
