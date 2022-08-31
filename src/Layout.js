import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

const Layout = ({logo}) => {
  return (
    <div className='App'>
      <Header />
      <Nav logo={logo} />
      <Outlet />
      <Footer logo={logo} />
    </div>
    
  )
}

export default Layout