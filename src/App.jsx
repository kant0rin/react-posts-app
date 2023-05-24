import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context";


function App() {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
