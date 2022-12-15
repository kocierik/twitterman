import React, { useEffect, useState } from 'react'
import TweetCard from '../home/TweetCard'
import * as Const from '../../utils'
import Charts from '../home/Charts'

const CardFolder = ({ titleFolder, tweets }) => {
  const [tweetsSaved, setTweetsSaved] = useState([])

  const getTweets = async () => {
    if (tweets) {
      tweets?.map(async (tweet) => {
        let res = await fetch(
          Const.stringFormat(Const.SERVER_URL + Const.TWEET_ID, tweet)
        )
        if (res) {
          res = await res.json()
          res = await Const.fetchSentiment(res)
          setTweetsSaved((last) => [...last, res[0]])
        }
      })
    }
  }

  useEffect(() => {
    getTweets()
  }, [])

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
        {titleFolder}
      </div>
      <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {tweetsSaved?.map((tweet, i) => {
          return <TweetCard key={i} data={tweet} folderName={titleFolder} />
        })}
      </div>

      {tweetsSaved?.length > 0 && <div className="p-4 dark:bg-gray-900">
          <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
            {titleFolder}'s Charts
          </div>
          <Charts tweetsData={tweetsSaved} frequency={1440} />
        </div>}
    </div>
  )
}

export default CardFolder
