import React, { useEffect, useState } from 'react'
import * as Const from '../utils'

const SavedTweets = () => {
  const [savedTweets, setSavedTweets] = useState([])

  const getSavedTweets = async () => {
    try {
      const url = Const.stringFormat(Const.SERVER_URL + Const.TWEET_SAVE)
      let res = await fetch(url)
      res = await res.json()
      setSavedTweets(res)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getSavedTweets()
  }, [])

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-2xl font-bold p-5">
        Tweets Salvati
      </div>
      <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {savedTweets?.map((tweet, i) => {
          return <TweetCard data={tweet} key={i} />
        })}
      </div>
    </div>
  )
}

export default SavedTweets
