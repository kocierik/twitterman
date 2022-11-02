import React from 'react'
import * as Const from '../../utils'

const SearchBar = (props) => {
  return (
    <form
      style={{ width: '100vh' }}
      className="flex"
      onSubmit={(event) => {
        event.preventDefault()
        props.searchTweets()
      }}
    >
      <select
        onChange={(choice) => {
          props.setSelectValue(choice.target.value)
        }}
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200  focus:outline-none  dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600"
      >
        <option value={Const.TWEET_USERNAME}>username</option>
        <option value={Const.TWEET_HASHTAG}>hashtag</option>
        <option value={Const.TWEET_KEYWORD}>keyword</option>
        {/* <option value={TWEET_ID}>keyword</option> */}{' '}
        {/* TODO: ADD MORE OPTIONS */}
      </select>
      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          onChange={(e) => {
            props.setTextValue(e.target.value)
          }}
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search on twitterMan..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
