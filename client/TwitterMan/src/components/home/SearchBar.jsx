import React, { useState }from 'react'
import * as Const from '../../utils'
import Data from "../Data"
import '../format-style.css'
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

const SearchBar = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form
      style={{ width: '100vh' }}
      className="flex mb-5"
      onSubmit={(event) => {
        event.preventDefault()
        props.searchTweets()
      }}
    >
      <div id="elements">
        <select
          style={{height: '2.7rem'}}
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
        <div class="flex justify-center">
          <input 
            id="checkbox" 
            type="checkbox" 
            value="" 
            checked={isChecked}
            onChange={handleOnChange}
            class="mt-1 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox" class="mt-1 ml-2 text-sm font-medium text-white">Add date</label>
        </div>
      </div>
      
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

        <If condition={isChecked}>
          <Then>
            <Data /> 
            <button
            type="submit"
            className="hover:scale-105 duration-300 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2"
            id="btn"
            >
              <b>Search</b>
            </button>
          </Then>
          <Else>
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
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </Else>
        </If>
      </div>
    </form>
  )
}

export default SearchBar
