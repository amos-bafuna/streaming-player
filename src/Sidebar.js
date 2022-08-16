import React from 'react'
import Logo from '../src/images/PlayerLogo.png'
import SidebarOption from './SidebarOption'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
        <img src={Logo} alt="Logo" className='sidebar_logo' />

        <SidebarOption title="Home" />
        <SidebarOption title="Search" />
        <SidebarOption title="Favorite" />
    </div>
  )
}

export default Sidebar