import React,{useState} from "react";
import Command from "./Command";
import './AdvOt.css'

const AdvOt = () => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  const name = device.name;
  const [selectorO,setSelectorO]=useState(false)

const [deviceOp, setDeviceOp] = useState('برای انتخاب کلیک کنید');
const close_all_seledtor=()=>{
        

  setSelectorO(false)

}
const set_level1=(event)=>{
setDeviceOp(event.target.innerHTML)
setSelectorO(false);


}
const change_select_operator = () => {
close_all_seledtor()
setSelectorO(!selectorO);
};
const [call,setCall]=useState(0)
const click_checkBoxx=(event)=>{

  if(event.target.id.includes('0')){
    if(event.target.checked){
      setCall(call+1)

    }else{
      setCall(call-1)

    }
    
  }
  if(event.target.id.includes('1')){
    if(event.target.checked){
      setCall(call+2)

    }else{
      setCall(call-2)

    }
    
  }


 
}

  //*****لینک */
  const number=device.number;
  const password=device.password;
  const linkLC='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":3:"+(deviceOp==='اول پیامک' ? '0' :(deviceOp==='اول تماس'?"1":''));
  const linkVC='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":11:"+call;
  const linkDS='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":16";

  return (
    <div className="AdvOt">
      <Command name={name} isIcon={true}></Command>
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton"></div>
            <div className="titlPart-Setting">
              <p style={{}}>{name}</p>
            </div>
          </div>

          <div className="content-AdvOt">
            <div className="part-AdvOt" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvOt" id={them === "white" ? "borederBottom_Adv" : ""}>
                اولویت تماس 

              </div>
              <div className="selector-AdvOt padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
              <div className="item-Information marginTop" id="z1" >
                    <div
                      className="part6Inp-AddDevice part6Inp-Information "
                      style={{ color: them == "white" ? "black" : "" }}
                    >
                      <span
                        className="selectModel-AddDevice"
                        id={them == "white" ? "lightButtonnb_bg" : ""}
                      >
                        <div
                          onClick={change_select_operator}
                          className="partIconAdd_CA"
                        >
                          <span
                            className={
                              them == "white"
                                ? "moreIconL-AddDevice"
                                : "moreIcon-AddDevice"
                            }
                          ></span>{" "}
                          <span className="selected-AddDevice">
                            {" "}
                            {deviceOp}{" "}
                          </span>{" "}
                        </div>{" "}
                        <ul  style={{ height: selectorO ? "" : "0px" }}>
                        <li onClick={set_level1}>اول پیامک</li>
                        <li onClick={set_level1}>اول تماس</li>


                        </ul>{" "}
                      </span>{" "}
                      <span className="titlInp-AddDevice" >اولویت</span>{" "}
                    </div>{" "}
                  </div>

              </div>
              <div className="button-AdvOt">
                <a href={linkLC}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
              </div>
            </div>
            <div className="part-AdvOt" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvOt" id={them === "white" ? "borederBottom_Adv" : ""}>
                تماس صوتی

              </div>
              <div className="selector-AdvOt padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
                <div><label htmlFor="sim0-AdvOt">سیمکارت</label><input type="checkbox" id="sim0-AdvOt" onChange={click_checkBoxx}/></div>
                <div><label htmlFor="phone1-AdvOt">خط تلفن</label><input type="checkbox" id="phone1-AdvOt" onChange={click_checkBoxx}/></div>

              </div>
              <div className="button-AdvOt">
                <a href={linkVC}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
              </div>
            </div>
            <div className="part-AdvOt" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvOt" id={them === "white" ? "borederBottom_Adv" : ""}>
                بازگشت به تنظیمات کارخانه

              </div>
              <div className="selector-AdvOt padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
                <p>هشدار!!</p>
                <p>تمامی تنظیمات به حالت پیش فرض و لیست تماس پاک خواهد شد</p>

              </div>
              <div className="button-AdvOt">
                <a href={linkDS}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvOt;
