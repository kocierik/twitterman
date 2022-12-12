package api

import (
	"time"

	"git.hjkl.gq/team7/twitterman/server/TwitterApi"
	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"

	"github.com/gin-gonic/gin"
)

/*
Get 10 tweets with a defined mode and a query.
Possible mode:
  - id: get all info related one tweet
  - hashtag: get most recent tweets by hashtag
  - keyword: get most recent tweets by keyword
  - user: get most recent tweets by user

example:
  - tweet/id/0123456789
  - tweet/hashtag/salvini
  - tweet/user/elonmusk
  - tweet/keyword/mondo
*/

func getTweets(c *gin.Context) {
	maxResults := c.Param("results")
	mode := c.Param("mode")
	query := c.Param("query")
	start, err := time.Parse(time.RFC3339, c.Param("start"))
	if err != nil {
		utils.SendErrorResponse(c, "start date format wrong")
		return
	}
	end, err := time.Parse(time.RFC3339, c.Param("end"))
	if err != nil {
		utils.SendErrorResponse(c, "end date format wrong")
		return
	}
	var twRet any

	if !isModeCorrect(c, mode) {
		return
	}

	switch mode {
	case "keyword":
	case "hashtag":
		query = "#" + query
	case "user":
		query = "from:" + query
	}

	// fmt.Println(mode, query, maxResults, start, end)
	twRet = TwitterApi.GetTwsByQuery(mode, query, maxResults, start, end)

	utils.SendOkResponse(c, twRet)
}

/* get a tweet by id */
func getTweetById(c *gin.Context) {
	query := c.Param("query")
	twRet := TwitterApi.GetTweetById(query)

	utils.SendOkResponse(c, twRet)
}

func getTweetUserInfoByUsername(c *gin.Context) {
	username := c.Param("username")
	twRet := TwitterApi.GetUserInfoByUsername(username)

	utils.SendOkResponse(c, twRet)
}

func getUserInfo(c *gin.Context) {
	username := c.Param("username")
	usr, err := database.GetUserByName(username)

	if err != nil {
		utils.SendErrorResponse(c, "Problem fetching the user")
		return
	}

	utils.SendOkResponse(c, usr)
}

/*
Load new different tweets of the last query done
*/
func getNewPageTweets(c *gin.Context) {
	maxResults := c.Param("results")
	ret := TwitterApi.GetNextTokenReq(maxResults)

	utils.SendOkResponse(c, ret)
}

/*
save tweet into folder
/user/bob/folder/capperus/add/1245678956
*/
func saveTweet(c *gin.Context) {
	name := c.Param("username")
	folder := c.Param("folderId")
	id := c.Param("tweetId")

	database.InsertSavedTweet(name, folder, id)
}

func remSavedTweet(c *gin.Context) {
	name := c.Param("username")
	folder := c.Param("folderId")
	id := c.Param("tweetId")

	err := database.RemoveSavedTweet(name, folder, id)
	if err != nil {
		utils.SendErrorResponse(c, "Problem fetching the user")
		return
	}
}

func getFolders(c *gin.Context) {
	username := c.Param("username")
	usr, err := database.GetUserByName(username)

	if err != nil {
		utils.SendErrorResponse(c, "Problem fetching the user")
		return
	}

	utils.SendOkResponse(c, usr.SavedFolders)
}

func modifyUser(c *gin.Context) {
	username := c.Param("username")
	action := c.Param("action")

	type RequestBody struct {
		Email    string `json:"email"`
		Password string `json:"password"`
		Username string `json:"username"`
	}

	param := bind[RequestBody](c)

	switch action {
	case "delete":
		err := database.DeleteUser(username)
		if err != nil {
			utils.SendErrorResponse(c, "Problem deleting user")
		}
	case "update":

		if param.Email != "" {
			err := database.ChangeField(username, "email", param.Email)
			if err != nil {
				utils.SendErrorResponse(c, "Problem changing email")
			}
		}
		if param.Password != "" {
			err := database.ChangeField(username, "password", param.Password)
			if err != nil {
				utils.SendErrorResponse(c, "Problem changing password")
			}
		}
		if param.Username != "" {
			err := database.ChangeField(username, "username", param.Username)
			if err != nil {
				utils.SendErrorResponse(c, "Problem changing username")
			}
		}
	}

	utils.SendOkResponse(c, nil)
}
