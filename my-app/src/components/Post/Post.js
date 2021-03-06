import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "https://www.youtube.com/watch?v=ml6cT4AZdqI";
  return (
    <div className="post">
      {post.video && <video className="postVid"  alt="video">
        <source src={PF + post.videos}/>
      </video> }
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
export default Post;