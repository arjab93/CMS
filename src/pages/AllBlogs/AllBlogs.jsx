import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './AllBlogs.css'
import axios from 'axios'

const AllBlogs = () => {
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async() =>{
    const response = await axios.get("https://65392d98e3b530c8d9e80e85.mockapi.io/blogs")
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
            <p>{blog.description}</p> 
            </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default AllBlogs