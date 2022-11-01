import React, { useState, useEffect, useRef } from 'react'
import { SERVER_URL, stringFormat } from '../utils'
import SearchBar from '../components/SearchBar'
import TweetCard from '../components/Tweet'

const Home = () => {
  const [TweetsData, setTweetsData] = useState([])
  const textValue = useRef('')
  const [selectValue, setSelectValue] = useState('username')

  async function searchTweetUser() {
    try {
      fetch(
        stringFormat(
          SERVER_URL + selectValue.target.value,
          textValue.current.value
        )
      ).then(async (response) => setTweetsData(await response.json()))
      console.log(TweetsData)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="700"
      className="App dark:bg-gray-900 pt-16 pb-16  flex flex-col	gap-5"
    >
      <div className="flex justify-center">
        <SearchBar
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          textValue={textValue}
          searchTweetUser={searchTweetUser}
        />
      </div>
      <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {TweetsData?.map((tweet, i) => {
          return <TweetCard data={tweet} key={i} />
        })}
      </div>
    </div>
  )
}

export default Home
