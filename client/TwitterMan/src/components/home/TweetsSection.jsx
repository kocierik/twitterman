import React, { useState, useEffect } from 'react'
import TweetCard from './TweetCard'

const TweetsSection = ({ tweetsDataFiltered }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [rfp, setRfp] = useState(15)

  const currentTweets = tweetsDataFiltered.slice(
    rfp * (currentPage - 1),
    rfp * currentPage
  )

  const changePage = async (newPage) => {
    if (Math.ceil(tweetsDataFiltered.length / rfp) < newPage)
      alert("No more tweets to show in the date range selected")
    else
      setCurrentPage(newPage)
  }

  const getPageNumberItems = () => {
    let items = []
    for (
      let page = currentPage - 1 || 1;
      page <= currentPage + 1 || page <= 3;
      page++
    ) {
      items.push(
        <li
          className={
            page === currentPage
              ? 'relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white shadow-md focus:shadow-md'
              : 'relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-slate-200 focus:shadow-none'
          }
        >
          {' '}
          {page}{' '}
        </li>
      )
    }
    return items
  }

  const changeRfp = (event) => {
    let rfp = event.target.value
    setCurrentPage(Math.min(currentPage, Math.ceil(tweetsDataFiltered.length / rfp)))
    setRfp(rfp)
  }

  useEffect(() => {
    setCurrentPage(Math.min(currentPage, Math.ceil(tweetsDataFiltered.length / rfp)))
  }, [tweetsDataFiltered])

  return (
    <div>
      <div className="box-border  m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
        {currentTweets?.map((tweet) => <TweetCard data={tweet} key={tweet.id} /> )}
      </div>

      <div className="flex justify-center align-baseline mt-5">
        <nav
          className="mr-2 border border-slate-500 rounded-lg "
          aria-label="Page navigation"
        >
          <ul className="flex list-style-none">
            <li>
              <a
                className={`relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded ${currentPage === 1
                  ? 'pointer-events-none text-gray-500'
                  : ' text-slate-200'
                  } hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                onClick={() => changePage(currentPage - 1)}
              >
                Previous
              </a>
            </li>
            {getPageNumberItems()}
            <li>
              <a
                className="relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-slate-200 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                onClick={() => changePage(currentPage + 1)}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
        <select
          id="rfp"
          onChange={changeRfp}
          className="w-12 max-w-xs text-sm text-white text-center rounded-lg bg-gray-500/60 focus:border-blue-600 focus:outline-none"
        >
          <option value="15" selected>
            15
          </option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  )
}

export default TweetsSection
