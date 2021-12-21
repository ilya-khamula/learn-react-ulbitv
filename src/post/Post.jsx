import React, {useState} from 'react';
import PostItem from "../post-item/PostItem";
import './post.scss'

const Post = (props) => {
  return (
    <ul className='post'>
      <h1 style={{textAlign: 'center', marginBottom: '24px'}}>Posts title</h1>
      {props.list.map((post, index) => <PostItem post={post} index={index + 1} del={props.del} key={post.id}/>)}
    </ul>
  );
};

export default Post;