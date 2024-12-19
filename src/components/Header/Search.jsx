import React from 'react'
import './Search.css'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
    return (
        <div className='search-bar'>
            <form className='search-form d-flex align-items-center' method='POST' action='#'>
                <input type='text' name='query' placeholder='Search...' title='Enter Search Keyword.'/>
                <button type='submit' title='Search'>
                    <FiSearch className='search-icon' />
                </button>
            </form>
        </div>
    )
}

export default Search
