import React from 'react'
import Navbar from './Navbar'
import TweetCard from './Tweet'
function App() {
  return (
    <>
      <Navbar />
      <div className="App pt-16 pb-16 mx-5 ">
        {/** container cards */}
        <div className="box-border m-auto max-w-[75rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-3 2xl:columns-3 3xl:columns-5">
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </div>
      </div>
    </>
  )
}

export default App

//
// {/** card */}
// <div className='break-inside rounded-xl mb-4 p-6 bg-white dark:bg-slate-800 dark:text-white'>card</div>
//
