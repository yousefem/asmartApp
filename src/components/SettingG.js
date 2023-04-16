import React from "react";
import './SettingG.css';
// import { Link } from 'react-router-dom';
import { useState } from "react";


const SettingG = () => {
    // let them=window.localStorage.getItem('theme');
    const oldPassword=localStorage.getItem('password')
    const [nwePassword,setNewPassword]=useState(oldPassword);
    const green='#0afc96';
    const [error,setError]=useState('');
    let them=window.localStorage.getItem('theme')


    const set_new_password=(event)=>{
        setNewPassword(event.target.value);
    }
    const send_new_password=()=>{
        if(nwePassword!=null){
            window.localStorage.setItem('password',nwePassword);
        }
        
        
        window.location.replace('./Page1.html');
       
    }

    const clear_cache=()=>{
        if(window.navigator.onLine){
        
        caches.delete('static0002')
        .then(res=>{
            if(res){
             
                window.location.replace('./');
            }else {
                

            }
        });
       }else{
        setError('کاربر گرامی جهت بروز رسانی نرم افزار اینترنت خود را روشن کنید و دو باره تلاش کنید')

       }
        
        
        
 
       
    }
    const go_to_page1=()=>{
        window.history.back()
    }
    const set_them=(event)=>{
 
     
        if( them=='white'){
        window.localStorage.setItem('theme','black');
        them='black'
        }else if(them=='black' || them==null){
            window.localStorage.setItem('theme','white')
            them='white'
        }
        event.target.value=(them==='white' ?'روشن' :"تاریک")

        
    }
    return(
        <div className="SettingG">
            <div  className='bgb-Setting' id={them==='white' ? 'light_bg':''}>

                <div className="header-Setting">
                   <div className="backPart-Setting" onClick={go_to_page1}>
                    

                    </div>
                    <div className="titlPart-Setting" >
                        <p style={{fontWeight:'400',fontSize:'medium'}}></p>

                    </div>
                    <div className="refresh">
                        <div className=""></div>
                    
                        <div className=''>
                        
                        

                        </div>
                    </div>
                </div>

                <div className="part-SettingG" id={them==='white' ? 'lightnb_bg':''}>

                <div className="item-SettingG">
                        <input type="text" autoComplete="off" className="password-SettingG" id={them=='white'? 'lightButtonnb_bg':''} defaultValue={oldPassword} onChange={set_new_password}/>
                        <span >رمز نرم افزار</span>
                    </div>
                    <div className="item-SettingG">
                        <input type='button' onClick={set_them} className='changeThem' id={them==='white' ? 'lightButton_bg':''} value={them==='white' ? 'روشن':'تاریک'} />
                        <span>: تم اپلیکیشن</span>
                    </div>
                    <div className="item-SettingG">
                        <a href={''}><input type='button' onClick={clear_cache} className={them=='white'?'updateL-SettigG':'update-SettigG'} id={them=='white' ? 'lightButton_bg':''} /></a>
                        <span>1.0.4:ارتقا به آخرین نسخه</span>
                    </div>


                    <div id="error-SettingG" style={{color:'red'}}>{error}</div>
                    
                    
                    <div><button onClick={send_new_password} id={them==='white' ? 'lightButton_bg':''}>ذخیره</button></div>
                    
                </div>

            </div>
        </div>
    )
}

export  default SettingG