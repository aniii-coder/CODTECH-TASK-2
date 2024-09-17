import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="dashboard">
      {
        posts.length ? <div className="dashboardContainer">
           {
            posts.map(post  => {
              return <article key={post.id} className='postArticle'>
                <div className="dashboardPostInfo">
                  <div className="dashboardThumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="dashboardTitle">
                    <h5>{post.title}</h5>
                  </div>
                </div>
                <div className="dashboardActions">
                  
                  <Link to={`/posts/${post.id}`} className='dashboardLink'style={{textDecoration: 'none', color: 'gray' }}>View</Link>
                  <Link to={`/posts/${post.id}/edit`} className='dashboardLink' style={{textDecoration: 'none', color: 'white', background:'#2778FD' }}>Edit</Link>
                  <Link to={`/posts/${post.id}/delete`} className='dashboardLink' style={{textDecoration: 'none', color: 'white', background: '#FF3F43'}}>Delete</Link>
                  
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