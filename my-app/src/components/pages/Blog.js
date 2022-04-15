import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Posts from "../Posts/Posts";
import Sidebar from '../../components/Sidebar/Sidebar'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
    <section className='blog'>
      <div className='blog_header'>
        <h1>Video Blog</h1>
      </div>
      <div className='blog-content'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
      
    </section>
    
    </>
  );
}
export default Blog;