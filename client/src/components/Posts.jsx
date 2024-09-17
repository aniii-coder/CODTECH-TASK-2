import React, { useState } from "react";


import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data.js";


const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <div className="postAlign">
      {posts.length > 0 ?
      <section id="posts1">
        {posts.map(
          ({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          )
        )}
      </section> : <h2 style={{textAlign: "center"}}>No Post Found</h2>}
    </div>
  );
};

export default Posts;
