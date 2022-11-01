export const SERVER_URL = 'http://localhost:8080'
export const TWEET_HASHTAG = '/tweet/hashtag/{0}'
export const TWEET_USERNAME = '/user/{0}/tweets'
export const TWEET_ID = '/tweet/id/{0}'

export const stringFormat = (str, ...args) =>
  str.replace(/{(\d+)}/g, (match, number) =>
    typeof args[number] != 'undefined' ? args[number] : match
  )
