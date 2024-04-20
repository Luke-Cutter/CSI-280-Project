import * as React from 'react'

// imports of pages
import Home from './pages/Home'
import About from './pages/About'
import Opportunities from './pages/Opportunities'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup'

import Events from './pages/Events'
import Donate from './pages/Donate'
import Gallery from './pages/Gallery'
import MissionStatement from './pages/MissionStatement'
import EmailUs from './pages/EmailUs'
import Suggestions from './pages/Suggestions'
import Careers from './pages/Careers'
import LegalInfo from './pages/LegalInfo'
import ForgotPassword from './pages/ForgotPassword'

import CharityPage from './components/CharityPage.jsx'


import { Route, Routes, useParams } from 'react-router-dom'
import WebsiteHeader from './components/WebsiteHeader.jsx'
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx'
import WebsiteFooter from './components/WebsiteFooter.jsx'
import './App.css'


function App() {

  return (
    <>
      <WebsiteHeader />
      <ResponsiveAppBar className="navbar"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mission-statement" element={<MissionStatement />} />
        <Route path="/email-us" element={<EmailUs />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<LegalInfo />} />
        <Route path="/charity/:id" element={<CharityPage />} />
      </Routes>
      <WebsiteFooter />
    </>
  )
}

export default App
