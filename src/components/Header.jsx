import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/index.js";

const Header = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logOut = () => {
        document.cookie = 'logged=false'
        setIsAuth(false)
    }



    return (
        <header className="header">
            <div className="header__links">
                <Link className='header__link' to='/'>Посты</Link>
                <Link className='header__link' to='/about'>О сайте</Link>
                {
                    isAuth
                        ? <button
                            className='header__link'
                            style={{background: "none", color: "white", fontWeight: 500}}
                            onClick={logOut}
                        >
                            Выйти
                        </button>
                        : null
                }
            </div>
        </header>
    );
};

export default Header;