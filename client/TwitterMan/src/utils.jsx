export const SERVER_URL = 'http://localhost:8080'
export const TWEET_KEYWORD = '/tweet/keyword/{0}'
export const TWEET_HASHTAG = '/tweet/hashtag/{0}'
export const TWEET_USERNAME = '/tweet/user/{0}'
export const TWEET_ID = '/tweet/id/{0}'
export const TWEET_LOAD = '/tweet/loadNextPage'

const stringFormat = (str, ...args) =>
  str.replace(/{(\d+)}/g, (match, number) =>
    typeof args[number] != 'undefined' ? args[number] : match
  )

const searchTweets = async (selectValue, textValue, formattedDates) => {
   console.log(selectValue, textValue, formattedDates);
  try {
    const url = stringFormat(SERVER_URL + selectValue, textValue + formattedDates)
    let res = await fetch(url)
    res = await res.json()
    return res
  } catch (e) {
    console.log(e)
    return []
  }
}

export {stringFormat, searchTweets}