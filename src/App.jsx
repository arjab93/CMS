import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllBlogs from './pages/AllBlogs/AllBlogs';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import EditBlog from './pages/EditBlog/EditBlog';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/singleBlog/:id" element={<SingleBlog />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/editBlog/:id" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;