import { useState } from 'react'

// imports of pages
import Home from './pages/Home'
import About from './pages/About'
import Opportunities from './pages/Opportunities'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup'

import { Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar className="navbar"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
