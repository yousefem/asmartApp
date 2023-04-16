import React, { useState } from "react";
import "./Charge.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { HideCommand, VisibleCommand } from "../actions";
import ChargeAlert from "./ChargeAlert";
import { Link } from "react-router-dom";

const Charge = (props) => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));

  const name = device.name;
  const operator = device.operator;
  const password = device.password;
  const number = device.number;
  const model = device.model;
  const access = device.access;
  const part = device.part;
  const partitionIcon={};
  const AIO21PT1 =
    model == "AIO21 PT" && access == "مدیر"
      ? "A:"
      : model == "AIO21 PT" && access == "کاربر"
      ? "p" + part + ":"
      : "";

  const [code, setCode] = useState("");
  const set_code = (event) => {
    setCode(event.target.value);
  };
  const [code2, setCode2] = useState("");
  const set_code2 = (event) => {
    setCode(event.target.value);
  };


  const inquiryCode =
    operator == "همراه اول"
      ? "*140*11%23"
      : operator == "ایرانسل"
      ? "*141*1%23"
      : operator == "رایتل"
      ? "*140%23"
      : "*" + code + "%23";
  const ChargeCode =
    operator == "همراه اول"
      ? "*140*"
      : operator == "ایرانسل"
      ? "*141*"
      : operator == "رایتل"
      ? "*140*"
      : "*" + code + "*";
  const inquiryLink =
    "sms://" +
    number +
    "?&body=*" +
    AIO21PT1 +
    password +
    "%23charge:" +
    inquiryCode;
  let chargeLink =
    "sms://" + number + "?&body=*" + password + "%23charge:" + ChargeCode;

  const dispatch = useDispatch();

  const [Alert, setAlert] = useState(false);
  const close_alert = () => {
    setAlert(false);
  };

  const go_to_setting = () => {
    props.changePage("setting");
    window.history.back();
  };

  return (
    <div className="Charge">
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          {Alert ? (
            <ChargeAlert
              close_alert={close_alert}
              ChargeCode={ChargeCode}
            ></ChargeAlert>
          ) : (
            ""
          )}
          {/* <div className="blure"></div> */}
          <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}></div>
            <div className="titlPart-Setting">
              <p style={{ fontWeight: "400", fontSize: "medium" }}>{name}</p>
            </div>
            <div className="refresh"></div>
          </div>

          <div class="part1-Charge" id={them == "white" ? "lightnb_bg" : ""}>
            <p className="tell-Charge">
              كاربر گرامي لطفا جهت افزايش شارژ , رمز شار دريافتي را بدون كد
              پيشوند يا پسوند وارد كنيد{" "}
            </p>

            {operator === "سایر" ? (
              <div className="inputCode">
                <p><u>برای اپراتور شما کدی تعریف نشده</u></p>
                <p><u>لطفا کد را بصورت دستی وارد کنید</u></p>
                <input
                id={them=='white' ? 'lightButtonnb_bg':''}
                  type="number"
                  onChange={set_code2}
                  
                />
              </div>
            ) : (
              ""
            )}

            <div className="increase-Charge">
              <div className="submitPart-Charge">
                <button
                  onClick={() => {
                    setAlert(true);
                    
                  }}
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  افزايش اعتبار
                </button>
              </div>
              <div className="submitPart-Charge">
                <a href={inquiryLink}>
                  <button id={them == "white" ? "lightButton_bg" : ""}>
                    استعلام
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charge;
