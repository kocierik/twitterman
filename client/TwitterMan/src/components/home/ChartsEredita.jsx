import React from 'react'
import BarGraph from '../chart/BarGraph'
import WordCloud from '../chart/WordCloud'

const Charts = ({ tweetsData, frequency }) => {
  return (
    <div className="flex flex-col  md:flex-row gap-5 flex-1 p-5 justify-center">
      <div
        href="#"
        className="block flex flex-col p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md  bg-gray-800 border-gray-700 "
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
          BarGraph analysis
          <hr className="my-3 mx-auto h-1 bg-gray-100 rounded border-0  bg-gray-700" />
        </h5>
        <div className="flex flex-1 justify-center items-end">
          <BarGraph tweets={tweetsData} frequency={frequency} />
        </div>
      </div>
      <div
        href="#"
        className="block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md bg-gray-800   border-gray-700 "
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
          Word Cloud
          <hr className="my-3 mx-auto h-1 bg-gray-100 rounded border-0  bg-gray-700" />
        </h5>
        <div className="flex flex-1 justify-center p-5">
          <WordCloud contentData={tweetsData.map((tweet) => tweet.content)} />
        </div>
      </div>
    </div>
  )
}

export default Charts
