import React from 'react'
import { ComplexNavbar } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { MultiLevelSidebar } from '../components/Sidebar'

const Layout = () => {
  return (
    <div>
      <ComplexNavbar />
      <div className='flex'>
      <MultiLevelSidebar />
      <Outlet />
      </div>
    </div>
  )
}

export default Layout