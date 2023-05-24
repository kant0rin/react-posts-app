import React, {useContext, useState} from 'react';
import BigButton from "../components/UI/BigButton/BigButton.jsx";
import {AuthContext} from "../context/index.js";

const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const {setIsAuth} = useContext(AuthContext)

    const reg = () => {
        setIsAuth(true)
        document.cookie = 'logged=true; max-age=3600'
    }



    return (
        <div className='login'>
            <div className='login_container'>
                <h1>Зарегистрируйтесь</h1>
                <input
                    type="text"
                    placeholder='Логин'
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Пароль'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <BigButton click={reg}>Зарегистрироваться</BigButton>
            </div>
        </div>
    );
};

export default LoginPage;