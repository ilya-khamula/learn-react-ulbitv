import React, {useMemo, useState} from 'react';
import Post from "./post/Post";
import Form from "./form/Form";

import "./styles/reset.scss"
import SortSelect from "./sortSelect/SortSelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'bbb', body: 'Description1'},
    {id: 2, title: 'ccc', body: 'Description2'},
    {id: 3, title: 'aaa', body: 'Description3'},
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [search, setSearch] = useState('');

  function createPost (newPost) {
    setPosts([...posts, newPost]);
  }

  function deletePost (postForDelete) {
    setPosts(posts.filter(item => item.id !== postForDelete.id));
  }

  function sortPosts (sortby) {
    setSelectedSort(sortby);
  }

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(item => item.title.includes(search));
  }, [search, sortedPosts]);

  return (
    <main className='main'>
      {/*<Counter/>*/}
      {/*<hr/>*/}
      {/*<ClassCounter/>*/}
      {/*<hr/>*/}
      {/*<DoubleSidedBinding/>*/}

      <Form create={createPost}/>

      <div>
        <SortSelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort'
          options={[
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By description'}
          ]}
        />

        <input
          value={search}
          onChange={event => setSearch(event.target.value)}
          style={{width: '200px', height: '36px', paddingLeft: '16px'}}
          placeholder='Search'/>
      </div>

      {posts.length !== 0
        ? <Post list={sortedAndSearchedPosts} del={deletePost}/>
        : <h1 style={{textAlign: 'center'}}>Empty</h1>
      }
    </main>
  );
}

export default App;
