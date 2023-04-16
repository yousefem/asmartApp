import React,{useState} from "react";
import Command from "./Command";
import "./AdvRe.css";

const AdvRe = () => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  const name = device.name;
  const remotes = device.remotes;
  const [deviceOp, setDeviceOp] = useState('برای انتخاب کلیک کنید');
  const [selectorO,setSelectorO]=useState(false)
  const [selectorO1,setSelectorO1]=useState(false)
const close_all_seledtor=()=>{
    setSelectorO(false)
    setSelectorO1(false)

  }
  const [valueIndex,setValueIndex]=useState('')
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
const [deviceOp1, setDeviceOp1] = useState('برای انتخاب کلیک کنید');

const set_level=(event)=>{
  setDeviceOp1(event.target.innerHTML)
  setSelectorO1(false);


}
const change_select_operator1 = () => {
    close_all_seledtor()
    setSelectorO1(!selectorO1);
};
// ****************
const [emergencyKey,setEmergencyKey]=useState(0)
const click_emergency_key=(event)=>{
  if(event.target.checked){
    setEmergencyKey(1)

  }else(
    setEmergencyKey(0)
  )

}
  //*****لینک */
  const number=device.number;
  const password=device.password;
  const linkAK='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":15:"+emergencyKey;
  const linkLR='sms:'+number+"?&body=*"+password+ "%23"+"ADV"+":14:"+(deviceOp1==='لغو دسترسی'?'0':(deviceOp1=='فعال-غیرفعال' ? '1':(deviceOp1=='فقط فعال' ?'2':(deviceOp1=='فقط غیر فعال' ?'3':''))))+':'+valueIndex;


  return (
    <div className="AdvRe" >
      <Command name={name} isIcon={true}></Command>
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton"></div>
            <div className="titlPart-Setting">
              <p style={{}}>{name}</p>
            </div>
          </div>

          <div className="content-AdvRe">
            <div className="part-AdvRe" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvRe" id={them === "white" ? "borederBottom_Adv" : ""}>دسترسی ریموت</div>
              <div className="selector-AdvRe" id={them === "white" ? "borederBottom_Adv" : ""}>
              <div className="level-AdvMa padding_AdvSe">
                  
                  <div className="item-Information " id="z1">
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
                          className="partIconAdd_CA "
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
                                remotes.map((item,Index) => {
                                    return(
                                        <li onClick={set_remote} id={Index}>{item.name}</li>
                                    )
                                    
                                })
                            }

                        </ul>{" "}
                      </span>{" "}
                      <span className="titlInp-AddDevice">  انتخاب ریموت </span>{" "}
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
                        <li onClick={set_level}>لغو دسترسی</li>
                        <li onClick={set_level}>فعال-غیرفعال</li>
                        <li onClick={set_level}>فقط فعال</li>
                        <li onClick={set_level}>فقط غیر فعال</li>

                        </ul>{" "}
                      </span>{" "}
                      <span className="titlInp-AddDevice">  انتخاب دسترسی </span>{" "}
                    </div>{" "}
                  </div>
                </div>

              </div>
              <div className="button">
                <a href={linkLR}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
              </div>
            </div>
            <div className="part-AdvRe" id={them == "white" ? "lightnb_bg" : ""}>
              <div className="title-AdvRe" id={them === "white" ? "borederBottom_Adv" : ""}>کلید آژیر اضطراری</div>
              <div className="selector-AdvRe padding_AdvSe" id={them === "white" ? "borederBottom_Adv" : ""}>
              <label htmlFor="emergencyKey">فعال</label>
                        <input type="checkbox" id={"emergencyKey"} onChange={click_emergency_key}/>
              </div>
              <div className="button">
                <a href={linkAK}><button className="save-Infofrmation margin_AdvBu" id={them == "white" ? "lightButton_bg" : ""}>ارسال</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default AdvRe;
