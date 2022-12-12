import React, { useState, useEffect } from 'react'
import Maps from '../components/home/Maps'
import SearchBar from '../components/home/SearchBar'
import TweetsSection from '../components/home/TweetsSection'
import Charts from '../components/home/Charts'
import HideTweets from '../components/home/HideTweets'
import * as Const from '../utils'

const Home = () => {
  const [tweetsData, setTweetsData] = useState([])
  const [showTweets, setShowTweets] = useState(true)
  const [tweetsDataFiltered, setTweetsDataFiltered] = useState([])
  const [sentimentIcon, setSentimentIcon] = useState(null)
  const [sliderValue, setSliderValue] = useState(null)
  const [frequencyValue, setFrequencyValue] = useState(1440)
  const [rfp, setRfp] = useState(15)

  const loadMore = async () => {
    try {
      const url = Const.stringFormat(Const.SERVER_URL + Const.TWEET_LOAD, rfp)
      let res = await fetch(url)
      res = await res.json()
      if (res) {
        //let sentimentRes = await Const.fetchSentiment(res)
        setTweetsData((last) => [...last])
      } else {
        alert('No more tweets to load')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const filterSentiment = () => {
    if (sentimentIcon) {
      const filterSentimentData = tweetsData.filter(
        (item) => item.sentiment == sentimentIcon
      )
      setTweetsDataFiltered(filterSentimentData)
    } else {
      setTweetsDataFiltered(tweetsData)
    }
  }

  useEffect(() => {
    filterSentiment()
  }, [tweetsData, sentimentIcon])

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="700"
        className="App min-h-full px-5 dark:bg-gray-900 pt-16   flex flex-col  gap-5"
      >
        <div className="flex justify-center">
          <SearchBar
            // tweetsData={tweetsData}
            setTweetsDataFilter={setTweetsDataFiltered}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            sentimentIcon={sentimentIcon}
            setSentimentIcon={setSentimentIcon}
            setFrequencyValue={setFrequencyValue}
            setTweetsData={setTweetsData}
            rfp={rfp}
          />
          {tweetsDataFiltered?.length ? (
            <HideTweets showTweets={showTweets} setShowTweets={setShowTweets} />
          ) : null}
        </div>
        {showTweets && tweetsDataFiltered?.length ? (
          <TweetsSection
            tweetsDataFiltered={tweetsDataFiltered}
            loadMore={loadMore}
            rfp={rfp}
            setRfp={setRfp}
          />
        ) : null}


      </div>

      {tweetsDataFiltered?.length > 0 && (
        <div className="p-10 dark:bg-gray-900">
          <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
            Charts
          </div>
          <Charts tweetsData={tweetsDataFiltered} frequency={frequencyValue} />
        </div>
      )}
      {tweetsDataFiltered?.length > 0 && (
        <div className="p-10 dark:bg-gray-900">
          <div className="flex italic flex-1 italic dark:bg-gray-900 text-white justify-center text-3xl font-bold p-5">
            TweetMaps
          </div>
          <Maps tweetsData={tweetsDataFiltered} />
        </div>
      )}
    </>
  )
}

export default Home
