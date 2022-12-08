export const SERVER_URL = 'http://localhost:8080'
export const TWEET_KEYWORD = '/tweet/{0}/keyword/{1}'
export const TWEET_HASHTAG = '/tweet/{0}/hashtag/{1}'
export const TWEET_USERNAME = '/tweet/{0}/user/{1}'
export const TWEET_ID = '/tweet/{0}/id/{1}'
export const TWEET_LOAD = '/tweet/{0}/loadNextPage'
export const TWEET_SAVE = '/user/{0}/folder/{1}/add/{2}'
// export const TWEET_SAVE = '/user/:name/folder/:folder/add/:id'

const stringFormat = (str, ...args) =>
  str.replace(/{(\d+)}/g, (match, number) =>
    typeof args[number] != 'undefined' ? args[number] : match
  )

const fetchSentiment = async (tweets) => {
  let tweetsWithSentiment = []
  try {
    var data = []
    for (const k in tweets) {
      data.push({ text: tweets[k].content })
    }
    let res = await fetch('http://localhost:5556/sentiment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    res = await res.json()
    tweetsWithSentiment = tweets?.map((v, k) => {
      v.sentiment = res['sentiments'][k]
      return v
    })
  } catch (e) {
    alert(e)
  }
  return tweetsWithSentiment
}

const searchTweets = async (
  selectValue,
  textValue,
  formattedDates,
  rfp,
  setTweetsData,
  setTweetsDataFiltered
) => {
  try {
    const url = stringFormat(
      SERVER_URL + selectValue,
      rfp,
      textValue + formattedDates
    )
    let res = await fetch(url)
    res = await res.json()
    if (res) {
      res.forEach((tw) => {
        var s = tw.content + ' '
        tw.content = s.replace(/(http|https)(.*?)( )/g, '')
      })

      res = await fetchSentiment(res)
      setTweetsData(res)
      setTweetsDataFiltered(res)
    } else {
      alert('Tweets not found')
    }
  } catch (e) {
    console.log(e)
  }
}

export { stringFormat, searchTweets, fetchSentiment }
