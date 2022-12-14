export const SERVER_URL = 'http://localhost:8080'
export const TWEET_KEYWORD = '/tweet/keyword/{0}'
export const TWEET_HASHTAG = '/tweet/hashtag/{0}'
export const TWEET_USERNAME = '/tweet/user/{0}'
export const TWEET_ID = '/tweet/id/{0}'
export const TWEET_LOAD = '/tweet/loadNextPage'
export const TWEET_SAVE = '/user/folder/{0}/add/{1}'
export const USER_INFO = '/user'
export const USER_DELETE = '/user/modify/delete'
export const USER_MODIFY = '/user/modify/{0}'
export const TWEET_FOLDER = '/user/folders/'
export const CREATE_FOLDER = '/user/folder/create/{0}'
export const DELETE_FOLDER = '/user/folder/delete/{0}'
export const REMOVE_TWEET = '/user/folder/{0}/{1}'

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
  setTweetsData,
  setTweetsDataFiltered
) => {
  try {
    const url = stringFormat(
      SERVER_URL + selectValue,
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

const getUserInfo = async (setUserInfo) => {
  let res = await fetch(SERVER_URL + USER_INFO, {
    credentials: 'include',
  })
  res = await res.json()
  setUserInfo(res)
}

const isLoggedIn = async () => {
  try {
    let res = await fetch(`${SERVER_URL}/isLogged`, {
      credentials: 'include',
    })
    res = await res.json()
    if (res.success) {
      return true
    } else {
      console.log('Login not possible: ' + res.message)
      return false
    }
  } catch (err) {
    alert('Error when testing login: ' + err)
  }
  return false
}

const logout = async () => {
  try {
    await fetch(`${SERVER_URL}/logout`, {
      credentials: 'include',
    })
  } catch (err) {
    alert('error when logging out: ' + err)
  }
  window.location.reload()
}

export {
  stringFormat,
  searchTweets,
  fetchSentiment,
  isLoggedIn,
  getUserInfo,
  logout,
}
