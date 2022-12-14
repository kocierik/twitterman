export const SERVER_URL = 'http://twitterman-backend:8080'
export const SENTIMENT_URL = 'http://twitterman-sentiment:5176'
export const TWEET_KEYWORD = '/tweet/{0}/keyword/{1}'
export const TWEET_HASHTAG = '/tweet/{0}/hashtag/{1}'
export const TWEET_USERNAME = '/tweet/{0}/user/{1}'
export const TWEET_ID = '/tweet/{0}/id/{1}'
export const TWEET_LOAD = '/tweet/{0}/loadNextPage'

export const stringFormat = (str, ...args) =>
  str.replace(/{(\d+)}/g, (match, number) =>
    typeof args[number] != 'undefined' ? args[number] : match
  )
