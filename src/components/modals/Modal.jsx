import { useState, useEffect } from "react";
import css from './modal.module.css'
import Register from "./Register";
import LogIn from "./LogIn";
import users from "/users.json";

export default function Modal(){
    const [isOpen, setIsOpen] = useState(true);
    const [authMode, setAuthMode] = useState('logIn');

    const changeAuthMode =(state)=>{
        setAuthMode(state)
    };
    const closeModal = () => setIsOpen(false);
    if (!isOpen) return null;
    return ( 
        <div className={authMode==='logIn' ? css.loginBg : css.registerBg}> 
            {authMode==='logIn' ? <LogIn change={changeAuthMode} data={users.users} onSuccess={closeModal}/> : <Register change={changeAuthMode} data={users.users}/> } 
        </div>
    )
}