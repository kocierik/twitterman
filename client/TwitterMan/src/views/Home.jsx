import React, { useState } from 'react'
import { SERVER_URL, stringFormat } from '../utils'
import SearchBar from '../components/home/SearchBar'
import TweetCard from '../components/home/Tweet'
import * as Const from '../utils'
import { useEffect } from 'react'

const Home = () => {
  const [TweetsData, setTweetsData] = useState([])
  const [textValue, setTextValue] = useState('')

  const [selectValue, setSelectValue] = useState(Const.TWEET_USERNAME)

  async function searchTweets() {
    try {
      const url = stringFormat(SERVER_URL + selectValue, textValue)
      await fetch(url)
        .then(async (response) =>
          setTweetsData(await response.json().catch((e) => console.log(e)))
        )
        .catch((e) => console.log(e))
    } catch (e) {
      console.log(e)
    }
  }

  async function loadMore() {
    try {

      const url = SERVER_URL + "/tweet/loadLastQuery"
      await fetch(url)
        .then(async (response) => {
          await response.json().then((json) => {
            if(json)
              setTweetsData(last => [...last, ...json])
          })
        })
        .catch((e) => console.log(e))
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      className="App min-h-full		px-5 dark:bg-gray-900 pt-16 pb-16  flex flex-col	gap-5"
    >
      <div className="flex justify-center">
        <SearchBar
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          textValue={textValue}
          setTextValue={setTextValue}
          searchTweets={searchTweets}
        />
      </div>
      <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {TweetsData.map((tweet, i) => {
          return <TweetCard data={tweet} key={i} />
        })}
      </div>
      <div className=''>
        <button
          onClick={loadMore}
          type="button" className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Load more</button>
      </div>
    </div>
  )
}

export default Home
