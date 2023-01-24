import React, {useEffect} from 'react'
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import postOperations from './redux/post/thunk'
import {Route, Switch} from "react-router-dom";
import SignIn from "./container/signin";
import AllItems from "./container/allitems";
import LogInBlock from "./container/login";
import SignIn_block from "./container/signin_block";

function App() {
    const posts = useSelector(state => state.posts.list)
    const post = useSelector(state => state.posts.data)
    const update = useSelector(state => state.posts)
    const create = useSelector(state => state.posts.list)
    const delete1 = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const {fetchPosts, fetchPostById, fetchUpdatePosts, fetchCreatePost} = postOperations
    useEffect(() => {
        dispatch(postOperations.fetchPosts())
        // dispatch(postOperations.fetchPostById(2))
        dispatch(postOperations.fetchUpdatePosts(3))
        // dispatch(postOperations.fetchCreatePost())
        dispatch(postOperations.fetchDeletePost(4))

    }, [])
    // console.log(posts, 'posts')
    // console.log(post, 'post')
    // console.log(update, 'update')
    // console.log(create, 'create')
    // console.log(delete1, 'delete')

    return (
        <div className='main_block'>
                <SignIn/>
            <Switch>
                <Route component={AllItems} exact path={'/'}/>
                <Route component={SignIn_block} exact path={'/SignIn'}/>
                <Route component={LogInBlock} exact path={'/LogIn'}/>
            </Switch>
        </div>
    );
}

export default App;
