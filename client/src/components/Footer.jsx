import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footerCategories'>
        <li><Link id='footerMenu' to='/posts/categories/Agriculture'>Agriculture</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Business'>Business</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Education'>Education</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Entertainment'>Entertainment</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Art'>Art</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Investment'>Investment</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Uncategorized'>Uncategorized</Link></li>
        <li><Link id='footerMenu' to='/posts/categories/Weather'>Weather</Link></li>
      </ul>
      <hr />
      <div className="footerCopyright">Copyright &copy; 2024 blog.com</div>
    </footer>
  )
}

export default Footer