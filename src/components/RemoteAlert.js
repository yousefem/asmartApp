import React from "react";
import './RemoteAlert.css';
import {useSelector,useDispatch} from 'react-redux';
import {HideCommand, VisibleCommand} from '../actions/index';
import { useState } from "react";

const RemoteAlert=(props)=>{
    let them=window.localStorage.getItem('theme');
    let device=JSON.parse(window.localStorage.getItem("device"))
    const dispatch=useDispatch();
    
    const [remoteName,setRemoteName]=useState('');

    const number=device.number;
    const password=device.password;
    const model=device.model;
    const access=device.access;
    const part=device.part;
    const AIO21PT1 =
    model == "AIO21 PT" && access == "مدیر"
      ? "A:"
      : model == "AIO21 PT" && access == "کاربر"
      ? "p" + part + ":"
      : "";
    
    const new_remote_name=(event)=>{
        setRemoteName(event.target.value);

    }
    dispatch(HideCommand())
    return(
        <div className="RemoteAlert">
             <div className="alert-RemoteAlert" id={them=='white' ? 'lightnb_bg':''}>
                <div className="part-RemoteAlert" id="part1-RemoteAlert" >
                    <div className="title-RemoteAlert" id={them=='white' ? 'title_light':''}>
                        <p>تغییر نام ریموت</p>
                    </div>
                    



                </div>
                <div className="part-RemoteAlert" id="part2-RemoteAlert">

                    <div className="inputPart-RemoteAlert">
                        <input type="numberic" onChange={new_remote_name} id={them=='white' ?  'lightButtonnb_bg':''}/>
                    </div>

                </div>
                <div className="part-RemoteAlert" id="part3-RemoteAlert">
                    <div className="controlers-RemoteAlert">
                        <a  href={'sms:'+number+'?&body=*'+AIO21PT1+password+'%23RMT:'+'NM'+':'+props.index+':'+remoteName}><div className="send-RemoteAlert" onClick={props.change_alert} id={them=='white' ? 'lightButtonnb_bg':''}>
                            
                            <span>ذخیره</span>


                        </div></a>
                        <div className="cancle-RemoteAlert" onClick={props.change_alert} id={them=='white' ? 'lightButtonnb_bg':''}>
                            <span>انصراف</span>
                            
                        </div>
                    </div>

                </div>
                </div>

        </div>
    )
}


export default RemoteAlert;