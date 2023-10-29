import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import './SingleBlog.css'

const SingleBlog = () => {

  const navigate = useNavigate()

  const {id} = useParams()
  console.log(id)

  const [blog,setBlog] = useState()

  const fetchBlog = async()=>{
    const response = await axios.get("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs/" + id)
    console.log(response)
    if(response.status == 200){
      setBlog(response.data)
      console.log(blog)
    } else{
      alert("Something went wrong.")
    }
  }

  //delete blog
  const deleteBlog = async()=>{
    const response = await axios.delete("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs/" + id)
    console.log(response)
    if(response.status == 200){
      navigate("/")
    } else{
      alert("Something went wrong.")
    }
  }

  useEffect(()=>{
    fetchBlog()

  },[])

  return (
    <>
    <NavBar />
    <div className="blog-post">
        <div className="avatar">
            <img src={blog?.avatar} alt="Author Avatar"/>
        </div>
        <div className="content">
            <h1 className="title">{blog?.title}</h1>
            <p className="description">{blog?.description}</p>
            <button onClick={deleteBlog}>Delete</button>
        </div>
    </div>
    </>

  )
}

export default SingleBlog