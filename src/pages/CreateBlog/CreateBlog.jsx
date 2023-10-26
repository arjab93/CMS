import React from 'react'
import './CreateBlog.css'
import NavBar from '../../components/NavBar/NavBar'

const CreateBlog = () => {
  return (
    <div>
    <NavBar />
    <div className="container">
        <h1>Add Blog</h1>
        <form>
            <input type="text" id="title" placeholder='title' name="title" required />

            <textarea id="description" placeholder='description' name="description" rows="4" required></textarea>

            <input type="text" id="image" placeholder='image' name="image" required />

            <input type="submit" value="Submit" />
        </form>
    </div>
    </div>
  )
}

export default CreateBlog