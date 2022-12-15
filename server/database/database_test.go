package database

import (
	"context"
	"testing"
	"time"

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
	InsertUser("gianni@gianni", "gianni", "gianni123A", []utils.TweetsFolder{})

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

	ChangeField("gianni@gianni", "password", "1234gjfnbdL")
	usr, err := GetUserByEmail("gianni@gianni")
	utils.TestError(err, "Test changefield failed")
	assert.Equal(t, "1234gjfnbdL", usr.Password)

	err = DeleteUser("gianni@gianni")
	assert.Equal(t, err, nil)
}

func TestFolderUsage(t *testing.T) {
	InitDbTest()
	defer Disconnect()
	const dname = "dummy"
	const dmail = "dummy@dummy"
	const dpsw = "dummyDummy1"
	err := InsertUser(dname, dmail, dpsw, []utils.TweetsFolder{})
	assert.Equal(t, err, nil)

	/* Test saving tweet */
	err = InsertSavedTweet(dmail, testFolder, testTwtId)
	assert.Equal(t, err, nil)

	/* delete tweet */
	err = RemoveSavedTweet(dmail, testFolder, testTwtId)
	assert.Equal(t, err, nil)

	/* delete folder*/
	err = DeleteFolder(dmail, testFolder)
	assert.Equal(t, err, nil)
}

func TestGetTweets(t *testing.T) {
	InitDbTest()
	defer Disconnect()

	var testTwt = utils.Tweet{
		TwitterId: "1602802989407899648",
		Name:      "team7",
		Propic:    "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
		Timestamp: "2022-12-13T23:09:45.000Z",
		Content:   "Attenzione, forse i vecchi non vanno bene per test",
		Username:  "team7test",
		PublicMetrics: utils.PublicMetrics{
			RetweetCount: 0,
			ReplyCount:   0,
			LikeCount:    0,
			QuoteCount:   0,
		},
		Media: nil,
		Geo: utils.GeoPosition{
			Id:     "",
			Name:   "",
			Coords: nil,
		},
	}

	var twtList = []utils.Tweet{testTwt}

	InsertTweetList(twtList)

	twt := GetTweetsByTwitterId("1602802989407899648")
	assert.Equal(t, twtList, twt)

	start, _ := time.Parse(time.RFC3339, "2022-12-13T23:00:45.000Z")
	end, _ := time.Parse(time.RFC3339, "2022-12-13T23:19:45.000Z")

	twt = GetTweetsByUsername("team7test", start, end)
	assert.Equal(t, twtList, twt)

	twt = GetTweetsByKeyword("vecchi non vanno", start, end)
	assert.Equal(t, twtList, twt)
}
