import React from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import { useState } from "react";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Javascript 1',body:'Description'},
    {id:2, title:'Javascript 2',body:'Description'},
    {id:3, title:'Javascript 3',body:'Description'},
  ]);

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title='Список постов 1:'/>
    </div>
  );
}

export default App;
