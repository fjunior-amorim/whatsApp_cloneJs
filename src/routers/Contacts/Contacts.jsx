import { IoArrowBackOutline, IoEllipsisVertical, IoSearchSharp, IoQrCodeSharp } from 'react-icons/io5'
import { FaUserFriends, FaUsers, FaUserPlus, FaStore } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CardUser from '..//..//components/cardUser/CardUser'
import './contacts.css'

const Contacts = () => {
  return (
      <div className='agenda'>
        <div className="cabeçaho">
          <div className='detalhes'>
            <Link to='/'>
              <IoArrowBackOutline className='return' />
            </Link>
            <div>
              <h2>Contacts</h2>
              <p>205 contacts</p>
            </div>
          </div>
          <div className="icons">
            <IoSearchSharp />
            <IoEllipsisVertical />
          </div>
        </div>
        <div className="main">
          <div className="newGrup link">
            <Link><FaUserFriends ></FaUserFriends></Link>
            <h3>Novo Grupo</h3>
          </div>
          <div className="newContact">
            <div className='link'>
              <Link to="/newContact" ><FaUserPlus /> </Link>
              <h3>Novo Contato</h3>
            </div>
            <IoQrCodeSharp className='qrcode'/>
          </div>
          <div className="newCommunity link">
            <Link><FaUsers /></Link>
            <h3>Nova comunidade</h3>
          </div>

          <div className="search">
            <h4>Encontrar</h4>
            <div className="empresa link">
              <Link><FaStore /></Link>
              <h3>Empresas</h3>
            </div>
          </div>
          <div className="contact_sApp">
            <h4>Contatos no WhatsApp</h4>
            <CardUser />
            <CardUser />
            <CardUser />
          </div>
        </div>
      </div>
  );
}

export default Contacts