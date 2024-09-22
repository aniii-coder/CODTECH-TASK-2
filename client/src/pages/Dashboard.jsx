import React, { useState, useContext, useEffect } from 'react'
import { DUMMY_POSTS } from '../data'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'
import DeletePost from './DeletePost'


const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const {id} = useParams();


  const navigate = useNavigate()
  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;


  useEffect(()=>{
    if(!token){
      navigate('/login')
  }
}, [])




  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
        setPosts(response.data)
      } catch (error) {
        console.log(error);
        
      }
    }

    fetchPosts();
  }, [id])






  return (
    <section className="dashboard">
      {
        posts.length ? <div className="dashboardContainer">
           {
            posts.map(post  => {
              return <article key={post.id} className='postArticle'>
                <div className="dashboardPostInfo">
                  <div className="dashboardThumbnail">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
                  </div>
                  <div className="dashboardTitle">
                    <h5>{post.title}</h5>
                  </div>
                </div>
                <div className="dashboardActions">
                  
                  <Link to={`/posts/${post._id}`} className='dashboardLink'style={{textDecoration: 'none', color: 'gray' }}>View</Link>
                  <Link to={`/posts/${post._id}/edit`} className='dashboardLink' style={{textDecoration: 'none', color: 'white', background:'#2778FD' }}>Edit</Link>
                  <DeletePost postId={post._id} />
                  
                </div>
              </article>
           })
          }
        </div> : <h2 style={{textAlign: 'center'}}>No Posts yet</h2>
      }
    </section>
  )
}

export default Dashboard