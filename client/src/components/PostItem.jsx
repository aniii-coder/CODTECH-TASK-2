import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  postID,
  category,
  title,
  description,
  authorID,
  thumbnail,
  createdAt,
}) => {
  const shortDescription =
    description.length > 145 ? description.substr(0, 145) + "..." : description;
  const postTitle = title.length > 145 ? title.substr(0, 30) + "..." : title;
  return (
    <article className="post">
      <div className="postThumbnail">
        <img
          src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`}
          alt={title}
          id="img2"
        />
      </div>
      <div className="postInfo">
        <Link to={`/posts/${postID}`} className="ttlname">
          <h3>{postTitle}</h3>
        </Link>
        <p id="desc1" dangerouslySetInnerHTML={{__html: shortDescription}}/>
        <div className="postFooter">
          <PostAuthor authorID={authorID} createdAt={createdAt} />

          <Link to={`/posts/categories/${category}`} className="category1">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
