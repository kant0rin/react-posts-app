import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService.js";
import PostList from "../components/PostList.jsx";
import MyLoader from "../components/UI/Loader/MyLoader.jsx";
import {useFetching} from "../hooks/useFetching.js";

const PostPage = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [isComLoading, changeComLoaderStatus] = useState(false)
    const [fetchPost, isLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response)
    })

    const params = useParams()


    const fetchComments = async (id) => {
        changeComLoaderStatus(true)
        const data = await PostService.getCommentsById(id)
        setComments(data)
        changeComLoaderStatus(false)

    }

    useEffect(() => {
        fetchPost(params.id)
        fetchComments(params.id)

    }, [])
    return (
        <div>
            {
                isLoading === false ? <div className='post'><h5 className="post-id">
                    {post.id}
                </h5>
                    <h1 className="post-title">
                        {post.title}
                    </h1>
                    <p className="post-text">
                        {post.body}
                    </p></div> : <MyLoader></MyLoader>
            }
            <h1 style={{textAlign:'center'}}>
                Комментарии
            </h1>
            {
                isComLoading === false ? <div style={{marginTop:'20px'}}>
                    {comments.map(comm =>
                        <div key={comm.id} style={{
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            border:'1px solid black',
                            borderRadius:'5px',
                            marginTop:'20px',
                            padding:'20px'
                        }}>
                            <h1 style={{textAlign:'start', marginBottom:'15px'}}>{comm.email}</h1>
                            <h2 style={{fontWeight:'500'}}>{comm.body}</h2>

                        </div>)}
                </div> : <MyLoader/>
            }


        </div>
    );
};

export default PostPage;