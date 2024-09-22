import React, {useContext, useEffect, useState} from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Thumbnail from "../mern-blog-assets/blog22.jpg";
import Loader from '../components/Loader'
// import { red } from "@mui/material/colors";
import DeletePost from './DeletePost'
import { UserContext } from "../context/userContext";
import axios from "axios";
import EditPost from "./EditPost";


const PostDetail = () => {
  const{id} = useParams()
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const {currentUser} = useContext(UserContext)




  useEffect(()=>{
    const getPost = async() => {
      // setIsLoading(true)
      try {
        
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setPost(response?.data)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    getPost()
  })








  if(isLoading){
    return <Loader/>
  }



  return (
    <section className="postDetail1">
      {error && <p className="formErrorpage">'{error}</p>}
      {post &&<div className="postDetailContainer">
        <div className="postDetailContainerHeader">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
          {currentUser?.id == post?.creator && <div className="postDetailContainerButtons">
            <Link to={`/posts/${post?._id}/edit`} style={{backgroundColor: '#2778FD', borderRadius: '10px', display:'flex', alignItems: 'center',justifyContent:'center', color:'white', fontWeight: 'bold', textDecoration: 'none', width:'5vw'}} >Edit</Link>
            
            <DeletePost postId={id}/>
          </div>}
        </div>
        
        <div className="postDetailThumbnail">
        <h1>{post.title}</h1>
          <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
        
        {/* <div className="postDetailAlign">
          {/* PostDescription */}
          
        {/* </div> */} 
        <p dangerouslySetInnerHTML={{__html: post.description}}/>
      </div>
      </div>}
    </section>
  );
};

export default PostDetail;
