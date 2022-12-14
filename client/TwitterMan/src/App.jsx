import React, { useState, useEffect } from 'react'
import Home from './views/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/views/Login'
import Register from '../src/views/Register'
import Footer from './components/Footer'
import TweetMaps from './views/TweetMaps'
import SavedTweets from './views/SavedTweets'
import Profile from './views/Profile'
import Eredita from './views/Eredita'
import Fantacitorio from './views/Fantacitorio'
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
          <Route
            path="/login"
            element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/register"
            element={<Register setIsLogged={setIsLogged} />}
          />
          <Route path="/tweetMaps/:id" element={<TweetMaps />} />
          <Route path="/eredita" element={<Eredita />} />
          <Route path="/fantacitorio" element={<Fantacitorio />} />
          <Route path="/saved" element={<SavedTweets />} />
          <Route path="/profile" element={<Profile isLogged={isLogged} />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
export default App
