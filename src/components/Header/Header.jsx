import React from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {} from 'react-icons/bi';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <header id="header" className='header fixed-top d-flex align-items-center'>
            <Logo />
            <Search />
            <Nav />
        </header>
    )
}

export default Header
