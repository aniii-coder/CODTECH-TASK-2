import { React, useState } from "react";

import Avatar1 from "../mern-blog-assets/avatar1.jpg";
import Avatar2 from "../mern-blog-assets/avatar2.jpg";
import Avatar3 from "../mern-blog-assets/avatar3.jpg";
import Avatar4 from "../mern-blog-assets/avatar4.jpg";
import Avatar5 from "../mern-blog-assets/avatar5.jpg";
import { Link } from "react-router-dom";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Kritika Singh", posts: 5 },
  { id: 2, avatar: Avatar2, name: "Aniket Singh", posts: 3 },
  { id: 3, avatar: Avatar3, name: "Kanha Singh", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Ayesha Faqiah", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Shubhi Singh", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <div className="authors1">
      {authors.length > 0 ? (
        <div className="authorsContainer">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <div className="authorsPart">
                 <Link key={id} to={`/posts/users${id}`} style={{textDecoration: 'none'}}>
                <div className="authors_avatar">
                  <img src={avatar} alt="" />
                </div>
                <span className="authorsInfo" >
                  <p style={{fontSize: '35px'}}>{name}</p>
                  <p style={{fontSize: '20px'}}>{posts} posts</p>
                </span>
              </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Authors Found</h2>
      )}
    </div>
  );
};

export default Authors;
