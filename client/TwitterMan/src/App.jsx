import React, { useState, useEffect } from 'react'
import Home from './views/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/views/Login'
import Register from '../src/views/Register'
import Footer from './components/Footer'
import TweetMaps from './views/TweetMaps'
import SavedTweets from './views/SavedTweets'
// import Eredita from './views/Eredita'
import Profile from './views/Profile'
import * as Const from './utils'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    Const.checkIfLogged(setIsLogged)
  }, [isLogged])

  return (
    <>
      <div className="h-full dark:bg-gray-900">
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tweetMaps/:id" element={<TweetMaps />} />
          <Route path="/saved" element={<SavedTweets />} />
          {/* <Route path="/eredita" element={<Eredita />} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
export default App
