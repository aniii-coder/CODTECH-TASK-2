import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'


const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [error, setError] = useState('')


  const navigate = useNavigate();
  const {id} = useParams();


  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;


  useEffect(()=>{
    if(!token){
      navigate('/login')
  }
}, [])

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blackquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ link: "image" }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather"
  ]



  useEffect(() => {
    const getPost = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
      setTitle(response.data.title)
      setDescription(response.data.description)

    } catch (error) {
      console.log(error);
      setError(error)
    }
    }
    getPost();
  }, [])





  const editPost = async(e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.set('title', title)
    postData.set('category', category)
    postData.set('description', description)
    postData.set('thumbnail', thumbnail)



    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, postData, {withCredentials:true, headers: {Authorization:`Bearer ${token}`}})
      if(response.status == 200){
        return navigate('/')
      }
    } catch (error) {
      setError(error.response.data.message);
      
    }

  }



  return (
    <section className="createPost">
      <div className="crtPostContainer">
        <h2>Edit Post</h2>
        {error && <p className="crtFormError">{error}</p>}
        <form  className="crtPostForm" onSubmit={editPost}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map(cat => 
              <option key={cat}>{cat}</option>
            )}
          </select>
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
            style={{ height: "40vh" }}
          />
          <input
            type="file"
            onChange={e => setThumbnail(e.target.files[0])}
            accept="png, jpg, jpeg"
            style={{
              border: "1px solid white",
              marginLeft: "5px",
              padding: "5px",
              marginTop: "5vh",
            }}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
