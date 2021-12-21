import React from 'react';

const PostItem = (props) => {
  const {title, body} = props.post;

  return (
    <li className='post-item'>
      <div className='post-main'>
        <h2 className='post-title'>{props.index}. {title}</h2>
        <h2 className='post-descr'>{body}</h2>
      </div>
      <button onClick={() => props.del(props.post)} className='post-btn'>Delete</button>
    </li>
  );
};

export default PostItem;