import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [ isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async() => {
      // setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
        setAuthors(response.data);
      } catch (error) {
        console.log(error);
        
      }
    }
    getAuthors();
  },[])











  return (
    <div className="authors1">
      {authors.length > 0 ? <div className="authorsContainer">
          {authors.map(({_id: id, avatar, name, posts }) => {
            return <Link key={id} to={`/posts/users/${id}`} style={{textDecoration: 'none'}}>
                <div className="authors_avatar">
                  <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} style={{height: '10vw'}} />
                </div>
                <span className="authorsInfo" >
                  <p style={{fontSize: '35px'}}>{name}</p>
                  <p style={{fontSize: '20px'}}>{posts} posts</p>
                </span>
              </Link>
        })}
        </div>
       : (
        <h2>No Authors Found</h2>
      )}
    </div>
  );
};

export default Authors;
