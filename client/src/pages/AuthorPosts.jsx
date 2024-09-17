import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <div>
      <div className="authorPosts">
      {posts.length > 0 ?
      <section id="authorPostsContainer">
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
    </div>
  )
}

export default AuthorPosts