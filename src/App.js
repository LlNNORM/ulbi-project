import React from "react";
import './styles/App.css';

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import PostService from "./API/PostService";
import { usePosts } from "./hooks/usePosts";
import Loader from "./UI/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";




function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort:'', query:''});
  // чтобы сортировка не происходила каждый раз по новой воспользуемся мемоизацией 
  // с помощью хука useMemo будем кэшировать результаты. Хук будет отрабатывать,
  // если мы удаляем или добавляем пост,а также меняем алгоритм сортировки, 
  // но не при вводе в строку поиска,как это было прежде. 
  const [modal, setModal] = useState(false)
  const [isPostsLoading, setIsPostsLoading]=useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostsLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id!==post.id))
  }


  return (
    <div className="App">
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible = {setModal}>
        <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {/* Условная отрисовка: */}
        {isPostsLoading 
              ?  <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> 
              :  <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1:'/>
        }      
       
    </div>
  );
}

export default App;
