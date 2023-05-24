import React, {useEffect, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts.js";
import PostService from "../API/PostService.js";
import SortAndFind from "../components/SortAndFind.jsx";
import BigButton from "../components/UI/BigButton/BigButton.jsx";
import MyLoader from "../components/UI/Loader/MyLoader.jsx";
import MyModal from "../components/UI/MyModal/MyModal.jsx";
import CreatePost from "../components/CreatePost.jsx";
import PostList from "../components/PostList.jsx";




function Posts(){

    const [posts, setPost] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const [filter, changeFilter] = useState({filter: '', query: ''})

    const [isLoading, changeLoaderStatus] = useState(false)

    const [modalOpened, changeModalStatus] = useState(false)

    const sortedAndFindPosts = usePosts(posts, filter.filter, filter.query)

    const lastElement = useRef()
    const observer = useRef()
    const fetchPosts = async (limit, page) => {
        changeLoaderStatus(true)
        const data = await PostService.getPosts(limit, page)
        setPost([...posts, ...data])
        changeLoaderStatus(false)
    }


    const createPost = (newPost) => {
        setPost([...posts, newPost])
        changeModalStatus(false)
    }

    const removePost = (post) => {
        setPost(posts.filter(p => p.id !== post.id))
    }

    useEffect(() => {
        fetchPosts(10, currentPage)
    }, [currentPage])



    useEffect(() => {
        setTimeout(() => {
            if (isLoading) return
            if (observer.current) observer.current.disconnect()
            var callback = function(entries, observer) {
                if (entries[0].isIntersecting && currentPage < 10){
                    setCurrentPage(currentPage + 1)
                }
            };
            observer.current = new IntersectionObserver(callback);
            observer.current.observe(lastElement.current)
        }, 1000)
    },[isLoading])




    return (
        <div className="App">

            <SortAndFind filter={filter} changeFilter={changeFilter}/>
            <BigButton click={changeModalStatus}>
                Создать пост
            </BigButton>


            <PostList posts={sortedAndFindPosts} remove={removePost}/>
            <div ref={lastElement} style={{height:'20px', marginBottom:'20px'}}/>

            {
                isLoading === true && <div><MyLoader></MyLoader></div>
            }

            <MyModal open={modalOpened} close={changeModalStatus}>
                <CreatePost create={createPost} posts={posts}/>
            </MyModal>


        </div>
    )
}

export default Posts
