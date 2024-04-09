import React from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { useState } from 'react';

const PostForm = ({create}) => {
    const [title, setTitle] = useState('');
    const [body,setBody] = useState('');
    const addNewPost = (e)=> {
        e.preventDefault();
        const newPost = {
          id: Date.now(),
          title,
          body,
        };
        create(newPost);
        // setPosts([...posts, {...post, id: Date.now()}]); 
        // тогда и не нужно будет создавать переменную newPost, если используется объект состояний
        // Очистка импутов
        setTitle('');
        setBody('');

      }
    return (
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
          value={body}
          onChange={e => setBody(e.target.value)}
          // или в случае объекта состояний
           // value={post.body}
          // onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
};

export default PostForm;