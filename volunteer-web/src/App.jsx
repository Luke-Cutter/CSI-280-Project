import { useState } from 'react'

// imports of pages
import Home from './pages/Home'
import About from './pages/About'
import Opportunities from './pages/Opportunities'

import { Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
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
      </Routes>
    </>
  )
}

export default App
