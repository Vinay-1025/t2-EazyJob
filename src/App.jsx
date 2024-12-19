import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard/Dashboard'
import Reports from './components/pages/Reports/Reports' // Import the Reports component
import LandingPage from './components/LandingPage/LandingPage'
import Payments from './components/pages/Payments/Payments'
import Settings from './components/pages/Settings/Settings'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/settings' element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  )
}

export default App
