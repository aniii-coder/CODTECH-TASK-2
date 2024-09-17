import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../mern-blog-assets/avatar15.jpg'
import { FaEdit } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { Button } from '@mui/material'

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setNewConfirmPassword] = useState('')
  return (
    <section className="profile">
      <div className="profileContainer">
        <Link to={`/myposts/kfbdkjdf`} className='profileLink' >My Posts</Link>
        <div className="profileDetails">
          <div className="profileWrapper">
            <div className="profileAvatar">
              <img src={avatar} alt="" />
            </div>
            <form className='profileForm'>
              <input type="file" name="avatar" id="avatar" onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' style={{display: 'none'}}/>
              <label htmlFor="avatar"><FaEdit/></label>
              <button className='profileButton'> <FaCheck/> </button>
            </form>
          </div>

          <h1>Aniket Singh</h1>
          <form action="" className="profileDataForm">
            <p className="profileError">This is Error Message</p>
            <input type="text" name="" id="" placeholder='Full Name:- ' value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" name="" id="" placeholder='Email:- ' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="" id="" placeholder='Current Password:- ' value={password} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" name="" id="" placeholder='New Password:- ' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" name="" id="" placeholder='Confirm New Password:- ' value={confirmNewPassword} onChange={e => setNewConfirmPassword(e.target.value)}/>
            <Button variant='contained'>Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile