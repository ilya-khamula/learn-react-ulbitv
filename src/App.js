import './App.css';
import Counter from "./counter/Counter";
import ClassCounter from "./counter/ClassCounter";
import DoubleSidedBinding from "./double-sided-binding/DoubleSidedBinding";
import Post from "./post/Post";

import style from "./styles/reset.scss"

function App() {
  return (
    <main className='main'>
      {/*<Counter/>*/}
      {/*<hr/>*/}
      {/*<ClassCounter/>*/}
      {/*<hr/>*/}
      {/*<DoubleSidedBinding/>*/}

      <Post/>
    </main>
  );
}

export default App;
