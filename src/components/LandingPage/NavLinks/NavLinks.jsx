import React from 'react'
import './NavLinks.css'
import { useNavigate } from 'react-router-dom'

const NavLinks = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  }

  return (
    <div className="d-flex align-items-center navlinks ">
        <p>home</p>
        <p>About</p>

        <p className="login-butn" onClick={handleLogin}>Login</p>
    </div>
  )
}

export default NavLinks
