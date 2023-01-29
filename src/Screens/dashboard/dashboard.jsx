import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/footer/footer'
import Header from '../../Components/header/header'
import Navigation from '../../Components/navigation/navigation'
import Sidebar from '../../Components/sidebar/sidebar'

function Dashboard() {
    return (
        <div id='dash'>
            <Sidebar />
            <Navigation />
            <Header />
                <Outlet />
            <Footer />
        </div>
    )
}

export default Dashboard
