import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './AllBlogs.css'

const AllBlogs = () => {
  return (
    <div>
      <NavBar />
      <div className="card">
      <img src="img_avatar.png" alt="Avatar" />
      <div className="container">
      <h4><b>John Doe</b></h4> 
      <p>Architect & Engineer</p> 
      </div>
      </div>
    </div>
  )
}

export default AllBlogs