import React, { useState, useContext } from 'react'
// import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



import {UserContext} from '../context/userContext.js'

const Login = () => {
  const [userData, setUserData] = useState({
    
    email: '',
    password: ''
  })


  const [error, setError] = useState("")

  const navigate = useNavigate()

  const {setCurrentUser} = useContext(UserContext)


  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }



  const loginUser = async(e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData);
      const user = await response.data;
      navigate('/')
      setCurrentUser(user)
    } catch (error) {
      setError(error.response.data.message)
    }
  }
  return (
    <section className="register">
      <div className="registerContainer">
        <h2>Login Form</h2>
        <form  className="registerForm" onSubmit={loginUser}>
          {error &&<p className="formErrorpage">{error}</p>}
          {/* <input type="text" name="name" id="" placeholder='Enter your Full Name....' value={userData.name} onChange={changeInputHandler} autoFocus/> */}
          <input type="email" name="email" id="" placeholder='Enter your Email....' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type='password' name="password" id="" placeholder='Enter your Password....' value={userData.password} onChange={changeInputHandler} />
          {/* <input type='password' name="password2" id="" placeholder='Enter your Confirm Password....' value={userData.password2} onChange={changeInputHandler} autoFocus/> */}
          <button type="submit">Login</button>
        </form>
        <small className='signin'>New User ? <Link to='/register' className='signin'>Sign Up </Link></small>
      </div>
    </section>
  )
}

export default Login