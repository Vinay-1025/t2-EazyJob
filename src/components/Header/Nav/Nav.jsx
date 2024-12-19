import React from 'react'
import NavAvatar from './NavAvatar'

const Nav = () => {
    return (
        <nav className='header-nav ms-auto'>
            <ul className='d-flex align-items-center'>
                <NavAvatar />
            </ul>
        </nav>
    )
}

export default Nav
