import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../mern-blog-assets/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sxcnvb`} className="authname">
      <div className="postAvatar">
        <img src={Avatar} alt="" />

        <div className="postAuthorDetail">
          <div className="cnt1">
            <span >By: Aniket Singh</span>
            <small >Just now</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostAuthor;
