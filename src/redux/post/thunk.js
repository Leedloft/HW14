
import {
    getPostFailureActionCreator,
    getPostReceiveActionCreator,
    getPostRequestActionCreator,
    getPostsFailureActionCreator,
    getPostsReceiveActionCreator,
    getPostsRequestActionCreator
} from "./actions";
// const fetchPosts = () => {
//     return (dispatch) = () => {
//
//     }
// }

const fetchPosts = () => async (dispatch) => {
    dispatch(getPostsRequestActionCreator())
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts')
        const parsedData = await req.json()
        setTimeout(() => {
            dispatch(getPostsReceiveActionCreator(parsedData))
        }, 2000)
    } catch (e) {
        dispatch(getPostsFailureActionCreator(e))
    }
}

// const fetchPostById = (id) => async (dispatch) => {
//     dispatch(getPostRequestActionCreator())
//     try {
//         const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         const parsedData = await req.json()
//         setTimeout(() => {
//             dispatch(getPostReceiveActionCreator(parsedData))
//         }, 2000)
//     } catch (e) {
//         dispatch(getPostFailureActionCreator(e))
//     }
// }

export default {fetchPosts}