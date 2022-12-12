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
import Eredita from './views/Eredita'
import { useEffect, useState } from 'react'
import { isLoggedIn } from './utils'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  async function init() {
    setIsLogged(await isLoggedIn())
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <div className="h-full dark:bg-gray-900">
        <Navbar isLogged={isLogged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/register" element={<Register setIsLogged={setIsLogged} />} />
          <Route path="/tweetMaps/:id" element={<TweetMaps />} />
          <Route path="/eredita" element={<Eredita />} />
          <Route path="/saved" element={<SavedTweets />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
export default App
