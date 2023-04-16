import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { HideCommand, VisibleCommand } from "../actions";
import "./ChangePassDe.css";

const ChangePassDe = (props) => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  const name = device.name;
  const number = device.number;
  const model = device.model;
  const access = device.access;
  const password = device.password;
  const partde = device.part;

  const devicePartitions = device.partitions;
  const devicepart = device.part;
  const [part, setPart] = useState(partde);
  const [selectPort, setSelectPort] = useState(false);
  const [code, setCode] = useState("");
  const [code2, setCode2] = useState("");
  const set_code2 = (event) => {
    setCode2(event.target.value);
  };

  let smsLink1 = "";
  let smsLink2 =
    "sms://" +
    number +
    "?&body=*A:" +
    password +
    "%23change:" +
    "*p" +
    part +
    ":" +
    code2;
  if (model != "AIO21 PT") {
    smsLink1 = "sms://" + number + "?&body=*" + password + "%23change:" + code;

  } else if (access === "کاربر") {
    smsLink1 =
      "sms://" +
      number +
      "?&body=*p" +
      part +
      ":" +
      password +
      "%23change:" +
      code;
  } else if (access === "مدیر") {
    
    smsLink1 =
      "sms://" + number + "?&body=*A" + ":" + password + "%23change:" + code;
  }
  const set_code = (event) => {
    setCode(event.target.value);
  };

  const set_port_device = (event) => {
    setPart(event.target.id);
    setSelectPort(!selectPort);
  };
  const change_select_port = () => {
    setSelectPort(!selectPort);
  };
  return (
    <div className="ChangePassDe">
      <div className="bg-Page1">
        <div className="bgb-Page1" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}></div>
            <div className="titlPart-Setting">
              <p style={{ fontWeight: "400", fontSize: "medium" }}>{name}</p>
            </div>
          </div>

          <div class="part1-Charge" id={them == "white" ? "lightnb_bg" : ""}>
            <p className="tell-Charge">
              {model === "AIO21 PT"
                ? "تغییر رمز مدیریت دستگاه"
                : "تغییر رمز دستگاه"}

              <div id="noWeight">
                کاربر گرامی در صورت موفق بودن تغییرات آن ها را در بخش اطلاعات
                دستگاه وارد کنید
              </div>
            </p>

            <div className="inputCode">
              <p>
                <u></u>
              </p>
              <p></p>
              <input
                id={them == "white" ? "lightButtonnb_bg" : ""}
                type="number"
                onChange={set_code}
              />
            </div>

            <div className="increase-Charge">
              <div className="submitPart-Charge">
                <a href={smsLink1}>
                  <button id={them == "white" ? "lightButton_bg" : ""}>
                    ذخیره
                  </button>
                </a>
              </div>
            </div>
          </div>
          {access === "مدیر" ? (
            <div class="part1-Charge" id={them == "white" ? "lightnb_bg" : ""}>
              <p className="tell-Charge">
                تغییر رمز پارتیشن
                <div id="noWeight">
                  کاربر گرامی در صورت موفق بودن تغییرات آن ها را در بخش اطلاعات
                  دستگاه وارد کنید
                </div>
              </p>

              <div className="inputCode">
                <input
                  id={them == "white" ? "lightButtonnb_bg" : ""}
                  type="number"
                  onChange={set_code2}
                />
              </div>
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
                    <span className="titlInp-AddDevice">
                      {" "}
                      پارتیشن را انتخاب کنید{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="increase-Charge">
                <div className="submitPart-Charge">
                  <a href={smsLink2}>
                    <button id={them == "white" ? "lightButton_bg" : ""}>
                      ذخیره
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangePassDe;
