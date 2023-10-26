import React, { useState } from 'react'
import './CreateBlog.css'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [image,setImage] = useState("")
  
  const createBlog=async(e)=>{
    e.preventDefault()
    const data = {
      title : title,
      description : description,
      avatar : image
    }
    const response = await axios.post("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs",data)
    if(response.status == 201){
      navigate("/")
    }
  }

  return (
    <div>
    <NavBar />
    <div className="container">
        <h1>Add Blog</h1>
        <form onSubmit={createBlog}>
            <input type="text" id="title" placeholder='title' name="title" required onChange={(e)=>setTitle(e.target.value)} />

            <textarea id="description" placeholder='description' name="description" rows="4" required onChange={(e)=>setDescription(e.target.value)} ></textarea>

            <input type="text" id="image" placeholder='image' name="image" required onChange={(e)=>setImage(e.target.value)} />

            <input type="submit" value="Submit" />
        </form>
    </div>
    </div>
  )
}

export default CreateBlog