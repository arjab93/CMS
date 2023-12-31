import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './AllBlogs.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllBlogs = () => {
  const navigate = useNavigate()
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async() =>{
    const response = await axios.get("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs/")
    if(response.status == 200){
      setBlogs(response.data)
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div>
      <NavBar />
      <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
      {
        blogs.map((blog)=>{
          return(
            <div className="card" key={blog.id}>
            <img src={blog.avatar} alt="Avatar" width='100%' />
            <div className="container">
            <h4><b>{blog.title}</b></h4> 
            <p style={{color:"green"}}>{blog.description}</p> 
            <p>{blog.createdAt}</p>
            </div>
            <p onClick={()=>navigate("/singleBlog/" + blog.id)} style={{textAlign:"center"}}>Read More</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default AllBlogs