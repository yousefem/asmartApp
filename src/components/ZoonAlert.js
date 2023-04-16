import React, { useState } from "react";
import './ZoonAlert.css';
import {useSelector,useDispatch} from 'react-redux';
import {HideCommand, VisibleCommand} from '../actions/index';
const ZoonAlert=(props)=>{
    let them=window.localStorage.getItem('theme')
    let device=JSON.parse(window.localStorage.getItem("device"))
    const dispatch=useDispatch();
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
    const [name,setName]=useState('')


    const name_zoon=(event)=>{
        setName(event.target.value);

    }
    dispatch(HideCommand());
    return(
        <div className="ZoonAlert">
            <div className="alert-ZoonAlert" id={them=='white' ? 'lightnb_bg':''}>
                <div className="part-ZoonAlert" id="part1-ZoonAlert">
                    <div className="title-ZoonAlert" id={them=='white' ? 'title_light':''}>
                        <p>تغییر نام زون</p>
                    </div>
                    



                </div>
                <div className="part-ZoonAlert" id="part2-ZoonAlert">

                    <div className="inputPart-ZoonAlert">
                        <input type="numberic" onChange={name_zoon}  id={them=='white' ? 'lightButtonnb_bg':''}/>
                    </div>

                </div>
                <div className="part-ZoonAlert" id="part3-ZoonAlert">
                    <div className="controlers-ZoonAlert">
                        <a href={'sms:'+number+'?&body=*'+AIO21PT1+password+'%23'+'ZN:'+props.index+':'+name}><div className="send-ZoonAlert"  onClick={props.close_alert} id={them=='white' ? 'lightButtonnb_bg':''}>
                            <p id={them=='white' ? 'light_text':''}>ذخیره</p>


                        </div></a >
                        
                        <div className="cancle-ZoonAlert" id={them=='white' ? 'lightButtonnb_bg':''} onClick={props.close_alert} >
                            <p >انصراف</p>
                            
                        </div>
                    </div>

                </div>
                </div>
            

        </div>
    )

}

export default ZoonAlert;