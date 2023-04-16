import React from 'react';
import './ChargeAlert.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState } from 'react';

const ChargeAlert=(props)=>{
    let them=window.localStorage.getItem('theme')
    let device=JSON.parse(window.localStorage.getItem("device"))
    const name=device.name;
    const operator=device.operator;
    const password=device.password;

    const number = device.number;

    const model=device.model;
    const access=device.access;
    const part=device.part;
    // const operator=device.operator;
    const AIO21PT1 =
    model == "AIO21 PT" && access == "مدیر"
      ? "A:"
      : model == "AIO21 PT" && access == "کاربر"
      ? "p" + part + ":"
      : "";

    const [passwordCharge,setPasswordCharge]=useState('');
    // const ChargeCode=(operator=='همراه اول' ? '*140*%23':(operator=='ایرانسل' ? '*141*':(operator=='رایتل' ? '*140*':'')));
    

    let chargeLink='sms://'+number+'?&body=*'+AIO21PT1+password+'%23charge:'+props.ChargeCode+passwordCharge;


    const set_charge_code=(event)=>{
        setPasswordCharge(event.target.value);

    }
    

    return (
      <div className="ChargeAlert">
            <div className="alert-ChargeAlert" id={them=='white' ? 'lightnb_bg':''}>
                <div className="part-ChargeAlert" id="part1-ChargeAlert">
                    <div className="title-ChargeAlert" id={them=='white' ? 'title_light':''}>
                        <p>کد شارژ را وارد کنید</p>
                    </div>
                    



                </div>
                <div className="part-ChargeAlert" id="part2-ChargeAlert">

                    <div className="inputPart-ChargeAlert">
                        <input type="number" onChange={set_charge_code} id={them=='white' ? 'lightButtonnb_bg':''} />
                    </div>

                </div>
                <div className="part-ChatrgeAlert" id="part3-ChargeAlert">
                    <div className="controlers-ChargeAlert">
                        <a href={chargeLink+'%23'}><div className="send-ChargeAlert" onClick={props.close_alert} id={them=='white' ? 'lightButtonnb_bg':''}>
                            <p style={{fontSize:'small'}}  id={them=='white' ? 'light_text':''}>ارسال</p>


                        </div></a>
                         <div className="cancle-ChargeAlert" onClick={props.close_alert} id={them=='white' ? 'lightButtonnb_bg':''}>
                           <p style={{fontSize:'small'}}>انصراف</p>
                            
                        </div>
                    </div>

                </div>
                
        
    </div></div>
    )
}

export default ChargeAlert;