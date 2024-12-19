import React from 'react'
import Header from '../../Header/Header'
import PageTitle from '../../PageTitle/PageTitle'
import UsersTable from './UsersTable/UsersTable'

const Reports = () => {
  return (
    <div>
        <Header />
        <div className="header-body-wrapper">
          <PageTitle pagedata='Reports' />
          <UsersTable />
        </div>
    </div>
  )
}

export default Reports
