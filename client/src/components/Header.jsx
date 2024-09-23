import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../mern-blogs/icon.jpeg'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose} from 'react-icons/ai'

import { UserContext } from '../context/userContext';

const Header = () => {
  const { currentUser} = useContext(UserContext)
  return (
    <nav>
      <div className="container ">
        <Link to='/' className='nav__logo'>
          <img src={Logo} alt="" id='img1' />
        </Link>
        {currentUser?.id &&<ul className='nav__menu'>
          <li ><Link to={`/profile/${currentUser.id}`} id='navMenu'>{currentUser?.name}</Link></li>
          <li ><Link to='/create' id='navMenu'>Create Post</Link></li>
          <li ><Link to='/authors' id='navMenu'>Authors</Link></li>
          <li ><Link to='/logout' id='navMenu'>Logout</Link></li>
        </ul>}
        {!currentUser?.id &&<ul className='nav__menu'>
          <li ><Link to='/authors' id='navMenu'>Authors</Link></li>
          <li ><Link to='/login' id='navMenu'>Login</Link></li>
        </ul>}
        <button className="nav__toggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default Header