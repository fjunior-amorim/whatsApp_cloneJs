import React from 'react'

import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'

import './index.css'

const NavBar = () => {
  return (
    <div className='routers'>
      <Link to="/community"><FaUsers /></Link>
      <Link to="/Conversations">Conversations</Link>
      <Link to="/status" className='active_router'>status</Link>
      <Link to="/calls">calls</Link>
    </div>
  )
}

export default NavBar