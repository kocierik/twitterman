import React from 'react'
import * as Const from '../../utils'
import Data from "../Data"
import '../format-style.css'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

const SearchBar = (props) => {
  return (
    <form
      style={{ width: '100vh' }}
      className="flex mb-5"
      onSubmit={(event) => {
        event.preventDefault()
        props.searchTweets()
      }}
    >
      <select
        onChange={(choice) => {
          console.log(props.selectValue)
          props.setSelectValue(choice.target.value)
        }}
        className="rounded-xl	mr-2 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200  focus:outline-none  dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600"
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
          className="block p-2.5 rounded-xl	indent-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search on twitterMan..."
          required
        /> 
        <Data /> 
            <button
            type="submit"
            className="hover:scale-105 duration-300 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2"
            id="btn"
            >
              <b>Search</b>
            </button>
      
       
      </div>
    </form>
  )
}

export default SearchBar
