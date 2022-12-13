import React, { useEffect, useState } from 'react'
import * as Const from '../../utils'
import '../format-style.css'
import ModalFilter from './ModalFilter'

const calculateDate = (isStartDate) => {
  const date = new Date()
  if (isStartDate) date.setDate(date.getDate() - 7)
  return date
}

const SearchBar = ({
  setTweetsDataFilter,
  sliderValue,
  setSliderValue,
  sentimentIcon,
  setSentimentIcon,
  setFrequencyValue,
  setTweetsData,
  rfp,
}) => {
  const [selectValue, setSelectValue] = useState(Const.TWEET_USERNAME)
  const [selectTimeString, setSelectTimeString] = useState('days')
  const [selectTimeNumber, setSelectTimeNumber] = useState(1)
  const [textValue, setTextValue] = useState('')
  const [startDate, setStartDate] = useState(calculateDate(true))
  const [endDate, setEndDate] = useState(calculateDate(false))
  const [showModal, setShowModal] = useState(false)

  const compareDates = (a, b) => {
    return (
      a.getDate() == b.getDate() &&
      a.getFullYear() == b.getFullYear() &&
      a.getMonth() == b.getMonth()
    )
  }
  const formattedData = () => {
    let today = new Date()
    if (!compareDates(today, endDate)) endDate.setHours(23, 59, 59)

    return `/date/${startDate.toISOString()}/${endDate.toISOString()}`
  }

  const resetFilter = () => {
    setSentimentIcon(null)
    setSelectValue(Const.TWEET_USERNAME)
    setStartDate(new Date(calculateDate(true)))
    setEndDate(new Date(calculateDate(false)))
    // setTweetsDataFilter(tweetsData)
    // props.setShowModal(false)
  }

  useEffect(() => {
    if (selectTimeNumber) {
      var freq = selectTimeNumber
      // convert in minutes because yes
      if (selectTimeString === 'days') {
        freq *= 24 * 60
      } else if (selectTimeString === 'hours') {
        freq *= 60
      } else if (selectTimeString === 'minutes') {
      } else {
        freq = 1440 // one day
      }
      setFrequencyValue(freq)
    }
  }, [selectTimeNumber])

  return (
    <form
      style={{ width: '100vh' }}
      className="flex mb-5"
      onSubmit={async (event) => {
        event.preventDefault()
        Const.searchTweets(
          selectValue,
          textValue,
          formattedData(),
          rfp,
          setTweetsData,
          setTweetsDataFilter
        )
      }}
    >
      <div id="elements">
        <div
          onClick={() => setShowModal(!showModal)}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-200 to-blue-800 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-green-200 focus:ring-green-800"
        >
          <span className="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Filters
          </span>
        </div>
      </div>
      {showModal && (
        <ModalFilter
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          selectTimeString={selectTimeString}
          setSelectTimeString={setSelectTimeString}
          selectTimeNumber={selectTimeNumber}
          setSelectTimeNumber={setSelectTimeNumber}
          showModal={showModal}
          setShowModal={setShowModal}
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          startDate={startDate}
          setSliderValue={setSliderValue}
          sliderValue={sliderValue}
          sentimentIcon={sentimentIcon}
          setSentimentIcon={setSentimentIcon}
          resetFilter={resetFilter}
          setTweetsDataFilter={setTweetsDataFilter}
        />
      )}

      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          onChange={(e) => {
            setTextValue(e.target.value)
          }}
          className="block p-2.5 rounded-xl	indent-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-l-gray-700  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
          placeholder="Search on twitterMan..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
