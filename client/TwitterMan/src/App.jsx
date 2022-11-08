import React from 'react'
import Home from './views/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/views/Login'
import Register from '../src/views/Register'
import Footer from './components/Footer'
import TweetMaps from './views/TweetMaps'
function App() {
  return (
    <>
      <div className="h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tweetMaps" element={<TweetMaps />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
export default App
