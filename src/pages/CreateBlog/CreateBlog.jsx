import React from 'react'
import './CreateBlog.css'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()

  
  const createBlog=async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    const response = await axios.post("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs",data)
    if(response.status == 201){
      navigate("/")
    } else{
      alert("Something went wrong.")
    }
  }

  return (
    <div>
    <NavBar />
    <div className="container">
        <h1>Add Blog</h1>
        <form onSubmit={createBlog}>
            <input type="text" id="title" placeholder='title' name="title" required />

            <textarea id="description" placeholder='description' name="description" rows="4" required />

            <input type="text" id="image" placeholder='image' name="avatar" required />

            <input type="submit" value="Submit" />
        </form>
    </div>
    </div>
  )
}

export default CreateBlog