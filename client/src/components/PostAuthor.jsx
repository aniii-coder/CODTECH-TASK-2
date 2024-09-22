import React, {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'


import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const PostAuthor = ({authorID, createdAt}) => {
 const [author, setAuthor] = useState({})

  useEffect(() => {
    const getAuthor = async() => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`);
        setAuthor(response?.data);
      } catch (error) {
        console.error('Error fetching author:', error.response?.data || error.message);
      }
    };
    

    getAuthor();
  }, [])



  return (
    <Link to={`/posts/users/${authorID}`} className="authname">
      <div className="postAvatar">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="" />

        <div className="postAuthorDetail">
          <div className="cnt1">
            <span >By: {author?.name}</span>
            <small ><ReactTimeAgo date={new Date(createdAt)} locale='en-US'/></small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostAuthor;
