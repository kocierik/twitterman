import React from 'react'
import BarGraph from '../components/chart/BarGraph'
import PieGraph from '../components/chart/PieGraph'
import WordCloud from '../components/chart/WordCloud'

const Chart = () => {
  return (
    <div className="flex flex-col  md:flex-row gap-5 flex-1 p-5 justify-center">
      <div
        href="#"
        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sentiment analysis
        </h5>
        <div className="flex flex-1 justify-center">
          <PieGraph />
        </div>
      </div>
      <div
        href="#"
        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          BarGraph analysis
        </h5>
        <div className="flex flex-1 justify-center">
          <BarGraph />
        </div>
      </div>
      <div
        href="#"
        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Word Cloud
        </h5>
        <div className="flex flex-1 justify-center p-5">
          <WordCloud />
        </div>
      </div>
    </div>
  )
}

export default Chart
