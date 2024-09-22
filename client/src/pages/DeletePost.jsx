import React, {  useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const DeletePost = ({postId : id}) => {

  const navigate = useNavigate()
  const location = useLocation()



  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;


  useEffect(()=>{
    if(!token){
      navigate('/login')
  }
}, [])




  const removePost = async() => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}} )
      if(response.status == 200){
        if(location.pathname == `/myposts/${currentUser.id}`){
          navigate('/')
        }else{
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <Link to='formErrorpage' onClick={() => removePost(id)} style={{backgroundColor: 'red', borderRadius: '10px', display:'flex', alignItems: 'center',justifyContent:'center', color:'white', fontWeight: 'bold', textDecoration: 'none', width: '6vw'}}>Delete</Link>
  )
}

export default DeletePost