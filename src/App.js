import React, {useState} from 'react';
import Post from "./post/Post";
import Form from "./form/Form";

import "./styles/reset.scss"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Title', body: 'Description'},
    {id: 2, title: 'Title', body: 'Description'},
    {id: 3, title: 'Title', body: 'Description'},
  ])

  function createPost (newPost) {
    setPosts([...posts, newPost]);
  }

  return (
    <main className='main'>
      {/*<Counter/>*/}
      {/*<hr/>*/}
      {/*<ClassCounter/>*/}
      {/*<hr/>*/}
      {/*<DoubleSidedBinding/>*/}

      <Form create={createPost}/>

      <Post list={posts}/>
    </main>
  );
}

export default App;
