import React, {useState} from 'react';
import PostItem from "../post-item/PostItem";

const Post = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Title', body: 'Description'},
    {id: 2, title: 'Title', body: 'Description'},
    {id: 3, title: 'Title', body: 'Description'},
  ])

  return (
    <ul className='post'>
      <h1 style={{textAlign: 'center', marginBottom: '24px'}}>Posts title</h1>
      {posts.map((post) => <PostItem post={post} key={post.id}/>)}
    </ul>
  );
};

export default Post;