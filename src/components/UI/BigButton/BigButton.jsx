import React from 'react';
import classes from './BigButton.module.scss'
import bigButton from "./BigButton";

const BigButton = ({children, click}) => {
    return (
        <button className={classes.big_button} onClick={() => click(true)}>
            {children}
        </button>
    );
};

export default BigButton;