import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Logo from '../Logo/Logo'
import NavLinks from '../NavLinks/NavLinks'


const Navbar = () => {
    return (
        <header id="header" className='l-header fixed-top d-flex align-items-center justify-content-between'>
            <Logo />
            <NavLinks />
        </header>
    )
}

export default Navbar
