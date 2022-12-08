import React from 'react'
import { stringFormat } from '../../utils'
import TweetCard from '../home/TweetCard'
import * as Const from '../../utils'
import { useEffect } from 'react'
import { useState } from 'react'
const CardFolder = ({ titleFolder, tweets }) => {
  const [tweetsSaved, setTweetsSaved] = useState([])

  const getTweets = async () => {
    if (tweets) {
      tweets?.map(async (tweet) => {
        let res = await fetch(
          stringFormat(Const.SERVER_URL + Const.TWEET_ID, tweet)
        )
        res = await res.json()
        console.log(res)
        setTweetsSaved(...tweetsSaved, res)
      })
    }
  }

  useEffect(() => {
    getTweets()
  }, [tweets])

  return (
    <div className="flex flex-1 sm:flex-col">
      <div className="box-border flex flex-col    m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
          {titleFolder}
        </div>
        {tweetsSaved?.map((tweet, i) => {
          return <TweetCard key={i} data={tweet} />
        })}
      </div>
    </div>
  )
}

export default CardFolder
