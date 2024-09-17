import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }
  return (
    <section className="register">
      <div className="registerContainer">
        <h2>Register Form</h2>
        <form  className="registerForm">
          <p className="formErrorpage">This is Error</p>
          <input type="text" name="name" id="" placeholder='Enter your Full Name....' value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type="email" name="email" id="" placeholder='Enter your Email....' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type='password' name="password" id="" placeholder='Enter your Password....' value={userData.password} onChange={changeInputHandler} autoFocus/>
          <input type='password' name="password2" id="" placeholder='Enter your Confirm Password....' value={userData.password2} onChange={changeInputHandler} autoFocus/>
          <Button variant='contained'>Submit</Button>
        </form>
        <small className='signin'>Already have an account? <Link to='/login' className='signin'>Sign in </Link></small>
      </div>
    </section>
  )
}

export default Register