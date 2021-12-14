import React from 'react';
import styles from './post-item.scss'

const PostItem = (props) => {
  const {id, title, body} = props.post;

  return (
    <li className='post-item'>
      <div className='post-main'>
        <h2 className='post-title'>{id}. {title}</h2>
        <h2 className='post-descr'>{body}</h2>
      </div>
      <button type='post-button'>Delete</button>
    </li>
  );
};

export default PostItem;