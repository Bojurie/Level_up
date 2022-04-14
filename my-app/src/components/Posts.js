import React from 'react';

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {posts.map((p)=>{
        <Posts post={p}/>
      })}
      
    </div>
  );
}

export default Posts;
