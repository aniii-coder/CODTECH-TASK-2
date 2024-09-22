import React, { useState } from 'react'
// import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }


  const registerUser = async(e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
      const newUser = await response.data;
      console.log(newUser);
      if(!newUser){
        setError('User already exists')
      }
      navigate('/login')
      
    } catch (error) {
      setError(error.response.data.message)
    }
  } 



  return (
    <section className="register">
      <div className="registerContainer">
        <h2>Register Form</h2>
        <form  className="registerForm" onSubmit={registerUser}>
          {error && <p className="formErrorpage">{error}</p>}
          <input type="text" name="name"  placeholder='Enter your Full Name....' value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type="text" name="email"  placeholder='Enter your Email....' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type='password' name="password"  placeholder='Enter your Password....' value={userData.password} onChange={changeInputHandler} autoFocus/>
          <input type='password' name="password2"  placeholder='Enter your Confirm Password....' value={userData.password2} onChange={changeInputHandler} autoFocus/>
          <button type="submit">Submit</button>
        </form>
        <small className='signin'>Already have an account? <Link to='/login' className='signin'>Sign in </Link></small>
      </div>
    </section>
  )
}

export default Register