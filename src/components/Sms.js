import React from 'react'
import './Sms.css';
import SmsPart from './SmsPart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useSelector,useDispatch} from 'react-redux';
import {HideCommand, VisibleCommand} from '../actions/index';
// import { Link } from 'react-router-dom';
import Command from './Command';
import { useState } from 'react';


const Sms=(props)=>{
    let them=window.localStorage.getItem('theme')
    let device=JSON.parse(window.localStorage.getItem('device'))
   
    const name=device.name
    const dispatch=useDispatch();
    const [data,setData]=useState(props.data);

    const [smsSelector,setSmsSelector]=useState(0);

    const [refresh,setRefresh]=useState(false)
    const set_sms_selector=(index)=>{
        setSmsSelector(index);

    }
    dispatch(HideCommand())

    const go_to_setting=()=>{
        window.history.back()

    }
   
 
    return(
        <div className="Sms"><div  className='bg-Setting'><div  className='bgb-Setting' id={them=='white' ? 'light_bg':''}>
            {/* <Command name={name} isIcon={true}  goto='setting'></Command> */}
                
            <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}>
                    

                </div>
                <div className="titlPart-Setting" >
                    <p style={{fontWeight:'400',fontSize:'medium'}}>{name}</p>

                </div>
                <div className="refresh">
                    <div className=""></div>
                    
                    <div className=''>
                        

                    </div>
                </div>

            </div>
            

            <div id="part1-Sms">
                {data.map((item) => {
                    return(
                        <SmsPart text={item.text} index={item.number} name={item.name} smsSelector={smsSelector} setSmsSelecor={set_sms_selector}></SmsPart>
                    )
                    
                })}
            </div>



            
            <div className="blure"></div></div></div>
        </div>
    )
}

export default Sms;


