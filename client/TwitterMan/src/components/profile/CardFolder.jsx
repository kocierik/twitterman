import React from 'react'
import { stringFormat } from '../../utils'
import TweetCard from '../home/TweetCard'
import * as Const from '../../utils'
import { useEffect } from 'react'
const CardFolder = ({ titleFolder, tweets }) => {
  const getTweets = async () => {
    if (tweets) {
      let data = []
      // console.log(tweets)
      tweets?.map((tweet) => {
        data.push(tweet)
      })
      console.log(data)
      let res = await fetch(stringFormat(Const.TWEET_ID, '1600844293597368320'))
      res = await res.json()
      console.log(res)
      //
      // tweets?.map(async (tweet) => {
      //   let res = await fetch(stringFormat(Const.TWEET_ID, tweet))
      //   res = await res.json()
      //   console.log(res)
      //   data.push(res)
      // })
      // console.log(data)
    }
  }

  useEffect(() => {
    getTweets()
  }, [tweets])

  return (
    <div className="flex flex-1">
      <div className="flex">{titleFolder}</div>
      <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {tweets?.map((tweet, i) => {
          return (
            <div key={i} className="flex flex-col">
              {/* <TweetCard data={getTweets(tweet)} /> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardFolder
