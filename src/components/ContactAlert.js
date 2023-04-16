import React, { useState } from "react";
import './ContactAlert.css';
import {useSelector,useDispatch} from 'react-redux';
import {HideCommand, VisibleCommand} from '../actions/index';
import { Link } from "react-router-dom";
const ContactAlert=(props)=>{
    let them=window.localStorage.getItem('theme')
    let device=JSON.parse(window.localStorage.getItem('device'))
    const dispatch=useDispatch();
    dispatch(HideCommand());
    const numberReceiver=device.number;
    const password=device.password;
    const[selectPort,setSelectPort]=useState(false);
    const [typeCall,setTypeCall]=useState('فقط تماس');
    const [typeCallC,setTypeCallC]=useState('c');

    const number=device.number;
    const model=device.model;
    const access=device.access;
    const part=device.part;
    const AIO21PT1 =
    model == "AIO21 PT" && access == "مدیر"
      ? "A:"
      : model == "AIO21 PT" && access == "کاربر"
      ? "p" + part + ":"
      : "";

    const set_type_call=(event)=>{
        // let type=event.target.innerHTML;
        // alert(event.target.id);
        setTypeCallC(event.target.id)
        setTypeCall(event.target.innerHTML);
        
        setSelectPort(false)

    }
    const close_selectore=()=>{
        setSelectPort(false);
    }

    const [numberSaver,setNumberSaver]=useState('');
    let saveNumber='sms:'+numberReceiver+'?&body=*'+AIO21PT1+password+'%23num:'+props.index+':'+numberSaver+':'+typeCallC;

    const save_number=()=>{
        props.close_alert()
        
    }

    const change_select_port=()=>{
        setSelectPort(!selectPort);
    }
    return(
       <div className="AddDevice"><div className="ContactAlert">
        
            <div className="alert-ContactAlert" id={them=='white' ? 'lightnb_bg':''}>
                <div  className="part-ContactAlert part1-ContactAlert">
                    <div className="title-ContactAlert" id={them=='white' ? 'title_light':''}>
                        
                        <p >ذخیره شماره جدید</p>
                    </div>
                    



                </div>
                <div className="part-ContactAlert" id="part2-ContactAlert">

                    <div className="inputPart-ContactAlert" onClick={close_selectore}>
                        <input type="number" id={them=='white' ? 'lightButtonnb_bg':''} onChange={(event)=>{setNumberSaver(event.target.value)}}/>
                    </div>
                    
                    <div className="part6Inp-AddDevice part6Inp-ContactAlert" >
                        <span className='selectModel-AddDevice selectModel-AddDevice'   id={them=='white' ? 'lightButton_bg':''}>
                            <div onClick={change_select_port} className='partIconAdd_CA'><span className={them=='white'?"moreIconL-AddDevice":'moreIcon-AddDevice'}></span><span className='selected-AddDevice'>{typeCall}</span></div>
                                <ul style={{height:selectPort ? '':'0px'}}>
                                    <li onClick={set_type_call} id='c'>فقط تماس</li>
                                    <li onClick={set_type_call} id='s'>فقط پیامک</li>
                                    <li onClick={set_type_call} id='cs'>پیامک و تماس</li>
                                    <li onClick={set_type_call} id='e'>اضطراری</li>
                                    <li onClick={set_type_call} id='l'>شهری</li>
                            </ul>
                        </span>
                        <span className='titlInp-AddDevice' id={them=='white' ? 'light_text':''} >نوع تماس</span>
                    </div>

                </div>
                <div className="part-ContactAlert" id="part3-ContactAlert">
                    <div className="controlers-ContactAlert" >
                        <a href={saveNumber} ><div className="send-ContactAlert" onClick={save_number} id={them=='white' ? 'lightButton_bg':''}>
                            <p id={them=='white'?"light_text":''}>ذخیره</p>


                        </div></a>
                       <div className="cancle-ContactAlert"  onClick={props.close_alert} id={them=='white' ? 'lightButton_bg':''}>
                            <p>انصراف</p> 
                            
                        </div>
                    </div>

                </div>
                </div>

        </div></div>)
}

export default ContactAlert;