import React from 'react'
import Header from '../../Header/Header'
import PageTitle from '../../PageTitle/PageTitle'
import Contents from './Contents/Contents'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='header-body-wrapper'>
                <PageTitle pagedata='Dashboard' />
                <Contents />
            </div>
        </div>
    )
}

export default Dashboard
