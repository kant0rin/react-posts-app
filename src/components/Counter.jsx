import React, {useState} from 'react';

const Counter = () => {

    const [likes, setLike] = useState(0)

    const incriment = () => {
        setLike(likes + 5)
    }

    const decriment = () => {
        setLike(likes - 1)
    }

    return (
        <div>
            <h2>{likes}</h2>
            <button onClick={incriment}>Плюс</button>
            <button onClick={decriment}>Минус</button>
        </div>
    );
};

export default Counter;