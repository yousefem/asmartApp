import React ,{useState} from "react";
import Command from "./Command";
const AdvZo = () => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  const name = device.name;
  const zones=device.zones
  
  const model = device.model;
  const ecoCh = 10;
  const AsCh = 5;
  const AioCh = 7;
  const zonesName = zones;

  let checkListDM = [];
  let checkListRM = [];

  const [deviceOp, setDeviceOp] = useState('برای انتخاب کلیک کنید');
  const [selectorO,setSelectorO]=useState(false)
  const [selectorO1,setSelectorO1]=useState(false)
const close_all_seledtor=()=>{
    setSelectorO(false)
    setSelectorO1(false)

  }
  const [valueIndex,setValueIndex]=useState('');
  const set_remote=(event)=>{
    setDeviceOp(event.target.innerHTML)
    setSelectorO(false);
    setValueIndex(event.target.id)


  }

  const change_select_operator = () => {
    close_all_seledtor()
    setSelectorO(!selectorO);
  };
//   *************************************
const [deviceOp1, setDeviceOp1] = useState('برای انتخاب کلیک کنید ');

const set_level=(event)=>{
  setDeviceOp1(event.target.innerHTML)
  setSelectorO1(false);



}
const change_select_operator1 = () => {
    close_all_seledtor()
    setSelectorO1(!selectorO1);
};
//************** */
const [zoneA,setZoneA]=useState(0)
const click_checkBox=(event)=>{

  if(event.target.id.includes('0')){
    if(event.target.checked){
      setZoneA(zoneA+1)

    }else{
      setZoneA(zoneA-1)

    }
    
  }
  if(event.target.id.includes('1')){
    if(event.target.checked){
      setZoneA(zoneA+2)

    }else{
      setZoneA(zoneA-2)

    }
    
  }
  if(event.target.id.includes('2')){
    if(event.target.checked){
      setZoneA(zoneA+4)

    }else{
      setZoneA(zoneA-4)

    }
    
  }
  if(event.target.id.includes('3')){
    if(event.target.checked){
      setZoneA(zoneA+8)

    }else{
      setZoneA(zoneA-8)

    }
    
  }
  if(event.target.id.includes('4')){
    if(event.target.checked){
      setZoneA(zoneA+16)

    }else{
      setZoneA(zoneA-16)

    }
    
  }
  if(event.target.id.includes('5')){
    if(event.target.checked){
      setZoneA(zoneA+32)

    }else{
      setZoneA(zoneA-32)

    }
    
  }
  if(event.target.id.includes('6')){
    if(event.target.checked){
      setZoneA(zoneA+64)

    }else{
      setZoneA(zoneA-64)

    }
    
  }
  if(event.target.id.includes('7')){
    if(event.target.checked){
      setZoneA(zoneA+128)

    }else{
      setZoneA(zoneA-128)

    }
    
  }
  if(event.target.id.includes('8')){
    if(event.target.checked){
      setZoneA(zoneA+256)

    }else{
      setZoneA(zoneA-256)

    }
    
  }
  if(event.target.id.includes('9')){
    if(event.target.checked){
      setZoneA(zoneA+512)

    }else{
      setZoneA(zoneA-512)

    }
    
  }

}
const [chime,setChime]=useState(0)
const click_checkBoxx=(event)=>{

  if(event.target.id.includes('0')){
    if(event.target.checked){
      setChime(chime+1)

    }else{
      setChime(chime-1)

    }
    
  }
  if(event.target.id.includes('1')){
    if(event.target.checked){
      setChime(chime+2)

    }else{
      setChime(chime-2)

    }
    
  }
  if(event.target.id.includes('2')){
    if(event.target.checked){
      setChime(chime+4)

    }else{
      setChime(chime-4)

    }
    
  }
  if(event.target.id.includes('3')){
    if(event.target.checked){
      setChime(chime+8)

    }else{
      setChime(chime-8)

    }
    
  }
  if(event.target.id.includes('4')){
    if(event.target.checked){
      setChime(chime+16)

    }else{
      setChime(chime-16)

    }
    
  }

  if(event.target.id.includes('5')){
    if(event.target.checked){
      setChime(chime+32)

    }else{
      setChime(chime-32)

    }
    
  }

  if(event.target.id.includes('6')){
    if(event.target.checked){
      setChime(chime+64)

    }else{
      setChime(chime-64)

    }
    
  }
  if(event.target.id.includes('7')){
    if(event.target.checked){
      setChime(chime+128)

    }else{
      setChime(chime-128)

    }
    
  }
  if(event.target.id.includes('8')){
    if(event.target.checked){
      setChime(chime+256)

    }else{
      setChime(chime-256)

    }
    
  }
  if(event.target.id.includes('9')){
    if(event.target.checked){
      setChime(chime+512)

    }else{
      setChime(chime-512)

    }
    
  }
  if(event.target.id.includes('10')){
    if(event.target.checked){
      setChime(chime+1024)

    }else{
      setChime(chime-1024)

    }
    
  }
 
}

// ****************
 
  if (model == "ECO20") {
    for (let i = 0; i < zonesName.length; i++) {
      checkListDM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + i} onChange={click_checkBoxx}/>{" "}
          <label for={"checkBox" + i}>{zonesName[i].name}</label>
        </div>
      );
    }
    for (let j = 0; j < zonesName.length; j++) {
      checkListRM.push(
        <div>
          <input type={"checkbox"} id={"checkBoxx" + j} onChange={click_checkBox}/>{" "}
          <label for={"checkBoxx" + j}>{zonesName[j].name}</label>
        </div>
      );
    }
  }
  if (model == "AS20") {
    for (let i = 0; i <= AsCh; i++) {
      checkListDM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + i} onChange={click_checkBox}/>{" "}
          <label for={"checkBox" + i}>{"شماره" + i}</label>
        </div>
      );
    }
    for (let j = 0; j <= zonesName.lenght; j++) {
      checkListRM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + j} onChange={click_checkBoxx}/>{" "}
          <label for={"checkBox" + j}>{zonesName[j]}</label>
        </div>
      );
    }
  }
  if (model == "AIO21") {
    for (let i = 0; i <= AioCh; i++) {
      checkListDM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + i} onChange={click_checkBox}/>{" "}
          <label for={"checkBox" + i}>{"شماره" + i}</label>
        </div>
      );
    }
    for (let j = 0; j <= zonesName.lenght; j++) {
      checkListRM.push(
        <div>
          <input type={"checkbox"} id={"checkBox" + j} onChange={click_checkBoxx}/>{" "}
          <label for={"checkBox" + j}>{zonesName[j]}</label>
        </div>
      );
    }
  }
  //*****لینک */
  const number=device.number;
  const password=device.password;
  const linkZO='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":8:"+zoneA;
  const linkCH='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":9:"+chime;

  // for(let i=0;i<zones.lenght;i++){
  //   if(deviceOp===zones[i].name){
  //     valueIndex=i
  //   }

  // }
  const linkFZ='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":10:"+(deviceOp1==='فول ست' ? '0' :(deviceOp1==='پارت ست' ?'1':(deviceOp1==="تایمر"?'2':(deviceOp1==="24 ساعت"?'3':(deviceOp1==='پانیک(نرمال باز)'?"4":(deviceOp1==="آتش"?"5":''))))))+':'+valueIndex;


  return (
    <div className="AdvZo">
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
                <div className="title-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>چایم(دینگ دانگ)</div>
                <div className="checkBox-AdvMa " id={them === "white" ? "borederBottom_Adv" : ""}>{checkListDM}</div>
                <div className="Button-AdvMa">
                  <a href={linkCH}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
                </div>
              </div>
              <div className="part1-AdvMa" id={them == "white" ? "lightnb_bg" : ""}>
                <div className="title-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>زون های فعال</div>
                <div className="checkBox-AdvMa" id={them === "white" ? "borederBottom_Adv" : ""}>{checkListRM}</div>
                <div className="Button-AdvMa">
                  <a href={linkZO}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
                </div>
              </div>
            </div>
            <div className="part-AdvMa" >
              <div className="part2-AdvMa" id={them == "white" ? "lightnb_bg" : ""}>
                <div className="title-AdvMa"   id={them === "white" ? "borederBottom_Adv" : ""}>
                  عملکرد زون
                </div>
                <div className="level-AdvMa padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
                  
                <div className="item-Information" id="z1">
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
                          className="partIconAdd_CA z2"
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
                        <ul className="" style={{ height: selectorO ? "" : "0px" }}>
                            {
                                zones.map((item,index) => {
                                    return(
                                        <li onClick={set_remote} id={index}>{item.name}</li>
                                    )
                                    
                                })
                            }

                        </ul>{" "}
                      </span>{" "}
                      <span className="titlInp-AddDevice">  انتخاب زون </span>{" "}
                    </div>{" "}
                  </div>
                  {/*  */}
                  <div className="item-Information marginTop z0" style={{"z":"2"}}>
                    <div
                      className="part6Inp-AddDevice part6Inp-Information "
                      style={{ color: them == "white" ? "black" : "" }}
                    >
                      <span
                        className="selectModel-AddDevice"
                        id={them == "white" ? "lightButtonnb_bg" : ""}
                      >
                        <div
                          onClick={change_select_operator1}
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
                            {deviceOp1}{" "}
                          </span>{" "}
                        </div>{" "}
                        <ul  style={{ height: selectorO1 ? "" : "0px" }}>
                        <li onClick={set_level}>فول ست</li>
                        <li onClick={set_level}>پارت ست</li>

                        <li onClick={set_level}>تایمر</li>
                        <li onClick={set_level}>24 ساعت</li>
                        <li onClick={set_level}>پانیک(نرمال باز)</li>
                        <li onClick={set_level}>آتش</li>

                        </ul>{" "}
                      </span>{" "}
                      <span className="titlInp-AddDevice">عملکرد زون</span>{" "}
                    </div>{" "}
                  </div>
                </div>
                <div className="Button-AdvMa">
                  <a href={linkFZ}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvZo;
