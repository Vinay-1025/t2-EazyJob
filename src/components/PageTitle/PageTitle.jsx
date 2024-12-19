import React from 'react'
import './PageTitle.css'

const PageTitle = ( {pagedata} ) => {
    return (
        <div className='pagetitle'>
            <h1>{pagedata}</h1>
            <nav>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <a href="/">
                            <i className='bi bi-house-door'></i>
                        </a>
                    </li>
                    <li className='breadcrumb-item active'>{pagedata}</li>
                </ol>
            </nav>
        </div>
    )
}

export default PageTitle
