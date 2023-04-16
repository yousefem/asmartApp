import React, { useState } from 'react';
import './Contacts.css';
import Contact from './Contact';
import ContactAlert from './ContactAlert';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Command from './Command';

const Contacts=(props)=>{
    let them=window.localStorage.theme;
    let device=JSON.parse(window.localStorage.getItem('device'));
    const name=device.name;
    const number=device.number;
    const password=device.password;
    const access=device.access;
    const part=device.part;
    const [Alert,setAlert]=useState(false);
    const close_contact_alert=()=>{
        setAlert(false)
    }
    const go_to_setting=()=>{
        props.changePage('setting');
        window.history.back()
    }
    const contact_alert=()=>{
        setAlert(true)
    }
   
    return(
    <div className="Contacts">
        {/* <Command name={name} isIcon={true}></Command> */}
        <div  className='bg-Setting'><div  className='bgb-Setting'  id={them=='white' ? 'light_bg':''}>
            
            <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}>
               
                    

                </div>
                <div className="titlPart-Setting" >
                    <p style={{fontWeight:'400',fontSize:'medium'}}>{name}</p>

                </div>
                <a href={'sms:'+number+'?&body=*'+(access==='مدیر' ? 'A:':(access==='کاربر' ? ('p'+part+':'):''))+password+'%23tellist?'}><div className="refresh">
                <div className="icon-refresh"></div>
                    

                </div></a>

            </div>



            
            <div className="part-Contacts" id='part1-Contacts'>
                {
                    props.data.map(contact=>{
                        return <Contact data={contact}></Contact>
                    })
                }

            </div>
            

            {Alert ?<ContactAlert close_alert={close_contact_alert}></ContactAlert>:''}
                </div> 
            </div> 
            </div>
            


                
        
    )

}

export default Contacts;