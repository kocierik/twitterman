package api

import (
	"io"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"git.hjkl.gq/team7/twitterman/server/utils"
	"github.com/stretchr/testify/assert"
)

func sendTestRequest(method, url string, body io.Reader) ([]byte, *httptest.ResponseRecorder) {
	req, _ := http.NewRequest(method, url, body)
	res := httptest.NewRecorder()
	utils.Router.ServeHTTP(res, req)

	responseData, _ := ioutil.ReadAll(res.Body)
	return responseData, res
}

func TestGetTweetById(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/id/1581295611013320706", nil)

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

	result := utils.UnmarshalToJson[[]utils.Tweet](response)
	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetTweetsByHashtag(t *testing.T) {
	initApiTest()
	sendTestRequest("GET", "/tweet/id/1598367424365137934", nil)
	response, res := sendTestRequest("GET", "/tweet/hashtag/estremamentespecifico/date/2022-11-25T20:39:08.913Z/2022-12-02T22:59:59.914Z", nil)

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

	result := utils.UnmarshalToJson[[]utils.Tweet](response)
	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestGetTweetsByUsername(t *testing.T) {
	initApiTest()
	sendTestRequest("GET", "/tweet/id/1598367424365137934", nil)
	response, res := sendTestRequest("GET", "/tweet/user/team7test/date/2022-11-29T00:00:00.000Z/2022-12-30T00:00:00.000Z", nil)

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

	result := utils.UnmarshalToJson[[]utils.Tweet](response)
	tmpMock := utils.UnmarshalToJson[[]utils.Tweet]([]byte(mockResponse))

	assert.Equal(t, http.StatusOK, res.Code)
	assert.Equal(t, tmpMock, result)
}

func TestDateTime(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/hashtag/bella/date/2022-11-25T20:39:08.913aZ/2022-12-02T22:59:59.914Z", nil)

	mockResponse := `{"message":"start date format wrong","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)

	response, res = sendTestRequest("GET", "/tweet/hashtag/bella/date/2022-11-25T20:39:08.913Z/2022-12-02T22:5A9:59.914Z", nil)

	mockResponse = `{"message":"end date format wrong","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)
}

func TestInvalidMode(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/tweet/hasahtag/bella/date/2022-11-25T20:39:08.913Z/2022-12-02T22:59:59.914Z", nil)

	mockResponse := `{"message":"invalid mode: hashtag, keyword, user and id permitted","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), mockResponse)
}

func TestGetUserInfo(t *testing.T) {
	initApiTest()
	response, res := sendTestRequest("GET", "/user/aodawo", nil)

	tmpMock := `{"message":"Problem fetching the user","success":false}`

	assert.Equal(t, http.StatusBadRequest, res.Code)
	assert.Equal(t, string(response), tmpMock)

	//TODO: test user esistente
}

// func TestLoadMore(t *testing.T) {
// 	initApiTest()
// 	var response []byte

// 	_, res := sendTestRequest("GET", "/tweet/user/giorgiameloni/date/2022-12-03T10:11:05.787Z/2022-12-10T10:11:05.787Z", nil)
// 	assert.Equal(t, http.StatusOK, res.Code)

// 	response, res = sendTestRequest("GET", "/tweet/loadNextPage", nil)

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

// 	result := utils.UnmarshalToJson[[]utils.Tweet](response)
// 	mockResult := utils.UnmarshalToJson[[]utils.Tweet]([]byte(tmpMock))

// 	assert.Equal(t, http.StatusOK, res.Code)
// 	assert.Equal(t, mockResult, result)
// }
