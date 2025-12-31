import React from 'react'
import Fotter from '../utility/fotter'
import Nav from '../utility/nav'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (

    <>
      <Nav />
      <Outlet />
    <Fotter />

    </>
  )
}

export default Layout