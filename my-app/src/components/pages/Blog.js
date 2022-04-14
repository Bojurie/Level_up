import axios from 'axios';
import React, { useState, useEffect }from 'react';
import Posts from '../Posts';
import './Blog.css';


const Blog = () =>  {
  const [posts, setPosts ] = useState([])

  useEffect(() => {
    const fetchPosts = async () =>{
     const res = await axios.get('');
     setPosts(res.data)
    }
    fetchPosts()
  }, []);
  return (
    <>
    <section className='blog'>
      <div className='blog_header'>
        <h1>Video Blog</h1>
      </div>
      <div>
        <Posts posts={posts}/>
      </div>
      
    </section>
    
    </>
  );
}
export default Blog;