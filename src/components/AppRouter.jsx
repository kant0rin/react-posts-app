import React, {useContext, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import ErrorPage from "./ErrorPage.jsx";
import PostPage from "../pages/PostPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import {AuthContext} from "../context/index.js";

const AppRouter = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const checkLogged = () => {
        if (getCookie('logged') === 'true'){
            setIsAuth(true)
        }
    }

    useEffect(() => {
        checkLogged()
    }, [])


    return (
        isAuth === true
            ? <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path={'/'} element={<Posts/>}/>
                <Route path={'/posts/:id'} element={<PostPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>

            </Routes>
            : <Routes>
                <Route path='*' element={<LoginPage/>}/>

            </Routes>
    );
};

export default AppRouter;