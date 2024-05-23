import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const HeaderLayout = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default HeaderLayout;