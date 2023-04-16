import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './Login.css';
import { login } from "../actions";

const Login=()=>{
    let them=localStorage.getItem('theme')
    const isLogin = JSON.parse(window.localStorage.getItem("isLogin"));
    const password1 = localStorage.getItem("password");
    // (password1 == null || password1 == undefined || password1 == "" || isLogin!=0) ? (window.location.replace('/Page1')):''

 if(isLogin!=0){
    window.location.replace('/Page1')

 }
   
    
    const oldPassword=localStorage.getItem('password');
    const [password,setPassword]=useState(null);
    
    const [error,setError]=useState('')
    
    const dispatch=useDispatch()

    const set_password=(event)=>{
        setPassword(event.target.value)

    }
    const check_password=()=>{
        
        if(password==oldPassword){
            window.localStorage.setItem("isLogin",1);
            window.location.replace('/Page1.html');


        }else{
            setError('رمز وارد شده درست نیست')
        }
    }

    return(
        <div className="Login">
                <div  className='bgb-Setting' id={them=='white' ? 'light_bg':''}>
                    <div className="contaner-Login " id={them=='white' ? 'lightnb_bg':''}>
                        <form >
                            <div className="title-Login" id={them=='white' ? 'title_light':''}>
                                <p>رمز ورود را وارد کنید </p>
                            </div>
                            <div className="input-Login" >
                                <input  type="text" autocomplete="off" onChange={set_password}  id={them=='white' ? 'lightButtonnb_bg':''}/>

                            </div>
                            <div className="error">
                                <p>{error}</p>
                            </div>
                            <div className="controller-Login">
                                <input type='button'  value='ورود' onClick={check_password} id={them=='white' ? 'lightButtonnb_bg':''}/>
                            </div>

                        </form>

                     </div>

                </div>
            </div>
    )
}

export default Login;