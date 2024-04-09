import React from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useRef } from "react";

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Javascript 1',body:'Description'},
    {id:2, title:'Javascript 2',body:'Description'},
    {id:3, title:'Javascript 3',body:'Description'},
  ]);
  // Если у нас много инпутов, то нам будет проще создавать состояние не для каждого отдельно,
  // а объект состояний:
  // сonst [post, setPost] = useState({
  //   title: '',
  //   body:''
  // });
  const [title, setTitle] = useState('');
  // const [description,setBody] = useState('');
  // При помощи этого хука мы можем обратиться к DOM-элементу 
  // и забрать у него value. Напрямую манипулировать Dom-деревом в React не рекомендуется, 
  // но бывают ситуации,когда это необходимо. У инпута указываем атрибут ref 
  // и передаем туда созданную с помощью useRef ссылку. 
  // У этой ссылки есть одно единственное поле current, которое и есть наш DOM-элемент, 
  // а у него есть поле value, которое мы можем получить (bodyInputRef.current.value). 
  const bodyInputRef = useRef();
  const addNewPost = (e)=> {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body: bodyInputRef.current.value
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    // setPosts([...posts, {...post, id: Date.now()}]); 
    // тогда и не нужно будет создавать переменную newPost, если используется объект состояний
    // Очистка импутов
    setTitle('');
    // setBody('');
     // или в случае объекта состояний
    //  setPost({
    //     title: '',
    //     body:''
    //   });
  }

  return (
    <div className="App">
      <form action="">
        {/* Управляемый компонент, для него делаем 
        двухстороненее связывание с помощью value и useStase */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          // или в случае объекта состояний
          // value={post.title}
          // onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Название поста"/>
          {/* Неуправляемый/неконтролируемый компонент */}
          {/* Чтобы сделать его автоочищающимся после создания поста,
          его необходимо сделать управляемым */}
        <MyInput 
          // value={body}
          // onChange={e => setBody(e.target.value)}
          // или в случае объекта состояний
           // value={post.body}
          // onChange={e => setPost({...post, body: e.target.value})}
          ref={bodyInputRef}
          type="text" 
          placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1:'/>
    </div>
  );
}

export default App;
