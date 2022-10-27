import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
