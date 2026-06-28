import { useState } from 'react';
import css from './modal.module.css'
export default function LogIn({change, data, onSuccess}){
    const [state,setState] = useState({
        email:"",
        password:""
    });
    const handleChange=(evt)=>{
        const {name, value} = evt.target;
        setState(prev=>({
            ...prev,
            [name]:value
        }));    
    }
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const foundUser = data.find(user => user.email === state.email && user.password === state.password);
        if(!foundUser){
            alert('User is not definded');
            return
        }
        onSuccess();
    }
    return(
        <div className={css.modalContainer}>
            <div className={css.modalLogo}>
                <h1>Money Guard</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' value={state.email} placeholder="Email" className={`${css.modalInput} ${css.modalEmail}`} onChange={handleChange}/> 
                <input id='modalPassword' type="password" name='password' value={state.password} placeholder="Password"  className={`${css.modalInput} ${css.modalPassword}`} onChange={handleChange}/> 
                <ul>
                    <li><button className={`${css.modalBtn} ${css.active}`} type="submit">LOG IN</button></li>
                    <li><button className={css.modalBtn} type="button" onClick={()=>change('register')}>REGISTER</button></li>
                </ul>
            </form>
        </div>
    )
}