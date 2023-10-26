import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="main-nav">
        <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/createBlog">Add Blog</a></li>
        </ul>
    </nav>
  )
}

export default NavBar