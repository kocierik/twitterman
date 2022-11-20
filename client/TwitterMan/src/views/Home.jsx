import React, { useState } from 'react'
import Maps from '../components/home/Maps'
import SearchBar from '../components/home/SearchBar'
import TweetCard from '../components/home/TweetCard'
import Charts from '../components/home/Charts'
import * as Const from '../utils'


const Home = () => {
  const [tweetsData, setTweetsData] = useState([])

  const searchTweets = async (selectValue, textValue, formattedDates) => {
    try {
      const url = Const.stringFormat(Const.SERVER_URL + selectValue, textValue + formattedDates)
      console.log(url)
      await fetch(url)
        .then(async (response) =>
          setTweetsData(await response.json().catch((e) => console.log(e)))
        )
        .catch((e) => console.log(e))
    } catch (e) {
      console.log(e)
    }
  }

  const loadMore = async () => {
    try {
      const url = Const.SERVER_URL + Const.TWEET_LOAD
      await fetch(url)
        .then(async (response) => {
          await response.json().then((json) => {
            if (json) setTweetsData((last) => [...last, ...json])
          })
        })
        .catch((e) => console.log(e))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="700"
        className="App min-h-full px-5 dark:bg-gray-900 pt-16 pb-16  flex flex-col	gap-5"
      >
        <div className="flex justify-center">
          <SearchBar searchTweets={searchTweets}/>
        </div>
        <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
          {tweetsData?.map((tweet, i) => {
            return <TweetCard data={tweet} key={i} />
          })}
        </div>
        <div className="flex  justify-center">
          {tweetsData?.length && (
            <button
              onClick={loadMore}
              type="button"
              data-aos="zoom-in"
              data-aos-duration="500"
              className="text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Load more
            </button>
          )}
        </div>
      </div>
      {tweetsData?.length && <div className="p-10 dark:bg-gray-900">
        <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
          Charts
        </div>
        <Charts tweetsData={tweetsData} />
      </div>}
      {tweetsData?.length && <div className="p-10 dark:bg-gray-900">
        <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
          TweetMaps
        </div>
        <Maps tweetsData={tweetsData} />
      </div>}
    </>
  )
}

export default Home
