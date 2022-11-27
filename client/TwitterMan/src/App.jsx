import React from 'react'
import Home from './views/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../src/views/Login'
import Register from '../src/views/Register'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className="h-full dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
export default App
