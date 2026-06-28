import { useState } from 'react';
import css from './modal.module.css';
import { nanoid } from 'nanoid';
import axios from 'axios';
export default function Register({change, data}){
    const [user, setUser] = useState({
        users:data,
        email:"",
        name:"",
        password:"",
        confirm:""
    });
    const handleChange =(evt)=>{
        const {name,value} = evt.target
        setUser(prev=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=async (evt)=>{
        evt.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(user.email)){
            alert('Email is incorrect');
            return
        }
        if(user.password !== user.confirm){
            alert('The password is wrong');
            return
        }
        if(user.password.length < 8 ){
            alert('Password must contain more than 8 symbols ');
            return
        }    
        if(user.name.trim().length < 2){
            alert('Name must contain more than 2 symbols');
            return
        }
       const newUser = {
            id:nanoid(),
            email:user.email,
            name:user.name,
            password:user.password,
        }
        try{
            await axios.post(
                'http://localhost:3001/users',
                newUser
            );
            const newUsers = [...data, newUser];
            setUser(prev=>({
                ...prev,
                users:newUsers,
                email:"",
                name:"",
                password:"",
                confirm:""
            }));

            localStorage.setItem("users", JSON.stringify(newUsers));

            change('logIn')
        }
        catch(error){
            alert(error)
        }
    }
   
    return(
        <div className={`${css.modalContainer} ${css.modalContainer_register}`}>
            <div className={css.modalLogo}>
                <h1>Money Guard</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <ul className={css.modalInputsList}>
                    <li><input className={`${css.modalInput} ${css.modalName}`} required type="text" name='name' value={user.name} placeholder="Name" onChange={handleChange}/> </li>
                    <li><input className={`${css.modalInput} ${css.modalEmail}`} required type="text" name='email' value={user.email} placeholder="Email" onChange={handleChange}/> </li>
                    <li><input className={`${css.modalInput} ${css.modalPassword}`} required type="password" name='password' value={user.password} placeholder="Password" onChange={handleChange}/> </li>
                    <li><input className={`${css.modalInput} ${css.modalPassword}`} required type="password" name='confirm' value={user.confirm} placeholder="Confirm password" onChange={handleChange}/>
                        <div className={css.passwordProgressContainer}><div className={css.passwordProgress} style={{ width: `${Math.min(user.confirm.length * 8, 100)}%`}}></div></div>
                    </li>
                </ul>
    
                <ul>
                    <li><button className={`${css.modalBtn} ${css.active}`} type="submit">REGISTER</button></li>
                    <li><button className={css.modalBtn} type="button" onClick={()=>change('logIn')}>LOG IN</button></li>
                </ul>
            </form>
        </div>
    )
}