package TwitterApi

import (
	"testing"
	"time"

	"git.hjkl.gq/team7/twitterman/server/database"
	"git.hjkl.gq/team7/twitterman/server/utils"
	geojson "github.com/paulmach/go.geojson"
	"github.com/stretchr/testify/assert"
)

func TestGetTweetInfoById(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	twRet := GetTweetById("1581295611013320706")

	mockResponse := `[
		{
			"id": "1581295611013320706",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-10-15T14:47:07.000Z",
			"content": "#swetesting prova primo tweet",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 1,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "",
				"full_name": "",
				"coordinates": null
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))
	assert.Equal(t, tmpMock, twRet)
}

func TestRecentTweets(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	end := time.Now()
	start := end.AddDate(0, 0, -9)
	twRet := GetTwsByQuery("hashtag", "#worldcup", start, end)

	assert.NotEqual(t, twRet, nil)
}

func TestGetTwsByHashtag(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	start, _ := time.Parse(time.RFC3339, "2022-11-26T00:00:00.000Z")
	end, _ := time.Parse(time.RFC3339, "2022-12-03T00:00:00.000Z")
	twRet := GetTwsByQuery("hashtag", "#estremamentespecifico", start, end)

	mockResponse := `[
		{
			"id": "1598367424365137934",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-01T17:24:24.000Z",
			"content": "ciao pisquani\n\n#estremamentespecifico",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "",
				"full_name": "",
				"coordinates": null
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, twRet, tmpMock)
}

func TestGetTwsByKeyword(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	start, _ := time.Parse(time.RFC3339, "2022-11-26T00:00:00.000Z")
	end, _ := time.Parse(time.RFC3339, "2022-12-03T00:00:00.000Z")
	twRet := GetTwsByQuery("keyword", "estremamentespecifico", start, end)

	mockResponse := `[
		{
			"id": "1598367424365137934",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-12-01T17:24:24.000Z",
			"content": "ciao pisquani\n\n#estremamentespecifico",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "",
				"full_name": "",
				"coordinates": null
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, twRet, tmpMock)
}

func TestGetTwsByUsername(t *testing.T) {
	database.Connect()
	defer database.Disconnect()
	utils.InitHttpClient()
	start, _ := time.Parse(time.RFC3339, "2022-11-19T00:00:00.000Z")
	end, _ := time.Parse(time.RFC3339, "2022-11-19T16:00:00.000Z")
	twRet := GetTwsByQuery("user", "from:team7test", start, end)

	mockResponse := `[
		{
			"id": "1593990467896713216",
			"name": "team7",
			"propic": "https://pbs.twimg.com/profile_images/1581295877624369152/p6aLdDNO_normal.jpg",
			"timestamp": "2022-11-19T15:31:57.000Z",
			"content": "Buono Bonelli Burger",
			"username": "team7test",
			"public_metrics": {
				"retweet_count": 0,
				"reply_count": 0,
				"like_count": 0,
				"quote_count": 0
			},
			"media": null,
			"geo": {
				"id": "12c5ecd63e147001",
				"full_name": "Bonelli",
				"coordinates": {
					"x": 44.4988,
					"y": 11.3398
				}
			}
		}
	]`

	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, twRet, tmpMock)
}

func TestCaster(t *testing.T) {
	tw := DataTweet{
		Data: []twitterTweetStruct{{
			Id:     "1",
			Text:   "1",
			Author: "1",
			PublicMetrics: utils.PublicMetrics{
				RetweetCount: 1,
				ReplyCount:   1,
				LikeCount:    1,
				QuoteCount:   1,
			},
			Timestamp: "1",
			Attachments: attachments{
				PollIds:   []string{"1"},
				MediaKeys: []string{"1"},
			},
			Geo: geoStruct{
				PlaceId: "1",
			},
		}},
		Include: TwitterInclude{
			User: []TwitterUserStruct{{
				Id:       "1",
				Propic:   "1",
				Name:     "1",
				Username: "1",
			}},
			Media: []utils.TwitterMediaStruct{{

				Id:      "1",
				Type:    "1",
				Url:     "1",
				Height:  1,
				Width:   1,
				Preview: "1",
			}},
			Places: []geoTwitterStruct{{
				Id:    "1",
				Name:  "1",
				Place: geojson.Feature{BoundingBox: []float64{20.13521, 235.215, 22.13521, 237.215}}}},
		},
		Meta: TwitterMetaStruct{},
	}

	twCasted := castTweetStructToMyTweet(tw)

	mockTw := []utils.Tweet{
		{
			TwitterId: "1",
			Name:      "1",
			Propic:    "1",
			Username:  "1",
			Content:   "1",
			Timestamp: "1",
			PublicMetrics: utils.PublicMetrics{
				RetweetCount: 1,
				ReplyCount:   1,
				LikeCount:    1,
				QuoteCount:   1,
			},
			Media: []utils.TwitterMediaStruct{{
				Id:      "1",
				Type:    "1",
				Url:     "1",
				Height:  1,
				Width:   1,
				Preview: "1",
			}},
			Geo: utils.GeoPosition{
				Id:     "1",
				Name:   "1",
				Coords: utils.Dict{"x": 236.215, "y": 21.1352},
			},
		},
	}

	assert.Equal(t, twCasted, mockTw)
}

// func TestLoadMore(t *testing.T) {
// 	database.Connect()
// 	defer database.Disconnect()
// 	utils.InitHttpClient()

// 	start, _ := time.Parse(time.RFC3339, "2022-12-03T10:00:00.000Z")
// 	end, _ := time.Parse(time.RFC3339, "2022-12-10T00:00:00.000Z")
// 	response := GetTwsByQuery("user", "from:giorgiameloni", start, end)

// 	response = GetNextTokenReq()

// 	tmpMock := `[
// 		{
// 			"id": "1600103836454031360",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-06T12:24:17.000Z",
// 			"content": "Il lavoro ti può portare ovunque, mentre il reddito di cittadinanza ti lascia dove sei.\nE noi abbiamo scelto di credere nell’Italia e negli italiani. #gliappuntidiGiorgia https://t.co/BGf22DYUjV",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 1233,
// 				"reply_count": 2220,
// 				"like_count": 9223,
// 				"quote_count": 203
// 			},
// 			"media": [
// 				{
// 					"media_key": "13_1600101367565103105",
// 					"type": "video",
// 					"url": "",
// 					"height": 2160,
// 					"width": 2160,
// 					"preview_image_url": "https://pbs.twimg.com/amplify_video_thumb/1600101367565103105/img/77w-dyUMaZtWMED-.jpg"
// 				}
// 			],
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		},
// 		{
// 			"id": "1599852064053825536",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-05T19:43:50.000Z",
// 			"content": "Sono stati affrontati anche gli ultimi sviluppi nel Mediterraneo e nel Medio Oriente, le prospettive del processo di pace israelo-palestinese e della collaborazione energetica e idrica nella regione. Amicizia tra Italia e Giordania potrà contribuire ad affrontare sfide complesse. https://t.co/Sz3SlWLbdA",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 95,
// 				"reply_count": 69,
// 				"like_count": 972,
// 				"quote_count": 7
// 			},
// 			"media": [
// 				{
// 					"media_key": "3_1599852053387481093",
// 					"type": "photo",
// 					"url": "https://pbs.twimg.com/media/FjPQ91dXEAUDlIA.jpg",
// 					"height": 1366,
// 					"width": 2048,
// 					"preview_image_url": ""
// 				}
// 			],
// 			"geo": {
// 				"id": "07d9f3488f087000",
// 				"full_name": "Palazzo Chigi",
// 				"coordinates": {
// 					"x": 41.9009,
// 					"y": 12.4804
// 				}
// 			}
// 		},
// 		{
// 			"id": "1599852049738633217",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-05T19:43:47.000Z",
// 			"content": "Oggi un incontro molto cordiale con Sua Maestà @KingAbdullahII, Re di Giordania. Nel corso del pranzo, al quale hanno preso parte anche i ministri Tajani e Crosetto, sono stati approfonditi i temi dell’agenda bilaterale, in particolare della collaborazione su sicurezza e difesa. https://t.co/efef2nwtwf",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 312,
// 				"reply_count": 331,
// 				"like_count": 3051,
// 				"quote_count": 14
// 			},
// 			"media": [
// 				{
// 					"media_key": "3_1599852029207318544",
// 					"type": "photo",
// 					"url": "https://pbs.twimg.com/media/FjPQ8bYXEBANBMc.jpg",
// 					"height": 1672,
// 					"width": 2048,
// 					"preview_image_url": ""
// 				}
// 			],
// 			"geo": {
// 				"id": "07d9f3488f087000",
// 				"full_name": "Palazzo Chigi",
// 				"coordinates": {
// 					"x": 41.9009,
// 					"y": 12.4804
// 				}
// 			}
// 		},
// 		{
// 			"id": "1599810449444605952",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-05T16:58:28.000Z",
// 			"content": "Il volontariato e l’impegno sociale hanno un ruolo vitale per la coesione della nostra Nazione. Un settore da proteggere e tutelare, che ci rende orgogliosi.\n\nAi milioni di volontari che operano in Italia va la nostra profonda gratitudine.\n#GiornataInternazionaledelVolontariato",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 175,
// 				"reply_count": 289,
// 				"like_count": 1613,
// 				"quote_count": 13
// 			},
// 			"media": null,
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		},
// 		{
// 			"id": "1599768865709314048",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-05T14:13:14.000Z",
// 			"content": "Il mio intervento di questa mattina alla prima edizione del Festival delle Regioni e delle Province autonome. https://t.co/JKR0lwzwbo",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 195,
// 				"reply_count": 271,
// 				"like_count": 1599,
// 				"quote_count": 12
// 			},
// 			"media": null,
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		},
// 		{
// 			"id": "1599737896809791489",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-05T12:10:10.000Z",
// 			"content": "RT @Palazzo_Chigi: Il Presidente @GiorgiaMeloni accoglie a Palazzo Chigi il Re Abdullah II di Giordania.\nDiretta https://t.co/2YYWrrJYJd",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 64,
// 				"reply_count": 0,
// 				"like_count": 0,
// 				"quote_count": 0
// 			},
// 			"media": null,
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		},
// 		{
// 			"id": "1599431326343385090",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-04T15:51:58.000Z",
// 			"content": "A nome del Governo italiano, i nostri auguri e la nostra profonda gratitudine.",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 96,
// 				"reply_count": 81,
// 				"like_count": 1014,
// 				"quote_count": 4
// 			},
// 			"media": null,
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		},
// 		{
// 			"id": "1599431324385021953",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-04T15:51:58.000Z",
// 			"content": "Nel giorno di #SantaBarbara, patrona di @vigilidelfuoco, @ItalianNavy, Artiglieri e Genieri dell’@Esercito, omaggiamo gli eroi che mettono a repentaglio la loro vita per il bene comune operando in ogni scenario di soccorso ed emergenza, come nel tragico attuale scenario di Ischia",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 242,
// 				"reply_count": 217,
// 				"like_count": 2282,
// 				"quote_count": 23
// 			},
// 			"media": null,
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		},
// 		{
// 			"id": "1599409448329834497",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-04T14:25:02.000Z",
// 			"content": "Apriamo insieme i miei quaderni di lavoro. \nBentrovati nel primo appuntamento della rubrica #gliappuntidiGiorgia https://t.co/XKSipEWYK9",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 990,
// 				"reply_count": 2745,
// 				"like_count": 6697,
// 				"quote_count": 259
// 			},
// 			"media": null,
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		},
// 		{
// 			"id": "1599179839587557376",
// 			"name": "Giorgia Meloni",
// 			"propic": "https://pbs.twimg.com/profile_images/1584437887755591683/KsvosZmP_normal.jpg",
// 			"timestamp": "2022-12-03T23:12:39.000Z",
// 			"content": "RT @GiorgiaMeloni: @NajlaElmangoush Thank you @NajlaElmangoush for your words. It was a pleasure to meet you at the Rome Med Dialogues Conf…",
// 			"username": "GiorgiaMeloni",
// 			"public_metrics": {
// 				"retweet_count": 109,
// 				"reply_count": 0,
// 				"like_count": 0,
// 				"quote_count": 0
// 			},
// 			"media": null,
// 			"geo": {
// 				"id": "",
// 				"full_name": "",
// 				"coordinates": null
// 			}
// 		}
// 	]`

// 	mockResult := utils.UnmarshalToJson[[]utils.Tweet]([]byte(tmpMock))

// 	assert.Equal(t, mockResult, response)
// }
