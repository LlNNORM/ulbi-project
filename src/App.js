import React from "react";
import './styles/App.css';
import { useState } from "react";
import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Javascript 1',body:'Description'},
    {id:2, title:'Javascript 2',body:'Description'},
    {id:3, title:'Javascript 3',body:'Description'},
  ]);
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id!==post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // Функция sort не возвращает новый отсортированный массив, 
    // а мутирует исходный, поэтому поступим следующим образом:
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
    // вместо setPosts(posts.sort())
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <div>
        <hr style={{margin: '15px 0'}}/>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {/* Условная отрисовка: */}
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список постов 1:'/>
        : <h1 style={{textAlign:'center'}}>Посты не были найдены!</h1>
      }
      
    </div>
  );
}

export default App;
