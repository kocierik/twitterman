import React from 'react'
import Home from './views/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div>
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
