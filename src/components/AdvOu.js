import React, { useState } from "react";
import Command from "./Command";
import "./AdvOu.css";

const AdvOu = () => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  const name = device.name;
  const [selectorO1, setSelectorO1] = useState(false);
  const close_all_seledtor = () => {
    setSelectorO1(false);
    setSelectorO(false);
  };
  const [deviceOp1, setDeviceOp1] = useState("برای انتخاب کلیک کنید ");

  const set_level = (event) => {
    setDeviceOp1(event.target.innerHTML);
    setSelectorO1(false);
  };
  const change_select_operator1 = () => {
    close_all_seledtor();
    setSelectorO1(!selectorO1);
  };
  // ****************
  const [selectorO, setSelectorO] = useState(false);

  const [deviceOp, setDeviceOp] = useState("برای انتخاب کلیک کنید");

  const set_level1 = (event) => {
    setDeviceOp(event.target.innerHTML);
    setSelectorO(false);
  };
  const change_select_operator = () => {
    close_all_seledtor();
    setSelectorO(!selectorO);
  };
  const number = device.number;
  const password = device.password;
  const linkO1 =
    "sms:" +
    number +
    "?&body=*" +
    password +
    "%23" +
    "ADV" +
    ":12:" +
    (deviceOp === "دائم"
      ? "0"
      : deviceOp === "لحظه ای"
      ? "1"
      : deviceOp === "لامپ پارکینگ"
      ? "2"
      : deviceOp === "سیرن"
      ? "3"
      : deviceOp === "لامپ اضطراری"
      ? "4"
      : deviceOp === "درب بازکن"
      ? "5"
      : deviceOp === "فعال بودن دستگاه"
      ? "6"
      : "");
  const linkO2 =
    "sms:" +
    number +
    "?&body=*" +
    password +
    "%23" +
    "ADV" +
    ":13:" +
    (deviceOp1 === "دائم"
      ? "0"
      : deviceOp1 === "لحظه ای"
      ? "1"
      : deviceOp1 === "لامپ پارکینگ"
      ? "2"
      : deviceOp1 === "سیرن"
      ? "3"
      : deviceOp1 === "لامپ اضطراری"
      ? "4"
      : deviceOp1 === "درب بازکن"
      ? "5"
      : deviceOp1 === "فعال بودن دستگاه"
      ? "6"
      : "");

  return (
    <div className="AdvOu">
      <Command name={name} isIcon={true}></Command>
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton"></div>
            <div className="titlPart-Setting">
              <p style={{}}>{name}</p>
            </div>
          </div>
          <div className="content-AdvOu">
            <div
              className="part-AdvOu"
              id={them == "white" ? "lightnb_bg" : ""}
            >
              <div
                className="title-AdvOu"
                id={them === "white" ? "borederBottom_Adv" : ""}
              >
                خروجی 1
              </div>
              <div
                className="selector-AdvOu padding_AdvSe"
                id={them === "white" ? "borederBottom_Adv" : ""}
              >
                <div className="item-Information marginTop" id="z1">
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
                        <span className="selected-AddDevice"> {deviceOp} </span>{" "}
                      </div>{" "}
                      <ul style={{ height: selectorO ? "" : "0px" }}>
                        <li onClick={set_level1}>دائم</li>
                        <li onClick={set_level1}>لحظه ای</li>
                        <li onClick={set_level1}>لامپ پارکینگ</li>
                        <li onClick={set_level1}>سیرن</li>
                        <li onClick={set_level1}>لامپ اضطراری</li>
                        <li onClick={set_level1}>درب بازکن</li>
                        <li onClick={set_level1}>فعال بودن دستگاه</li>
                      </ul>{" "}
                    </span>{" "}
                    <span className="titlInp-AddDevice">عملکرد خروجی</span>{" "}
                  </div>{" "}
                </div>
              </div>
              <div className="button-AdvOu">
                <a href={linkO1}>
                  <button
                    className="save-Infofrmation margin_AdvBu"
                    id={them == "white" ? "lightButton_bg" : ""}
                  >
                    ارسال
                  </button>
                </a>
              </div>
            </div>
            <div
              className="part-AdvOu"
              id={them == "white" ? "lightnb_bg" : ""}
            >
              <div
                className="title-AdvOu"
                id={them === "white" ? "borederBottom_Adv" : ""}
              >
                خروجی 2
              </div>
              <div
                className="selector-AdvOu padding_AdvSe"
                id={them === "white" ? "borederBottom_Adv" : ""}
              >
                <div
                  className="item-Information marginTop z0"
                  style={{ z: "2" }}
                >
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
                      <ul style={{ height: selectorO1 ? "" : "0px" }}>
                        <li onClick={set_level}>دائم</li>
                        <li onClick={set_level}>لحظه ای</li>
                        <li onClick={set_level}>لامپ پارکینگ</li>
                        <li onClick={set_level}>سیرن</li>
                        <li onClick={set_level}>لامپ اضطراری</li>
                        <li onClick={set_level}>درب بازکن</li>
                        <li onClick={set_level}>فعال بودن دستگاه</li>
                      </ul>{" "}
                    </span>{" "}
                    <span className="titlInp-AddDevice">عملکرد خروجی</span>{" "}
                  </div>{" "}
                </div>
              </div>
              <div className="button-AdvOu">
                <a href={linkO2}>
                  <button
                    className="save-Infofrmation margin_AdvBu"
                    id={them == "white" ? "lightButton_bg" : ""}
                  >
                    ارسال
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

export default AdvOu;
