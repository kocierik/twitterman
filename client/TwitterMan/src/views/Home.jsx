import React, { useState, useEffect } from 'react'
import { SERVER_URL } from '../utils'
import { TweetsData } from '../json/tweet'
import SearchBar from '../components/SearchBar'
import TweetCard from '../components/Tweet'

const Home = () => {
  // TODO: Uncomment when the api is ready

  // const [TweetsData, setTweetsData] = useState([])
  // async function init() {
  //   try {
  //     let res = await fetch(`${SERVER_URL}/tweet/hashtag/salvini`, {
  //       mode: 'no-cors',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     })
  //     console.log(res)
  //     res = await res.json()
  //     if (!res.success) {
  //       throw console.log(res.message)
  //     } else {
  //       setTweetsData(res.tweets)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      className="App dark:bg-gray-900 pt-16 pb-16  flex flex-col	gap-5"
    >
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {TweetsData.map((tweet, i) => {
          return <TweetCard data={tweet} key={i} />
        })}
      </div>
    </div>
  )
}

export default Home
