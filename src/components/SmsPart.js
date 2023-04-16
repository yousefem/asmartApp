import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SmsPart.css";
import { Update } from "../actions";
import { useEffect } from "react";

const SmsPart = (props) => {
  console.log("uuuu", props);
  let them = window.localStorage.getItem("theme");
  let device=JSON.parse(window.localStorage.getItem('device'))

  const number = device.number;
  const password = device.password;
  const model = device.model;
  const access = device.access;
  const part = device.part;

  // const receiveText=props.text;
  const [text, setText] = useState("");
  const [refresh, setRefresh] = useState(false);
  let sendSms =
    "sms:" +
    number +
    "?&body=*" +
    (access === "مدیر" ? "A:" : access == "کاربر" ? "p" + part + ":" : "") +
    password +
    "%23text:" +
    (props.index)+":" +
    
    text;
  let sendPartition =
    "sms:" +
    number +
    "?&body=*" +
    (access == "مدیر" ? "A:" : "p" + part + ":") +
    password +
    "%23NAME:" +
    (access === "مدیر" ? part:'') +
    ":" +
    text;

  let receive =
    "sms:" +
    number +
    "?&body=*" +
    (access === "مدیر" ? "A:" : access == "کاربر" ? "p" + part + ":" : "") +
    password +
    "%23text?" +
    (access === "مدیر" ?(":"+part):'') ;
  const shortHeight = "60px";
  const LongHeight = "250px";
  const dispatch = useDispatch();

  const [height, setHeight] = useState("0");
  const [rotate, setRotate] = useState("rotate(90deg)");
  const text_sms = (event) => {
    setText(event.target.value);
  };

  const open_sms_part = () => {
    if (height == "1" && props.index == props.smsSelector) {
      props.setSmsSelecor(props.index);
      setHeight("0");
    } else {
      props.setSmsSelecor(props.index);
      setHeight("1");
    }
  };
  const set_info_update = () => {
    window.localStorage.setItem('smsIndex', props.index)
   
  };

  return (
    <div
      className="SmsPart"
      style={{
        height:
          props.index == props.smsSelector && height == "1"
            ? LongHeight
            : "62px",
      }}
      id={them == "white" ? "lightnb_bg" : ""}
    >
      <div id="part1-SmsPart">
        <div
          className={them == "white" ? "iconL-SmsPart" : "icon-SmsPart"}
        ></div>
        <div className="description-SmsPart">
          <p>{props.name}</p>
        </div>
        <div
          className={them == "white" ? "openL-SmartPart" : "open-SmartPart"}
          onClick={open_sms_part}
          id={them == "white" ? "lightButton_bg" : ""}
        ></div>
      </div>

      <div id="part2-SmsPart">
        <div className="input-SmsPart">
          <textarea
            type="text"
            onChange={text_sms}
            style={{ fontSize: "small", fontWeight: "400" }}
            maxLength={60}
            defaultValue={props.text != "خالی" ? props.text : ""}
            placeholder={props.text == "خالی" ? "خالی" : ""}
            id={them == "white" ? "lightButtonnb_bg" : ""}
          ></textarea>
        </div>
        <div className="controllers-SmsPart">
          <a
            href={
              window.location.pathname.search('partitionS') !=-1 
                ? sendPartition
                : sendSms
            }
          >
            <button id={them == "white" ? "lightButton_bg" : ""}>ارسال</button>
          </a>
          {window.location.pathname == "/partitionS" ? (
            ""
          ) : (
            
              window.location.pathname.search('partitionS') !=-1 ?
            '':(<a href={receive} onClick={set_info_update}>
              <button id={them == "white" ? "lightButton_bg" : ""}>
                دریافت
              </button>
            </a>)
            
          )}
        </div>
      </div>
    </div>
  );
};

export default SmsPart;
