import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)

  const [blog,setBlog] = useState({})

  const editBlog = async(e)=>{
    e.preventDefault()
    const response = await axios.put("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs/" + id,blog)
    if(response.status == 200){
      navigate("/singleBlog/" + id)
    }
  }

  const fetchBlog = async()=>{
    const response = await axios.get("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs/" + id)
    console.log(response)
    if(response.status == 200){
      setBlog(response.data)
    } else{
      alert("Something went wrong.")
    }
  }

  useEffect(()=>{
    fetchBlog()
  },[])

  return (
    <div>
    <NavBar />
    <div className="container">
        <h1>Edit Blog</h1>
        <form onSubmit={editBlog}>
            <input type="text" id="title" onChange={(e)=>setBlog({...blog,title:e.target.value})} value={blog.title} placeholder='title' name="title" required />

            <textarea id="description" onChange={(e)=>setBlog({...blog,description:e.target.value})} value={blog.description} placeholder='description' name="description" rows="4" required />

            <input type="text" id="image" onChange={(e)=>setBlog({...blog,avatar:e.target.value})} value={blog.avatar} placeholder='image' name="avatar" required />

            <input type="submit" value="Edit" />
        </form>
    </div>
    </div>
  )
}

export default EditBlog