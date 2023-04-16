import React, { useState } from "react";
import Command from "./Command";
import "./Setting.css";
import "./AdvMa.css";

const AdvMa = () => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));

   
  const name = device.name;
  const model = device.model;
  const ecoCh = 10;
  const AsCh = 5;
  const AioCh = 7;
  const devicesName = ["فعال/غیر فعال", "فیوز Aux", "بلندگو خارجی", "برق شهر"];
  const [deviceOp, setDeviceOp] = useState('لیست تماس');
  const [selectorO,setSelectorO]=useState(false)
  let checkListDM = [];
  let checkListRM = [];

  const [devices,setDevices]=useState(0)
  const click_checkBox=(event)=>{
  
    if(event.target.id.includes('x0')){
      if(event.target.checked){
        setDevices(devices+1)

      }else{
        setDevices(devices-1)

      }
      
    }
    if(event.target.id.includes('x1')){
      if(event.target.checked){
        setDevices(devices+2)

      }else{
        setDevices(devices-2)

      }
      
    }
    if(event.target.id.includes('x2')){
      if(event.target.checked){
        setDevices(devices+4)

      }else{
        setDevices(devices-4)

      }
      
    }
    if(event.target.id.includes('x3')){
      if(event.target.checked){
        setDevices(devices+8)

      }else{
        setDevices(devices-8)

      }
      
    }
    if(event.target.id.includes('x4')){
      if(event.target.checked){
        setDevices(devices+16)

      }else{
        setDevices(devices-16)

      }
      
    }
    if(event.target.id.includes('x5')){
      if(event.target.checked){
        setDevices(devices+32)

      }else{
        setDevices(devices-32)

      }
      
    }
    if(event.target.id.includes('x6')){
      if(event.target.checked){
        setDevices(devices+64)

      }else{
        setDevices(devices-64)

      }
      
    }
    if(event.target.id.includes('x7')){
      if(event.target.checked){
        setDevices(devices+128)

      }else{
        setDevices(devices-128)

      }
      
    }
    if(event.target.id.includes('x8')){
      if(event.target.checked){
        setDevices(devices+256)

      }else{
        setDevices(devices-256)

      }
      
    }
    if(event.target.id.includes('x9')){
      if(event.target.checked){
        setDevices(devices+512)

      }else{
        setDevices(devices-512)

      }
      
    }
    if(event.target.id.includes('x10')){
      if(event.target.checked){
        setDevices(devices+1024)

      }else{
        setDevices(devices-1024)

      }
      
    }

  }
  const [report,setReport]=useState(0)
  const click_checkBoxx=(event)=>{

    if(event.target.id.includes('x0')){
      if(event.target.checked){
        setReport(report+1)

      }else{
        setReport(report-1)

      }
      
    }
    if(event.target.id.includes('x1')){
      if(event.target.checked){
        setReport(report+2)

      }else{
        setReport(report-2)

      }
      
    }
    if(event.target.id.includes('x2')){
      if(event.target.checked){
        setReport(report+4)

      }else{
        setReport(report-4)

      }
      
    }
    if(event.target.id.includes('x3')){
      if(event.target.checked){
        setReport(report+8)

      }else{
        setReport(report-8)

      }
      
    }
   
  }

 
  if (model == "ECO20") {
    for (let i = 0; i <= ecoCh; i++) {
      checkListDM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + i} onChange={click_checkBox}/>{" "}
          <label for={"checkBox" + i} >{"شماره" + i}</label>
        </div>
      );
    }
    for (let j = 0; j < devicesName.length; j++) {
      checkListRM.push(
        <div>
          <input type={"checkbox"} id={"checkBoxx" + j} onChange={click_checkBoxx}/>{" "}
          <label for={"checkBoxx" + j}>{devicesName[j]}</label>
        </div>
      );
    }
  }
  if (model == "AS20") {
    for (let i = 0; i <= AsCh; i++) {
      checkListDM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + i} />{" "}
          <label for={"checkBox" + i}>{"شماره" + i}</label>
        </div>
      );
    }
    for (let j = 0; j <= devicesName.lenght; j++) {
      checkListRM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + j} />{" "}
          <label for={"checkBox" + j}>{devicesName[j]}</label>
        </div>
      );
    }
  }
  if (model == "AIO21") {
    for (let i = 0; i <= AioCh; i++) {
      checkListDM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + i} />{" "}
          <label for={"checkBox" + i}>{"شماره" + i}</label>
        </div>
      );
    }
    for (let j = 0; j <= devicesName.lenght; j++) {
      checkListRM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + j} />{" "}
          <label for={"checkBox" + j}>{devicesName[j]}</label>
        </div>
      );
    }
  }


  const change_select_operator = () => {
    setSelectorO(!selectorO);
  };
  const set_level=(event)=>{
    setSelectorO(false)
    setDeviceOp(event.target.innerHTML)
    

  }
  //************لینک */
  const number=device.number;
  const password=device.password;
  const linkRM='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":1:"+report;
  const linkDM='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":0:"+devices;
  const linkLM='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":2:"+(deviceOp=='همه' ? 0 :(deviceOp=='لیست تماس ها'?'1':(deviceOp=="فقط مدیران" ? '2':(deviceOp=='فقط مدیر1' ? '3':''))));


  return (
    <div className="AdvMa">
      <Command name={name} isIcon={true}></Command>
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton"></div>
            <div className="titlPart-Setting">
              <p style={{}}>{name}</p>
            </div>
          </div>

          <div className="conten-AdvMa">
            <div className="part-AdvMa">
              <div className="part1-AdvMa " id={them == "white" ? "lightnb_bg" : ""}>
                <div className="title-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>مدیران دستگاه</div>
                <div className="checkBox-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>{checkListDM}</div>
                <div className="Button-AdvMa">
                  <a href={linkDM}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
                </div>
              </div>
              <div className="part1-AdvMa" id={them == "white" ? "lightnb_bg" : ""}>
                <div className="title-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>گزارشات مدیر</div>
                <div className="checkBox-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>{checkListRM}</div>
                <div className="Button-AdvMa">
                  <a href={linkRM}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
                </div>
              </div>
            </div>
            <div className="part-AdvMa" >
              <div className="part2-AdvMa" id={them == "white" ? "lightnb_bg" : ""}>
                <div className="title-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>
                  سطح دسترسی اپلیکیشن و تماس صوتی
                </div>
                <div className="level-AdvMa padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
                  <span>دسترسی</span>
                  <div className="item-Information">
                    <div
                      className="part6Inp-AddDevice part6Inp-Information"
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
                        <ul style={{ height: selectorO ? "" : "0px" }}>
                          <li onClick={set_level}>همه</li>{" "}
                          <li onClick={set_level}>لیست تماس ها</li>{" "}
                          <li onClick={set_level}>فقط مدیران</li>{" "}
                          <li onClick={set_level}>فقط مدیر1</li>{" "}
                        </ul>{" "}
                      </span>{" "}
                      <span className="titlInp-AddDevice"> سطح تماس </span>{" "}
                    </div>{" "}
                  </div>
                </div>
                <div className="Button-AdvMa">
                  <a href={linkLM}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvMa;
