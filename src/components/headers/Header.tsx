import React from 'react'

import { IoCameraOutline, IoEllipsisVerticalSharp, IoSearchOutline } from "react-icons/io5";
import NavBar from '../navBar/navBar';

import './index.css';

const Header = () => {
  return (
    <div className="conteiner">
        <div className='header'>
            <h1>WhatsApp</h1>
            <div className='icons'>
                <IoCameraOutline />
                <IoSearchOutline />
                <IoEllipsisVerticalSharp />
            </div>
        </div>
        <NavBar /> 
    </div>
    
  )
}

export default Header