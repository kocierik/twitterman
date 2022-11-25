import React, { useState, useEffect } from 'react'
import Maps from '../components/home/Maps'
import SearchBar from '../components/home/SearchBar'
import TweetCard from '../components/home/TweetCard'
import Charts from '../components/home/Charts'
import * as Const from '../utils'

const Home = () => {
  const [tweetsData, setTweetsData] = useState([])
  const [tweetsDataFilter, setTweetsDataFilter] = useState([])
  const [sentimentIcon, setSentimentIcon] = useState(null)
  const [sliderValue, setSliderValue] = useState(null)
  const setSentiment = async (tweets) => {
    let tweetsWithSentiment = []
    try {
      var data = []
      for (const k in tweets) {
        data.push({ text: tweets[k].content })
      }
      let res = await fetch('http://localhost:55555/sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      res = await res.json()
      console.log(res)
      tweetsWithSentiment = tweets?.map((v, k) => {
        v.sentiment = res['sentiments'][k]
        return v
      })
    } catch (e) {
      alert(e)
    }
    return tweetsWithSentiment
  }

  const searchTweets = async (selectValue, textValue, formattedDates) => {
    try {
      const url = Const.stringFormat(
        Const.SERVER_URL + selectValue,
        textValue + formattedDates
      )
      let res = await fetch(url)
      console.log(res)
      res = await res.json()
      res = await setSentiment(res)
      setTweetsData(res)
      setTweetsDataFilter(res)
    } catch (e) {
      console.log(e)
    }
  }

  const filterSentiment = () => {
    if (sentimentIcon) {
      const filterSentimentData = tweetsData.filter(item => item.sentiment == sentimentIcon)
      setTweetsDataFilter(filterSentimentData)
    }
  }

  useEffect(() => {
    filterSentiment()
    console.log('ok')
  }, [sliderValue, tweetsData])


  const loadMore = async () => {
    try {
      const url = Const.SERVER_URL + Const.TWEET_LOAD
      let res = await fetch(url)
      res = await res.json()
      let sentimentRes = await setSentiment(res)
      if (sentimentRes) {
        setTweetsData((last) => [...last, ...sentimentRes])
        console.log('set')
      }
      console.log('finito')
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
          <SearchBar searchTweets={searchTweets} sliderValue={sliderValue} setSliderValue={setSliderValue} sentimentIcon={sentimentIcon} setSentimentIcon={setSentimentIcon} />
        </div>
        <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
          {tweetsDataFilter?.map((tweet, i) => {
            return <TweetCard data={tweet} key={i} />
          })}
        </div>
        <div className="flex  justify-center">
          {tweetsData?.length > 0 && (
            <button
              onClick={loadMore}
              type="button"
              className="text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Load more
            </button>
          )}
        </div>
      </div>
      {tweetsData?.length > 0 && (
        <div className="p-10 dark:bg-gray-900">
          <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
            Charts
          </div>
          <Charts tweetsData={tweetsData} />
        </div>
      )}
      {tweetsData?.length > 0 && (
        <div className="p-10 dark:bg-gray-900">
          <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
            TweetMaps
          </div>
          <Maps tweetsData={tweetsData} />
        </div>
      )}
    </>
  )
}

export default Home
