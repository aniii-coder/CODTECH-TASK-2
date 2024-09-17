import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../mern-blog-assets/logo.png'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  return (
    <nav>
      <div className="container ">
        <Link to='/' className='nav__logo'>
          <img src={Logo} alt="" id='img1' />
        </Link>
        <ul className='nav__menu'>
          <li ><Link to='/profile/jdfvbndfv' id='navMenu'>Aniket Singh</Link></li>
          <li ><Link to='/create' id='navMenu'>Create Post</Link></li>
          <li ><Link to='/authors' id='navMenu'>Authors</Link></li>
          <li ><Link to='/logout' id='navMenu'>Logout</Link></li>
        </ul>
        <button className="nav__toggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default Header