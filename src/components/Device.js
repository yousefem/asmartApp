import React from "react";
import "./Device.css";
import { useDispatch, useSelector } from "react-redux";
import { SetDevice, discriptionAlert } from "../actions";
import AddDevice from "./AddDevice";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { deleteDevice } from '../actions';
import { Swiper, SwiperSlide } from "swiper/react";
import Command from "./Command";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Alert from "./Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Alert from './Alert';
// import { Link } from 'react-router-dom';

const Device = (props) => {
  console.log("Device.js:start");
  const them = "white";

  const data = props.data;
  const model = data.model;
  const name = props.data.name;
  const number = data.number;

  const password = props.data.password;
  const operator = props.data.operator;
  const states = props.data.states;
  const emtyBattery =
    "https://s24.picofile.com/file/8452730792/low_battery.png"; //10
  const Battery1 = "https://s24.picofile.com/file/8452289734/battery_6_.png"; //11-10
  const lowBattery =
    "https://s24.picofile.com/file/8452731442/batteru_2index.png"; //12-11
  const middleBattery =
    "https://s25.picofile.com/file/8452289750/battery_7_.png"; //13-12
  const fullBattery = "https://s24.picofile.com/file/8452289768/battery_8_.png"; //13
  const noBattery = "https://s25.picofile.com/file/8452730818/no_battery.png"; //nobattery

  const battery = states.battery;

  let bgBattery =
    "url(" +
    (battery < 10
      ? emtyBattery
      : battery < 11
      ? Battery1
      : battery < 12
      ? lowBattery
      : battery < 13
      ? middleBattery
      : battery >= 13
      ? fullBattery
      : emtyBattery) +
    ")";

  let noActivebg = "https://s25.picofile.com/file/8452901176/unlock_5_.png";
  let activebg = "https://s25.picofile.com/file/8452901176/unlock_5_.png";
  let disActiveBg = "https://s25.picofile.com/file/8452901176/unlock_5_.png";

  let stateActiveBg =
    "url(" +
    (states.work == "Armed Full"
      ? activebg
      : states.work == "Armed Part"
      ? disActiveBg
      : noActivebg) +
    ")";

  const dispatch = useDispatch();
  dispatch(SetDevice(name, number, model, password, operator));

  let active;
  let noActive;
  let noconnect;
  let halfActive;
  let refreshPage;
  if (model != "AIO21 PT") {
    active =
      model != "AlO21 PT"
        ? "sms:" + number + "?&body=*" + password + "%23" + " full"
        : "";
    noActive =
      model != "AlO21 PT"
        ? "sms:" + number + "?&body=*" + password + "%23" + "disarm"
        : "";
    noconnect =
      model != "AlO21 PT"
        ? "sms:" + number + "?&body=*" + password + "%23" + "stop"
        : "";
    halfActive =
      model != "AlO21 PT"
        ? "sms:" + number + "?&body=*" + password + "%23" + "part"
        : "";
    refreshPage =
      model != "AlO21 PT"
        ? "sms:" + number + "?&body=*" + password + "%23" + "status?"
        : "";
  } else {
    active = "/partitionAlert";
  }

  console.log(
    active +
      "\t" +
      noActive +
      "\t" +
      noconnect +
      "t" +
      halfActive +
      "\t" +
      refreshPage
  );

  const go_to_setting = () => {
    dispatch(SetDevice(name, number, model, password, operator));
    // props.changePage('setting');
  };

  const delete_device = async () => {
    dispatch(
      discriptionAlert(
        "حذف دستگاه",
        "آیا از حذف دستگاه مطمئن هستید" + " ؟ ",
        name,
        "delete_device",
        "/"
      )
    );

    // props.change_state_alert()
  };

  const [addDevice, setAddDevice] = useState(false);
  const add_device = () => {
    setAddDevice(true);
  };
  const close_add = () => {
    setAddDevice(false);
  };

  const go_to_command = () => {
    dispatch(SetDevice(name, number, model, password, operator));
  };

  return (
    <div>
      <div className="Page1  swiper-slide">
        <Link to={"/command"}>
          <div className="icon-Command" onClick={go_to_command}></div>
        </Link>
        {addDevice ? <AddDevice close_add_device={close_add}></AddDevice> : ""}

        <div className="bg-Page1 ">
          <div className="bgb-Page1 " id={them == "white" ? "light_bg" : ""}>
            <div
              className="Device "
              id={them == "white" ? "lightButton_bg" : ""}
            >
              <div className="part1-Device">
                <Link to={"Setting"}>
                  <div className="setting-Device" onClick={go_to_setting}></div>
                </Link>
                <Link to={"Alert"}>
                  <div className="delete-Device" onClick={delete_device}></div>
                </Link>
                <div className="deviceName-Device">
                  <p>{name}</p>
                </div>
              </div>
              <div className="part2-Device">
                <div className="controller-Device">
                  <a href={refreshPage}>
                    <div
                      className={
                        them == "white" ? "logoAL-Device" : "logoA-Device"
                      }
                      id={them == "white" ? "lightButtonnb_bg" : ""}
                    ></div>
                  </a>
                  {model == "AIO21 PT" ? (
                    <div className="function">
                      <a href={active}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn4-Device"
                          }
                        >
                          <div className="partition" id="partition1">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon4L-Device"
                                  : "icon4-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>فعال</p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href={noActive}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn2-Device"
                          }
                        >
                          <div className="partition" id="partition2">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon2L-Device"
                                  : "icon2-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>غیر فعال</p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href={noconnect}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn1-Device"
                          }
                        >
                          <div className="partition" id="partition3">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon1L-Device"
                                  : "icon1-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>توقف شماره گیری</p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href={halfActive}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn3-Device"
                          }
                        >
                          <div className="partition" id="partition4">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon3L-Device"
                                  : "icon3-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>نیمه فعال</p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                  ) : (
                    <div className="function">
                      <Link href={active}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn4-Device"
                          }
                        >
                          <div className="partition" id="partition1">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon4L-Device"
                                  : "icon4-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>فعال</p>
                            </div>
                          </div>
                        </span>
                      </Link>
                      <a href={noActive}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn2-Device"
                          }
                        >
                          <div className="partition" id="partition2">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon2L-Device"
                                  : "icon2-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>غیر فعال</p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href={noconnect}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn1-Device"
                          }
                        >
                          <div className="partition" id="partition3">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon1L-Device"
                                  : "icon1-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>توقف شماره گیری</p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href={halfActive}>
                        <span
                          className="controllerBtns-Device"
                          id={
                            them == "white"
                              ? "lightButton_bg"
                              : "controllerBtn3-Device"
                          }
                        >
                          <div className="partition" id="partition4">
                            <div
                              className="icon-Device"
                              id={
                                them == "white"
                                  ? "icon3L-Device"
                                  : "icon3-Device"
                              }
                            ></div>
                            <div className="text-Device">
                              <p>نیمه فعال</p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            salam

            <div className="part2-Page1">
              <div className="">
                weee
              </div>
              {model == "AIO21" ? (
                <div
                  className="battery-Page1"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  <span className="icons-Page1">
                    <div
                      className="icon-Page1"
                      id={them == "white" ? "icon1L-Page" : "icon1-Page"}
                      style={{
                        backgroundImage:
                          states.battery != "No Batt"
                            ? bgBattery
                            : "url(" + noBattery + ")",
                      }}
                    ></div>
                  </span>
                  <span className="text-Page1">
                    <div className="title-Page1">
                      <p>
                        {states.battery != "No Batt"
                          ? "باتری وصل"
                          : "باتری قطع"}
                      </p>
                    </div>
                    <div className="description-Page1">
                      <p>
                        {states.battery == "No Batt"
                          ? "وضعیت باتری "
                          : states.battery}
                      </p>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}

              <div
                className="active-Page1"
                id={them == "white" ? "lightButtonnb_bg" : ""}
              >
                <span className="icons-Page1">
                  <div
                    className="icon-Page1"
                    id={them == "white" ? "icon2L-Page" : "icon2-Page"}
                    style={{
                      backgroundImage:
                        "url(https://s24.picofile.com/file/8451585092/contact_book_3ab7bcce1d7942a5ee3e.png)",
                    }}
                  ></div>
                </span>
                <span className="text-Page1">
                  <div className="title-Page1">
                    <p>
                      {states.work == "Armed Full"
                        ? "فعال"
                        : states.work == "Armed Part"
                        ? "نیمه فعال"
                        : "غیر فعال"}
                    </p>
                  </div>
                  <div className="description-Page1">
                    <p>وضعیت دستگاه</p>
                  </div>
                </span>
              </div>
              {model != "ECO20" ? (
                <div
                  className="ConnectTel-Page1"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  <span className="icons-Page1">
                    <div
                      className="icon-Page1"
                      id={them == "white" ? "icon3L-Page1" : "icon3-Page"}
                    ></div>
                  </span>
                  <span className="text-Page1">
                    <div className="title-Page1">
                      <p>{states.phone == "OFF" ? "قطع" : "وصل"}</p>
                    </div>
                    <div className="description-Page1">
                      <p>وضعیت خط تلفن</p>
                    </div>
                  </span>
                </div>
              ) : (
                ""
              )}
              <div
                className="alarm-Page1"
                id={them == "white" ? "lightButtonnb_bg" : ""}
              >
                <span className="icons-Page1">
                  <div
                    className="icon-Page1"
                    id={them == "white" ? "icon4L-Page" : "icon4-Page"}
                  ></div>
                </span>
                <span className="text-Page1">
                  <div className="title-Page1">
                    <p>
                      {states.ajir == "No Alarm"
                        ? "بدون آژیر"
                        : states.ajir == "Alarming"
                        ? "آژیر زده شده"
                        : "غیر فعال"}
                    </p>
                  </div>
                  <div className="description-Page1">
                    <p>وضعیت آژیر</p>
                  </div>
                </span>
              </div>
              <div
                className="notif-Page1"
                id={them == "white" ? "lightButtonnb_bg" : ""}
              >
                <span className="icons-Page1">
                  <div
                    className="icon-Page1"
                    id={them == "white" ? "icon5L-Page" : "icon5-Page"}
                  ></div>
                </span>
                <span className="text-Page1">
                  <div className="title-Page1">
                    <p>{states.beeper == "OFF" ? "قطع" : "وصل"}</p>
                  </div>
                  <div className="description-Page1">
                    <p>وضعیت اسپیکر</p>
                  </div>
                </span>
              </div>
              <div
                className="connect-Page1"
                id={them == "white" ? "lightButtonnb_bg" : ""}
              >
                <span className="icons-Page1">
                  <div
                    className="icon-Page1"
                    id={them == "white" ? "icon6L-Page" : "icon6-Page"}
                  ></div>
                </span>
                <span className="text-Page1">
                  <div className="title-Page1">
                    <p>{states.connection == "OFF" ? "قطع" : "وصل"}</p>
                  </div>
                  <div className="description-Page1">
                    <p>وضعیت برق دستگاه</p>
                  </div>
                </span>
              </div>
            </div>
            <div className="part3-Page1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
