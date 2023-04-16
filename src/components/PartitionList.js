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
import './PartitionList.css'

const PartitionList=()=>{
    let device=JSON.parse(window.localStorage.getItem("device"))
    const number =device.number;
    const password =device.password;

    const data=device.partitions;
    const access=device.access;
    const part=device.part;
    

    
    const [smsSelector,setSmsSelector]=useState(0);
    const set_sms_selector=(index)=>{
        setSmsSelector(index);

    }

    

    console.log('partitionList',data);
    const name=useSelector(state=>state.Device.name)
    let them=window.localStorage.getItem('theme')
    const go_to_setting=()=>{
        window.history.back()

    }
    return(
        <div className="Sms"><div  className='bg-Setting'><div  className='bgb-Setting' id={them=='white' ? 'light_bg':''}>
            {/* <Command name={name} isIcon={true}  goto='setting'></Command> */}
                
            <div className="header-Setting">
            <div className="helpButton" >
                    

                </div>
                <div className="titlPart-Setting" >
                    <p style={{fontWeight:'400',fontSize:'medium'}}>{name}</p>

                </div>

                <a href={'sms:'+number+'?&body=*'+(access==='مدیر' ? 'A:':(access==='کاربر'?'p'+part+':':''))+password+'%23NAME?'}><div className="refresh">
                <div className="icon-refresh"></div>
                    
                    <div className="text-refresh">
                        

                    </div>
                </div></a>

            </div>
            

            <div id="part1-Sms">
                {
                    access=='مدیر'?
                (data.map((item,index) => {
                    return(
                        <SmsPart text={item.name} index={index} name={item.name} smsSelector={smsSelector} setSmsSelecor={set_sms_selector}></SmsPart>
                    )
                    
                })):<SmsPart text={data[part-1].name} index={part} name={data[part-1].name} smsSelector={smsSelector} setSmsSelecor={set_sms_selector}></SmsPart>}
            </div>



            
            <div className="blure"></div></div></div>
        </div>
    )
}

export default PartitionList;