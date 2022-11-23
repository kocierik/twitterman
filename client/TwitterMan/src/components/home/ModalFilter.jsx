import React from 'react'
import { useState } from 'react'
import * as Const from '../../utils'
import Data from '../Data'
const ModalFilter = (props) => {
  const [sentimentIcon, setSentimentIcon] = useState('😐')

  const evaluateRangeInput = (value) => {
    props.setSliderValue(value)
    if (value > 70) {
      setSentimentIcon('😀')
      return '😀'
    } else if (value > 40) {
      setSentimentIcon('😐')
      return '😐'
    } else {
      setSentimentIcon('🙁')
      return '🙁'
    }
  }

  return (
    <>
      <div
        data-aos="fade-in"
        className=" flex text-white   transition duration-150 ease-in-out z-10 absolute top-20 right-0 bottom-0 left-0"
      >
        <div
          data-aos="zoom-in"
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div
            data-aos="zoom-in"
            className="relative py-8 px-5 md:px-10 bg-gray-800 shadow-md rounded border border-gray-400"
          >
            <div className="w-full flex justify-start text-white-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white-800 font-lg font-bold tracking-normal leading-tight mb-4">
                Filters
              </h1>
              <label
                htmlFor="name"
                className="text-white-800 flex flex-col mb-3 text-sm font-bold leading-tight tracking-normal"
              >
                Select Filter
              </label>
            </div>
            <select
              onChange={(choice) => {
                props.setSelectValue(choice.target.value)
              }}
              className="rounded-xl m3-5 cursor-pointer	mr-2 h-10 flex-shrink-0 z-10 inline-flex w-full items-center py-2.5 px-4 text-sm font-medium  text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg   focus:outline-none  dark:bg-gray-700   dark:text-white dark:border-gray-600"
            >
              <option value={Const.TWEET_USERNAME}>username</option>
              <option value={Const.TWEET_HASHTAG}>hashtag</option>
              <option value={Const.TWEET_KEYWORD}>keyword</option>
            </select>
            <div className="rounded-xl mt-5	mr-2 mb-5  z-10 w-full items-center px-4 text-sm font-medium  text-gray-900 bg-gray-100 border border-gray-300     dark:bg-gray-700   dark:text-white dark:border-gray-600">
              <label
                htmlFor="Range date"
                className="text-white-800 mt-5  flex flex-col  text-sm font-bold leading-tight tracking-normal"
              >
                Select a range date
              </label>
              <div className="flex pb-5">
                <Data
                  startDate={props.startDate}
                  setStartDate={props.setStartDate}
                  endDate={props.endDate}
                  setEndDate={props.setEndDate}
                />
              </div>
            </div>
            <div className="rounded-xl m3-5	mr-2 mb-5  z-10 w-full items-center py-2.5 px-4 text-sm font-medium  text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg     dark:bg-gray-700   dark:text-white dark:border-gray-600">
              <label
                htmlFor="default-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Sentiment Range:{' '}
                <span className="text-2xl ml-3">{sentimentIcon}</span>
              </label>
              <input
                id="default-range"
                type="range"
                onChange={(value) => evaluateRangeInput(value.target.value)}
                className="w-full h-2 mb-5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
              />
            </div>
            <div className="flex items-center justify-start w-full">
              <button
                onClick={() => props.setShowModal(false)}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
              >
                Submit
              </button>
            </div>
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-white-400 hover:text-white-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onClick={() => props.setShowModal(!props.showModal)}
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalFilter
