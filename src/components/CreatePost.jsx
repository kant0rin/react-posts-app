import React, {useState} from 'react';

const CreatePost = ({create, posts}) => {

    const [post, setPost] = useState({title: '', body:''})

    const createPost = () => {


        if (post.title !== '' && post.body !== ''){
            create(post)
            setPost({title: '', body: ''})
        }
    }

    return (
        <div className="add-post">
            <h2 className="add-post-title">Добавить пост</h2>
            <input
                type="text"
                placeholder='Введите название поста'
                id="create-title"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value, id: posts.length+1})}
            />
            <input
                type="text"
                placeholder='Введите содержание поста'
                id="create-content"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <button
                id="create-post-btn"
                onClick={createPost}
            >
                Создать пост</button>
        </div>
    );
};

export default CreatePost;