import React, { useState } from "react";
import Command from "./Command";
import "./AdvAj.css";
const AdvAj = () => {

  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  const name = device.name;
  const [AjirTime, setAjirTime] = useState("2");
  const [loudAjir, setLoudAjir] = useState("1");
  const [RepeatAjir, setRepeatAjir] = useState();
  const set_time_ajir = (event) => {
    setAjirTime(event.target.value);
  };
  const set_loud_ajir = (event) => {
    setLoudAjir(event.target.value);
  };
  const set_repeat_ajir = (event) => {
    setRepeatAjir(event.target.value);
  };
  const [oneBeep,setOneBeep]=useState(0)
  const click_checkBox=(event)=>{
    switch (event.target.id){
      case 'outSpeaker':
        if(event.target.checked){
          setOneBeep(oneBeep+1)
        }else{
          setOneBeep(oneBeep-1)

        }
        break;
      case 'enterSpeaker':
        if(event.target.checked){
          setOneBeep(oneBeep+2)
        }else{
          setOneBeep(oneBeep-2)

        }
        break;
        default:
        break;
    }

  }
  //*****لینک */
  const number=device.number;
  const password=device.password;
  const linkAT='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":4:"+AjirTime;
  const linkLA='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":5:"+loudAjir;
  const linkRA='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":6:"+RepeatAjir;
  const linkOB='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":7:"+oneBeep;



  return (
    <div className="AdvAj">
      <Command name={name} isIcon={true}></Command>
      <div className="bg-Setting">
        <div className="bgb-Setting " id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton"></div>
            <div className="titlPart-Setting">
              <p>{name}</p>
            </div>
          </div>
          <div className="content-AdvAj scroll">
            <div className="part-AdvAj" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvAj" id={them === "white" ? "borederBottom_Adv" : ""}>زمان آژیر</div>
              <div className="range-AdvAj padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
                <input
                  onChange={set_time_ajir}
                  defaultValue={"0"}
                  type="range"
                  id="points"
                  name="points"
                  min="2"
                  max="10"
                />
                <div>
                  <span>{AjirTime}</span>
                </div>
              </div>
              <div className="button-AdvAj">
                <a href={linkAT}><button
                  className="save-Infofrmation margin_AdvBu"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  ارسال
                </button></a>
              </div>
            </div>
            <div className="part-AdvAj" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvAj" id={them === "white" ? "borederBottom_Adv" : ""}>بلندی صدای آژیر</div>
              <div className="range-AdvAj padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
                <input
                  onChange={set_loud_ajir}
                  type="range"
                  defaultValue={"0"}
                  id="points"
                  name="points"
                  min="1"
                  max="10"
                />
                <div>
                  <span>{loudAjir}</span>
                </div>
              </div>
              <div className="button-AdvAj">
                <a href={linkLA}><button
                  className="save-Infofrmation margin_AdvBu"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  ارسال
                </button></a>
              </div>
            </div>
            <div className="part-AdvAj" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvAj"id={them === "white" ? "borederBottom_Adv" : ""}>دفعات آژیر</div>
              <div className="range-AdvAj padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
                <input
                  onChange={set_repeat_ajir}
                  type="range"
                  id="points"
                  name="points"
                  min="0"
                  defaultValue={"0"}
                  max="10"
                />
                <div>
                  <span>
                    {RepeatAjir != "0" ? RepeatAjir : "(غیر فعال (نامحدود"}
                  </span>
                </div>
              </div>
              <div className="button-AdvAj">
                <a href={linkRA}><button
                  className="save-Infofrmation margin_AdvBu"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  ارسال
                </button></a>
              </div>
            </div>

            <div className="part-AdvAj " id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvAj" id={them === "white" ? "borederBottom_Adv" : ""}>تک بوق</div>
              <div className="range-AdvAj" id={them === "white" ? "borederBottom_Adv" : ""}>
                <div>
                  <label for={"outSpeaker"}>بلند گو خارجی</label>
                  <input type="checkbox" id="outSpeaker" onChange={click_checkBox}/>
                </div>
                <div>
                  <label for={"enterSpeaker"} >بلند گو داخلی</label>
                  <input type="checkbox" id="enterSpeaker"  onChange={click_checkBox}/>
                </div>
              </div>
              <div className="button-AdvAj padding_AdvSe">
                <a href={linkOB}><button
                  className="save-Infofrmation margin_AdvBu"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  ارسال
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvAj;
