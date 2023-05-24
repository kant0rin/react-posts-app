import React from 'react';
import { MutatingDots} from 'react-loader-spinner'
import cl from './MyLoader.module.scss'

const MyLoader = () => {
    return (
        <div className={cl.loaderContainer}>
            <MutatingDots
                height="100"
                width="100"
                color="black"
                secondaryColor= 'black'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default MyLoader;