import React, {useState} from 'react';
import PostItem from "./PostItem.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({remove, posts}) => {
    

    if (!posts.length){
        return (
            <h2 style={{textAlign: 'center', marginTop: '30px', fontSize: '35px'}}>Постов нет!</h2>
        )
    }

    return (
        // <TransitionGroup className={'post-list'}>
        //     {posts.map(post =>
        //         <CSSTransition
        //             key={post.id}
        //             timeout={500}
        //             classNames="item"
        //         >
        //             <PostItem remove={remove} post={post}/>
        //         </CSSTransition>
        //     )}
        // </TransitionGroup>

        <div className='post-list'>
            {posts.map((post, index) => <CSSTransition
                key={index}
                timeout={500}
                classNames="post"

            >
                <PostItem remove={remove} post={post} />
            </CSSTransition>)}

        </div>
    );
};

export default PostList;