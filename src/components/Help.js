import React from "react";
import './Help.css'

const Help=()=>{
    let them=localStorage.getItem('theme');
    const go_to_home=()=>{
        window.history.back()

    }
    return(
        <div className="Help">
             
            <div  className='bgb-Setting' id={them==='white' ? 'lightnb_bg':''}>
                <div className="header-Setting">
                    <div className="backPart-Setting" onClick={go_to_home}>
                    

                    </div>
                    <div className="titlPart-Setting" >
                    

                    </div>
                    <div className="refresh">

                    

                    </div>

                </div>
                <div className="part1-Help"  id={them=='white' ? 'light_bg':''}>

                </div>

                
            </div>

        </div>
    )
}

export default Help;