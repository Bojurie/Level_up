import React from 'react';

const Post = ({post}) => {
  return (
    <div className="post">
      {post.video && ( 'https://www.youtube.com/watch?v=LelifxOrzvw'
      <video muted  className='post-video'>
        <source s={post.video}  alt='video'/>
      </video>
      )}
      <div className="post-info">
        <div className="post-workouts">
          <span className='post-workut'>Workout</span>
          <span className='post-workut'>Life</span>
        </div>
        <span className='post-title'>{post.title}</span>
        <hr/>
        <span className='post-date'>{new Date(post.created).toDateString()}</span>
      </div>
      {post.decription}
      
    </div>
  );
}

export default Post;
