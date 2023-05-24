import React from 'react';
import MySelect from "./UI/select/MySelect.jsx";

const SortAndFind = ({filter, changeFilter}) => {
    return (
        <div className="sort-n-find_container">
            <MySelect
                // defaultValue='Сортировка по'
                options={
                    [
                        {name: 'По названию', value: 'title'},
                        {name: 'По описанию', value: 'body'}
                    ]
                }
                sort={changeFilter}
                filter={filter}
            />

            <input
                type="text"
                className="find"
                placeholder='Поиск...'
                style={{border:'1px solid black', marginLeft:'15px'}}
                value={filter.query}
                onChange={e => changeFilter({...filter, query:e.target.value})}
            />
        </div>
    );
};

export default SortAndFind;