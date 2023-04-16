import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./Information.css";
// import { Link } from "react-router-dom";
import { changeDevice, Devices, changeDeviceT } from "../actions";
import { changeBG } from "../actions";
import { click } from "@testing-library/user-event/dist/click";

const Information = (props) => {
  let them = window.localStorage.getItem("theme");
  let device=JSON.parse(window.localStorage.getItem("device"))
  const [error, setError] = useState("");
  const [passwordOk, setPasswordOk] = useState(1);
  const [nameok, setNameOk] = useState(1);
  const [numberOk, setNumberOk] = useState(1);
  const deviceName = device.name;
  const deviceNumber = device.number;
  const devicePassword = device.password;
  const deviceOperator = device.operator;
  const deviceModel = device.model;
  const devicepart = device.part;
  const devicePartitions = device.partitions;
  const deviceAccess = device.access;

  // const [refresh,setRefresh]=useState(false)
  const allData = props.data;

  const [deviceMo, setDeviceMo] = useState(deviceModel);
  const [deviceOp, setDeviceOp] = useState(deviceOperator);
  const [deviceNa, setDeviceNa] = useState(deviceName);
  const [deviceNu, setDeviceNu] = useState(deviceNumber);
  const [devicePa, setDevicePa] = useState(devicePassword);
  const [devicePartL, setDeviceParL] = useState(devicePartitions);
  const [access, setAccess] = useState(deviceAccess);
  const [part, setPart] = useState(devicepart);

  const [saveLink, setSaveLink] = useState("/");

  const [selectorM, setSelectorM] = useState(false);
  const [selectorO, setSelectorO] = useState(false);

  const dispatch = useDispatch();

  const go_to_setting = async () => {
    window.history.back();
  };

  const change_select_model = () => {
    setSelectorM(!selectorM);
    setSelectorO(false);
  };
  const change_select_operator = () => {
    setSelectorO(!selectorO);
    setSelectorM(false);
  };
  const delete_value = (event) => {
    event.target.value = "";
    close_all_selector();
    switch (event.target.id) {
      case "name":
        set_error(devicePa, "", deviceNu);
        break;
      case "number":
        set_error(devicePa, deviceNa, "");
        break;
      case "password":
        set_error("", deviceNa, deviceNu);
        break;

      default:
        break;
    }
  };

  const set_error = async (password, name, number) => {
    //1=is ok
    //2=is bad data
    //3=is data reaoeat

    setNameOk(1);
    setNumberOk(1);
    setPasswordOk(1);
    if (password.length < 4 || password.length > 12) {
      // passwordOk=2;
      setError("رمز دستگاه باید عددی بین 4 تا 12 رقم باشد");
      setPasswordOk(2);

      // alert('error 1 passw')
      // setSaveButton()
    } else {
      // setError('no-error')
    }

    if (name.length != 0) {
      for (let i = 0; i < allData.length; i++) {
        if (allData[i].name != deviceName) {
          if (allData[i].name == name) {
            // nameOk=3;
            setError("نام دستگاه وارد شده تکراری می باشد");
            setNameOk(2);

            break;
          }
        }
        // setError('no-error')
      }
    } else {
      setError("نام دستگاه نمی تواند خالی باشد");

      setNameOk(2);
    }
    // alert('number test'+number.slice(0,1)=='0')
    if (
      !(number.length == 11) ||
      !(number.slice(0, 1) == "0") ||
      !(number.slice(1, 2) == "9")
    ) {
      // numberOk=2;
      setError("شماره موبایل معتبر نمی باشد");
      setNumberOk(2);
    } else {
      for (let i = 0; i < allData.length; i++) {
        if (allData[i].name != deviceName) {
          if (allData[i].number == number) {
            // nameOk=3;
            setError("قبلا با این شماره دستگاهی را ثبت کرده اید");
            setNumberOk(3);

            break;
          }
        }
      }
    }
  };

  const set_name_device = (event) => {
    setError("");

    setDeviceNa(event.target.value);
    set_error(devicePa, event.target.value, deviceNu);
  };
  const set_number_device = (event) => {
    setError("");

    setDeviceNu(event.target.value);
    set_error(devicePa, deviceNa, event.target.value);
  };
  const set_password_device = async (event) => {
    setError("");

    setDevicePa(event.target.value);
    if (devicePassword != event.target.value) {
      if (deviceNumber != deviceNu) {
        setSaveLink("sms://" + deviceNu + "?&bode=*" + devicePassword + "%23");
      } else {
      }
    }
    // set_error(event.target.value, deviceNa, deviceNu);
  };
  const set_operator_device = (event) => {
    setDeviceOp(event.target.innerHTML);
    setSelectorO(false);
  };
  const set_model_device = (event) => {
    setDeviceMo(event.target.innerHTML);
    setSelectorM(false);

    if(event.target.innerHTML==="AIO21 PT"){
      setAccess('مدیر')

    }else{
      setAccess('');

    }

  };
  const [selectPort, setSelectPort] = useState(false);
 
 
  const [selectAccess, setSelectAccess] = useState(false);
  const set_access_device = (event) => {
    setAccess(event.target.outerText);
    setSelectAccess(!selectAccess);
    setDeviceParL=[];
  };
  const set_port_device = (event) => {
    setPart(event.target.id);
    setSelectPort(!selectPort);
  };
  const change_select_port = () => {
    setSelectPort(!selectPort);
  };
  const change_select_access = () => {
    setSelectAccess(!selectAccess);
  };
  const close_all_selector = () => {
    setSelectorO(false);
    setSelectorM(false);
  };

  const save_new_info = async () => {
    if (nameok == 1 && numberOk == 1 && passwordOk == 1) {
      if (deviceMo == deviceModel) {
        dispatch(
          changeDevice(
            deviceName,
            deviceNa,
            deviceNu,
            devicePa,
            deviceMo,
            deviceOp,
            access,
            part,
            devicePartL
          )
        );
      } else {
        let zonesO = [];
        let remotesO = [];
        let contactO = [];
        let smsO = [];
        let stateO = [];
        let outO = [];
        for (let i = 0; i < allData.length; i++) {
          if (allData[i].name == deviceName) {
            zonesO = allData[i].zones;
            remotesO = allData[i].remotes;
            contactO = allData[i].contact;
            smsO = allData[i].smss;
            outO = allData[i].out;
            stateO = allData[i].states;

            break;
          }
        }

        let remotes = [];
        let smss = [];
        let contacts = [];
        let zones = [];
        let remote;
        let sms;
        let contact;
        let zone;

        switch (deviceMo) {
          case "ECO20":
            zone = 5;
            remote = 10;
            contact = 10;
            sms = 2;
            break;
          case "AS20":
            zone = 5;
            remote = 10;
            contact = 10;
            sms = 4;
            break;
          case "AIO21":
            zone = 8;
            remote = 15;
            contact = 10;
            sms = 8;
            break;
            case "AIO21 PT":
              zone = 8;
              remote = 10;
              contact = 5;
              sms = access==="مدیر" ? 5 :1;
              break;
        }

        for (let i = 0; i < zone; i++) {
          if (zonesO[i] != undefined) {
            zones[i] = zonesO[i];
          } else {
            zones[i] = { name: "خالی", number: i + 1, state: "غیر فعال" };
          }
        }
        for (let i = 0; i < remote; i++) {
          if (remotesO[i] != undefined) {
            remotes[i] = remotesO[i];
          } else {
            remotes[i] = {
              name: "ریموت" + (i + 1),
              type: " null",
              number: i + 1,
              state: "غیر فعال",
            };
          }
        }
        for (let i = 0; i < contact; i++) {
          if (remotesO[i] != undefined) {
            contacts[i] = contactO[i];
          } else {
            contacts[i] = { number: "خالی", description: "شماره 1", index: 1 };
          }
        }
        for (let i = 0; i < sms; i++) {
          if (smsO[i] != undefined) {
            smss[i] = smsO[i];
          } else {
            smss[i] = {
              name: "متن پیامک " + (i + 1),
              text: "خالی",
              number: i + 1,
            };
          }
        }

        dispatch(
          changeDeviceT(
            {
              name: deviceNa,
              password: devicePa,
              model: deviceMo,
              access: "",
              number: deviceNu,
              operator: deviceOp,
              zones: zones,
              remotes: remotes,
              smss: smss,
              contact: contacts,
              states: {
                battery: deviceMo == "AIO21" ? stateO.battery : "not",
                beeper: stateO.beeper,
                connection: stateO.connection,
                work: stateO.work,
                phone: deviceMo != "ECO20" ? stateO.phone : "not",
                ajir: stateO.ajir,
              },
              out: outO,
              partitions:devicePartL,
              part:part,
              access:access

            },
            deviceNa,
            deviceName
          )
        );
      }
    } else {
    }
  };

  const show_image = (event) => {
    dispatch(changeBG(event.target.value));
  };
  return (
    <div className="Information">
      <div className="bg-Page1">
        <div className="bgb-Page1" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}>
              {" "}
            </div>{" "}
            <div className="titlPart-Setting">
              <p style={{}}> {deviceName} </p>{" "}
            </div>{" "}
            <div className="refresh">
              <div className=""> </div>
              <div className=""> </div>{" "}
            </div>{" "}
          </div>
          <div
            className="part1-Information"
            id={them == "white" ? "lightnb_bg" : ""}
          >
            <div className="item-Information">
              <span className="input-Information">
                <input
                  type="text"
                  className="inputName-Information"
                  id={them == "white" ? "lightButtonnb_bg" : ""}
                  autocomplete="off"
                  lang="en"
                  defaultValue={deviceName}
                  onChange={set_name_device}
                  onClick={delete_value}
                />{" "}
              </span>{" "}
              <span className="text-Information"> نام دستگاه </span>{" "}
            </div>
            <div className="item-Information">
              <span className="input-Information">
                <input
                  type="number"
                  autocomplete="off"
                  className="number"
                  id={them == "white" ? "lightButtonnb_bg" : ""}
                  lang="en"
                  defaultValue={deviceNumber}
                  onChange={set_number_device}
                  onClick={delete_value}
                />{" "}
              </span>{" "}
              <span className="text-Information"> شماره دستگاه </span>{" "}
            </div>
            <div className="item-Information">
              <span className="input-Information">
                <input
                  type="number"
                  autocomplete="off"
                  className="password"
                  id={them == "white" ? "lightButtonnb_bg" : ""}
                  lang="en"
                  defaultValue={devicePassword}
                  onChange={set_password_device}
                  onClick={delete_value}
                />{" "}
              </span>{" "}
              <span className="text-Information"> رمز دستگاه </span>{" "}
            </div>
            <div className="item-Information">
              <div
                className="part6Inp-AddDevice part6Inp-Information"
                style={{ zIndex: "3", color: them == "white" ? "black" : "" }}
              >
                <span
                  className="selectModel-AddDevice"
                  id={them == "white" ? "lightButtonnb_bg" : ""}
                >
                  <div onClick={change_select_model} className="partIconAdd_CA">
                    <span
                      className={
                        them == "white"
                          ? "moreIconL-AddDevice"
                          : "moreIcon-AddDevice"
                      }
                    ></span>{" "}
                    <span className="selected-AddDevice"> {deviceMo} </span>{" "}
                  </div>{" "}
                  <ul style={{ height: selectorM ? "" : "0px" }}>
                    <li onClick={set_model_device}>ECO20</li>{" "}
                    <li onClick={set_model_device}>AS20</li>{" "}
                    <li onClick={set_model_device}>AIO21</li>{" "}
                    <li onClick={set_model_device}>AIO21 PT</li>{" "}
                  </ul>{" "}
                </span>{" "}
                <span className="titlInp-AddDevice"> مدل دستگاه </span>{" "}
              </div>{" "}
            </div>{" "}
            
            {deviceMo == "AIO21 PT" ? (
              <div className="item-Information">
                <div
                  className="part6Inp-AddDevice part6Inp-Information"
                  style={{ zIndex: "2", color: them == "white" ? "black" : "" }}
                >
                  <div className="part6Inp-AddDevice">
                    <span className="selectModel-AddDevice" id={them == "white" ? "lightButtonnb_bg" : ""}>
                      <div
                        onClick={change_select_access}
                        className="partIconAdd_CA"
                      >
                        <span
                          className={
                            them == "white"
                              ? "moreIconL-AddDevice"
                              : "moreIcon-AddDevice"
                          }
                        ></span>{" "}
                        <span className="selected-AddDevice" > {access} </span>{" "}
                      </div>{" "}
                      <ul style={{ height: selectAccess ? "" : "0px" }}>
                        <li onClick={set_access_device}>مدیر</li>{" "}
                        <li onClick={set_access_device}>کاربر</li>{" "}
                      </ul>{" "}
                    </span>{" "}
                    <span className="titlInp-AddDevice"> دسترسی </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ) : 
            ""
            }
            {access == "کاربر" && deviceMo=== "AIO21 PT" ? (
              <div className="item-Information">
                <div
                  className="part6Inp-AddDevice part6Inp-Information"
                  style={{ zIndex: "1", color: them == "white" ? "black" : "" }}
                >
                  <div className="part6Inp-AddDevice">
                    <span className="selectModel-AddDevice" id={them == "white" ? "lightButtonnb_bg" : ""}>
                      <div
                        onClick={change_select_port}
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
                          {devicePartitions[part - 1].name}{" "}
                        </span>{" "}
                      </div>{" "}
                      <ul style={{ height: selectPort ? "" : "0px" }}>
                        <li onClick={set_port_device} id="1">
                          {" "}
                          {devicePartitions[0].name}{" "}
                        </li>{" "}
                        <li onClick={set_port_device} id="2">
                          {" "}
                          {devicePartitions[1].name}{" "}
                        </li>{" "}
                        <li onClick={set_port_device} id="3">
                          {" "}
                          {devicePartitions[2].name}{" "}
                        </li>{" "}
                        <li onClick={set_port_device} id="4">
                          {" "}
                          {devicePartitions[3].name}{" "}
                        </li>{" "}
                        <li onClick={set_port_device} id="5">
                          {" "}
                          {devicePartitions[4].name}{" "}
                        </li>{" "}
                      </ul>{" "}
                    </span>{" "}
                    <span className="titlInp-AddDevice"> خروجی </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ) : (
              ""
            )}
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
                    <span className="selected-AddDevice"> {deviceOp} </span>{" "}
                  </div>{" "}
                  <ul style={{ height: selectorO ? "" : "0px" }}>
                    <li onClick={set_operator_device}>همراه اول</li>{" "}
                    <li onClick={set_operator_device}>ایرانسل</li>{" "}
                    <li onClick={set_operator_device}>رایتل</li>{" "}
                    <li onClick={set_operator_device}>سایر</li>{" "}
                  </ul>{" "}
                </span>{" "}
                <span className="titlInp-AddDevice"> اپراتور </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="error-Information">
              <span> {error != "no-error" ? error : ""} </span>{" "}
            </div>
            <a href={error == "" ? "index.html" : ""} onClick={save_new_info}>
              <div className="part3-Information">
                <button
                  className="save-Infofrmation"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  ذخیره{" "}
                </button>{" "}
                <br />
              </div>{" "}
            </a>{" "}
          
          </div>{" "}
        </div>{" "}
      </div>
      //{" "}
    </div>
  );
};

export default Information;
