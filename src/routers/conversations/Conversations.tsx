import { MdOutlineDragHandle } from 'react-icons/md'
import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import React from 'react'

import CardUser from '../../components/cardUser/CardUser'
import './index.css'

const Conversations = () => {
  return (
    <div>
      <CardUser />
      <div className="icon_link">
        <div className="box">
          <Link to='/contacts'><MdOutlineDragHandle/></Link>
        </div>
      </div>
    </div>
  )
}

export default Conversations