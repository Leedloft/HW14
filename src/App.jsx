import React, {useEffect} from 'react'
import './App.css';
import AddTodoContainer from "./container/add-todo";
import TodoListContainer from "./container/todo-list";
import FilterButton from "./container/filter-buttons";
import {useDispatch, useSelector} from "react-redux";
import postOperations from './redux/post/thunk'
import FormModule from "./container/form";

function App() {
    const posts = useSelector(state => state.posts.list)
    const post = useSelector(state => state.posts.data)
    const update = useSelector(state => state.posts)
    const create = useSelector(state => state.posts.list)
    const delete1 = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const {fetchPosts, fetchPostById,fetchUpdatePosts, fetchCreatePost} = postOperations
    useEffect(() => {
        // dispatch(postOperations.fetchPosts())
        // dispatch(postOperations.fetchPostById(2))
        dispatch(postOperations.fetchUpdatePosts(3))
        // dispatch(postOperations.fetchCreatePost())
        dispatch(postOperations.fetchDeletePost(4))

    }, [])
    // console.log(posts, 'posts')
    // console.log(post, 'post')
    console.log(update, 'update')
    // console.log(create, 'create')
    console.log(delete1, 'delete')

    return (
        <div className='main_block'>
                <AddTodoContainer/>
                <FilterButton/>
                <TodoListContainer/>
            <FormModule/>
        </div>
    );
}

export default App;
