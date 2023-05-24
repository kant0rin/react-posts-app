import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div style={{display:"flex", flexDirection:'column', width:"100%", justifyContent:'center', alignItems:'center', height:'200px'}}>
            Такой страницы нет. Вернитесь на главную
            <Link to='/' style={{textDecoration:"underline"}}>Вернуться</Link>
        </div>
    );
};

export default ErrorPage;