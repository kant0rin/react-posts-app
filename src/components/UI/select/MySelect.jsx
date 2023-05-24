import React from 'react';
import classes from './MySelect.module.scss'

const MySelect = ({options, sort, filter}) => {
    return (
        <div className={classes.sort}>
            <select
                onChange={event => sort({...filter, filter:event.target.value })}
            >
                {options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
            </select>
        </div>
    );
};

export default MySelect;