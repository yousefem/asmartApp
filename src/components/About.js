import React from "react";
import './About.css'

const About=()=>{
    let them=localStorage.getItem('theme');
    const go_to_home=()=>{
        window.history.back()

    }
    return(
        <div className="About">
             
            <div  className='bgb-Setting' id={them==='white' ? 'lightnb_bg':''}>
                <div className="header-Setting">
                    <div className="backPart-Setting" onClick={go_to_home}>
                    

                    </div>
                    <div className="titlPart-Setting" >
                    

                    </div>
                    <div className="refresh">

                    

                    </div>

                </div>
                <div className="part1-About"  id={them=='white' ? 'light_bg':''}>
                    <p >A.SMART به عنوان ارائه‌دهنده محصولات و خدمات حوزه‌ی الکترونیک، مفتخر است که خدمات مشاوره و طراحی، تولید و پشتیبانی را با اتکاء بر سرمایه انسانی متخصص و آموزش دیده در اختیار مشتریان خود قرار دهد. استفاده از به‌روزترین دانش و تکنولوژی موجود و تطابق با استانداردها و تأییدیه‌های فنی-تجاری ضامن کارایی راهکارهای پیشنهادی در صنایع کلیدی و بزرگ است. A.SMART رسالت خود را در ارائه‌ی به‌روزترین دانش فنی الکترونیک در ساخت بردهای الکترونیک برای صنعتگران با بالاترین دقت و کیفیت ممکن می‌داند.</p>
                    <div className="conect-About">
                        

                            <div className="itemConnect-About">
                                <div className="icon-About"  id="mobileIcon-About"></div>
                                <div className="text-About">
                                    <div className="name-About" >
                                        امور نمایندگان
                                    </div>
                                    <div className="name-About">
                                    09120594626
                                    </div>
                                </div>
                            </div>

                            <div className="itemConnect-About">
                                <div className="icon-About" id="mobileIcon-About"></div>
                                <div className="text-About">
                                    <div className="name-About">
                                        پشتیبانی فنی 
                                    </div>
                                    <div className="name-About">
                                    09051864626
                                    </div>
                                </div>
                            </div>
                            <div className="itemConnect-About">
                                <div className="icon-About" id="mobileIcon-About"></div>
                                <div className="text-About">
                                    <div className="name-About">
                                        تلفن ثابت
                                        
                                    </div>
                                    <div className="name-About">
                                    03133932270
                                    </div>
                                </div>
                            </div>
                            <div className="itemConnect-About">
                                <div className="icon-About" id="emailIcon-About"></div>
                                <div className="text-About">
                                    <div className="name-About">
                                        ایمیل
                                    </div>
                                    <div className="name-About" >
                                    info@asmart.ir
                                    </div>
                                </div>
                            </div>
 
                        
                       
                    </div>

                </div>

                
            </div>

        </div>
    )
}

export default About;