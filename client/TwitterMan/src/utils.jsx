export const SERVER_URL = 'http://localhost:8080'
export const TWEET_KEYWORD = '/tweet/keyword/{0}'
export const TWEET_HASHTAG = '/tweet/hashtag/{0}'
export const TWEET_USERNAME = '/tweet/user/{0}'
export const TWEET_ID = '/tweet/id/{0}'
export const TWEET_LOAD = '/tweet/loadNextPage'
export const DATE = '/date/11-13-2022/11-14-2022'

export const stringFormat = (str, ...args) =>
  str.replace(/{(\d+)}/g, (match, number) =>
    typeof args[number] != 'undefined' ? args[number] : match
  )
