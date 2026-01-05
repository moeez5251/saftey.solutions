import React from 'react'
import Nav from '../utility/Nav'
import Fotter from '../utility/Fott'
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