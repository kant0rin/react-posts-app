import React from 'react';
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div className="post">
            <div className="post-content">
                <h5 className="post-id">
                    {props.post.id}
                </h5>
                <h1 className="post-title">
                    {props.post.title}
                </h1>
                <p className="post-text">
                    {props.post.body}
                </p>
            </div>
            <div className="post-btns">
                <button onClick={() => router(`../posts/${props.post.id}`)} className="post-delete">Открыть</button>
                <button onClick={() => props.remove(props.post)} className="post-delete">Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;