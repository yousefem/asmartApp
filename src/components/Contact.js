import React, { useState } from 'react';
import './Contact.css';
import ContactAlert from './ContactAlert';
import {useSelector,useDispatch} from 'react-redux';
import {HideCommand, VisibleCommand} from '../actions/index';
import { Link } from 'react-router-dom';

const Contact=(props)=>{
    const dispatch=useDispatch();
    let device=JSON.parse(window.localStorage.getItem('device'))
    let them=window.localStorage.getItem('theme')
    dispatch(VisibleCommand());
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
    const [ALert,setAlert]=useState(false);

    const close_alert=()=>{
        setAlert(false);

    }

    const open_alert=()=>{
        setAlert(true);
        
      

    }


    

    let deleteContact='sms:'+number+'?&body=*'+AIO21PT1+password+'%23num:'+props.data.index+':'+'del';
    return(
        <div className="Contact" id={them=='white' ? 'lightnb_bg':''}>
            {ALert ? <ContactAlert close_alert={close_alert} index={props.data.index} ></ContactAlert> :''}
            <div className="part-Contact" id='part1-Contact'>
                <div className="addIcon-Contact">
                    <a href={deleteContact}><button id={them=='white' ? 'deletL-Contact':'delet-Contact'}></button></a>

                </div>
                <div className="addIcon-Contact">
                 <button onClick={open_alert} id={them=='white' ? 'editL-Contact':'edit-Contact'} > </button>

                </div>

            </div>
            <div className="part-Contact" id='part2-Contact'>
                <div className="icon-Contact">
                    <span>{props.data.index}</span>

                </div>
                <div className="text-Contact">
                <div className="title-Contact">
                    <p style={{fontSize:'10.5pt' ,fontWeight:'600'}}>{props.data.number}</p>

                </div>
                <div className="description-Contact">
                    <p style={{fontSize:'samll',fontWeight:'300'}}>{(props.data.description==='C' ? 'فقط تماس':(props.data.description==='S' ? 'فقط پیامک':(props.data.description==='CS' ?'تماس و پیامک' :(props.data.description==='E' ? 'اظطراری':(props.data.description==='L'?'شهری':'خالی')))))}</p>

                </div>
                </div>

            </div>

        </div>
    )
}

export default Contact;