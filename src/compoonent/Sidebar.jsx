import React, { Children } from 'react'
import { FaUserAlt, FaSearch, FaHome, FaNewspaper, FaList, FaBell } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { TbLogout } from "react-icons/tb"
import { GiButterfly } from "react-icons/gi"

const navBar = ({ children }) => {


  return (
    <div className='container' id='con'>
      <div className="sidebar">
        <div className="top_section">
          <div className="logo" id='h'>
            <GiButterfly />
          </div>
          <div className="search" id='h'>
            <FaSearch />
          </div>
        </div>
       <div className="m">


       <div className="home" id='a'>
          <NavLink to={'/'} className='link' >
            <FaHome />
          </NavLink>

        </div>
        <div className="news " id='a'><FaNewspaper /></div>
        <div className="list" id='a'><FaList /></div>
        <div className="user" id='a'><FaUserAlt /></div>

       </div>

        <div className="both" >
          <div className="note" id='h'>
            <FaBell />
          </div>
          <div className="logout" id='h'>
            <TbLogout />
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default navBar