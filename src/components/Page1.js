import React, { useState } from "react";
import "./Page1.css";
import Device from "./Device";

import "react-multi-carousel/lib/styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import AddDevice from "./AddDevice";
import Cache from "js-local-cache";

import "rc-slider/assets/index.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { parseMessage, discriptionAler } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Command from "./Command";
import Alert from "./Alert";
import { SetDevice, discriptionAlert, doActive } from "../actions";
import PartitionAlert from "./PartitionAlert";


const Page1 = (props) => {
  const dispatch = useDispatch();
  const [clickActiveLink, setClickActiveLink] = useState();

  const [isScroll, setIsScroll] = useState("hidden");
  console.log(isScroll);
  const [addDevice, setAddDevice] = useState(false);
  const name = useSelector((state) => state.Device.name);
  const device = useSelector((state) => state.Device);


  const partition = useSelector((state) => state.Device.part);

  const resAlert = useSelector((state) => state.Alert.name);
  const [deleteAlert, setDeleteAlert] = useState(false);
  let them = window.localStorage.getItem("theme");

  const PartitionIcon = {
    dis:
      them === "white"
        ? "https://asmart.ir/application/front/static/media/icons/out_of_access_b.png"
        : "https://asmart.ir/application/front/static/media/icons/out_of_access.png", //خارج از دسترس
    disarm:
      them === "white"
        ? "https://asmart.ir/application/front/static/media/icons/unlocked_1_b.png"
        : "https://s24.picofile.com/file/8452672792/unlocked_1_.png", //غیر فعال
    arm:
      them === "white"
        ? "https://asmart.ir/application/front/static/media/icons/lock_1_b.png"
        : "https://s24.picofile.com/file/8452672768/lock_1_.png", //فعال
    na:
      them === "white"
        ? "http://asmart.ir/application/front/static/media/icons/out_of_service_b.png"
        : "http://asmart.ir/application/front/static/media/icons/out_of_service.png", //خارج از سرویس
  };

  const add_device = () => {
    setAddDevice(true);
    Cache.setData("Device", "salam");
  };
  const close_add = () => {
    setAddDevice(false);
  };

  const change_state_alert = () => {
    setDeleteAlert(!deleteAlert);
  };

  const set_action_type = () => {
    dispatch(doActive());
  };

  let devices =
    window.localStorage.getItem("devices") != null
      ? JSON.parse(window.localStorage.getItem("devices"))
      : [];

  const no_scroll = (p1) => {
    setIsScroll("visible");
  };
  const [refresh, setRefresh] = useState(false);
  const refresh_page = () => {
    setRefresh(!refresh);
  };
  const click_active_link = () => {
    setClickActiveLink(true);
  };
  const [action, setAction] = useState("");
  const click_active = () => {
    setAction("active");
    click_active_link();
  };
  const click_no_active = () => {
    setAction("noActive");
    click_active_link();
  };
  const open_delete_alert = () => {
    setDeleteAlert(true);
  };
  const close_delete_alert = () => {
    setDeleteAlert(false);
  };
  devices.forEach((item, index, arr) => {
    const battery = parseFloat(item.states.battery);

    const emtyBattery =
      them == "white"
        ? "https://s25.picofile.com/file/8453063542/low_batteryC.png"
        : "https://s24.picofile.com/file/8452730792/low_battery.png"; //10
    const Battery1 =
      them == "white"
        ? "https://s24.picofile.com/file/8453063526/one_battery.png"
        : "https://s24.picofile.com/file/8452289734/battery_6_.png"; //11-10
    const lowBattery =
      them == "white"
        ? "https://s24.picofile.com/file/8453063518/tow_battery.png"
        : "https://s24.picofile.com/file/8452731442/batteru_2index.png"; //12-11
    const middleBattery =
      them == "white"
        ? "https://s24.picofile.com/file/8453063492/battery_7_.png"
        : "https://s25.picofile.com/file/8452289750/battery_7_.png"; //13-12
    const fullBattery =
      them == "white"
        ? "https://s24.picofile.com/file/8453063500/four_battery.png"
        : "https://s24.picofile.com/file/8452289768/battery_8_.png"; //13
    const noBattery =
      them == "white"
        ? "https://s25.picofile.com/file/8453063550/no_battery.png"
        : "https://s25.picofile.com/file/8452730818/no_battery.png"; //nobattery
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
        : noBattery) +
      ")";

    let noActivebg =
      them == "white"
        ? "https://s25.picofile.com/file/8453063584/lock_3_.png"
        : "https://s24.picofile.com/file/8452672792/unlocked_1_.png";
    let activebg =
      them == "white"
        ? "https://s24.picofile.com/file/8453063568/lock_1_.png"
        : "https://s24.picofile.com/file/8452672768/lock_1_.png";
    let disActiveBg =
      them == "white"
        ? "https://s25.picofile.com/file/8453063576/lock_2_.png"
        : "https://s25.picofile.com/file/8452672784/lock_2_.png";
    let stateActiveBg =
      "url(" +
      (item.states.work == "Armed Full"
        ? activebg
        : item.states.work == "Armed Part"
        ? disActiveBg
        : noActivebg) +
      ")";

    let active;
    let noActive;
    let noconnect;
    let halfActive;
    let refreshPage;
    if (item.model != "AIO21 PT") {
      active =
        "sms:" + item.number + "?&body=*" + item.password + "%23" + " full";
      noActive =
        "sms:" + item.number + "?&body=*" + item.password + "%23" + "disarm";
      noconnect =
        "sms:" + item.number + "?&body=*" + item.password + "%23" + "stop";
      halfActive =
        "sms:" + item.number + "?&body=*" + item.password + "%23" + "part";
      refreshPage =
        "sms:" + item.number + "?&body=*" + item.password + "%23" + "status?";
    } else if (item.access === "کاربر" && item.model === "AIO21 PT") {
      active =
        "sms:" +
        item.number +
        "?&body=*p" +
        item.part +
        ":" +
        item.password +
        "%23" +
        "ARM";
      noActive =
        "sms:" +
        item.number +
        "?&body=*p" +
        item.part +
        ":" +
        item.password +
        "%23" +
        "disarm";
      noconnect =
        "sms:" +
        item.number +
        "?&body=*p" +
        item.part +
        ":" +
        item.password +
        "%23" +
        "stop";
      halfActive = "";
      refreshPage =
        "sms:" +
        item.number +
        "?&body=*p" +
        item.part +
        ":" +
        item.password +
        "%23" +
        "status?";
    } else if (item.access === "مدیر" && item.model === "AIO21 PT") {
      refreshPage =
        "sms:" +
        item.number +
        "?&body=*A" +
        ":" +
        item.password +
        "%23" +
        "status?";
    }
    const click_device = () => {
      dispatch(
        SetDevice(
          item.name,
          item.number,
          item.model,
          item.password,
          item.operator,
          item.access,
          item.part,
          item.partitions,
          item.zones,
          item.remotes
        )
      );

      dispatch(
        discriptionAlert(
          "حذف دستگاه",
          "آیا از حذف دستگاه مطمئن هستید" + " ؟ ",
          name,
          "delete_device",
          "/"
        )
      );
    };
    const set_device_on_local_storage = () => {
      click_device();
    };
    arr[index] = (
      <SwiperSlide>
        <div className="device-Page1" onClick={click_device}>
          <div className="Page1  swiper-slide">

            <Command name={name} isIcon={true}></Command>
            {addDevice ? (
              <AddDevice close_add_device={close_add}></AddDevice>
            ) : (
              ""
            )}

            <div className="bg-Page1 ">
              <div
                className="bgb-Page1 "
                id={them == "white" ? "light_bg" : ""}
              >
                <div className="Device " id={them == "white" ? "light_bg" : ""}>
                  <div className="part1-Device">
                    <a
                      href={"./Setting.html"}
                      onClick={set_device_on_local_storage}
                    >
                      <div
                        className={
                          them == "white" ? "settingL-Device" : "setting-Device"
                        }
                      ></div>
                    </a>
                    <a onClick={open_delete_alert}>
                      <div
                        className={
                          them == "white" ? "deleteL-Device" : "delete-Device"
                        }
                        onClick={click_device}
                      ></div>
                    </a>
                    <div className="deviceName-Device">
                      <p>{item.name}</p>
                      {item.model === "AIO21 PT" && item.access === "کاربر" ? (
                        <p className="partitionName">
                          {item.partitions[item.part - 1].name}
                        </p>
                      ) : (
                        ""
                      )}
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

                      {item.model != "AIO21 PT" && item.access != "مدیر" ? (
                        <div className="function">
                          <div className="part1Function">
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      فعال
                                    </p>
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      غیر فعال
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </a>
                          </div>
                          <div className="part2Function">
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      توقف شماره گیری
                                    </p>
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      نیمه فعال
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </a>
                          </div>
                        </div>
                      ) : item.access === "مدیر" ? (
                        <div className="function">
                          <div className="part1Function">
                            <a onClick={click_active}>
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      فعال
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </a>
                            <a onClick={click_no_active}>
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      غیر فعال
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </a>
                          </div>
                          <div className="part2Function">
                            <a
                              href={
                                "sms:" +
                                item.number +
                                "?&body=*A:" +
                                item.password +
                                "%23" +
                                "stop"
                              }
                            >
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      توقف شماره گیری
                                    </p>
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      نیمه فعال
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </a>
                          </div>
                        </div>
                      ) : item.access === "کاربر" ? (
                        <div className="function">
                          <div className="part1Function">
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      فعال
                                    </p>
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      غیر فعال
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </a>
                          </div>
                          <div className="part2Function">
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      توقف شماره گیری
                                    </p>
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
                                    <p id={them == "white" ? "light_text" : ""}>
                                      نیمه فعال
                                    </p>
                                  </div>
                                </div>
                              </span>
                            </a>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="alarmPart">
                  <div
                    className="part2-Page1"
                    style={{ width: item.access === "مدیر" ? "" : "" }}
                  >
                    {item.model == "AIO21" || item.model == "AIO21 PT" ? (
                      <div
                        className="battery-Page1"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <span className="icons-Page1">
                          <div
                            className="icon-Page1"
                            id={them == "white" ? "icon1L-Page" : "icon1-Page"}
                            style={{ backgroundImage: bgBattery }}
                          ></div>
                        </span>
                        <span className="text-Page1">
                          <div className="title-Page1">
                            <p>
                              {item.states.battery == "No Batt"
                                ? "باتری قطع"
                                : item.states.battery == "not"
                                ? "باتری قطع"
                                : "باتری وصل"}
                            </p>
                          </div>
                          <div className="description-Page1">
                            <p>
                              {item.states.battery == "No Batt"
                                ? "وضعیت باتری "
                                : item.states.battery != "not"
                                ? item.states.battery
                                : "وضعیت باتری"}
                            </p>
                          </div>
                        </span>
                      </div>
                    ) : (
                      ""
                    )}

                    {item.access === "مدیر" ? (
                      ""
                    ) : (
                      <div
                        className="active-Page1"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <span className="icons-Page1">
                          <div
                            className="icon-Page1"
                            id={them == "white" ? "icon2L-Page" : "icon2-Page"}
                            style={{ backgroundImage: stateActiveBg }}
                          ></div>
                        </span>
                        <span className="text-Page1">
                          <div className="title-Page1">
                            <p>
                              {item.states.work == "Armed Full"
                                ? "فعال"
                                : item.states.work == "Armed Part"
                                ? "نیمه فعال"
                                : "غیر فعال"}
                            </p>
                          </div>
                          <div className="description-Page1">
                            <p>وضعیت دستگاه</p>
                          </div>
                        </span>
                      </div>
                    )}
                    {item.model != "ECO20" ? (
                      <div
                        className="ConnectTel-Page1"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <span className="icons-Page1">
                          <div
                            className="icon-Page1"
                            id={them == "white" ? "icon3L-Page1" : "icon3-Page"}
                          ></div>
                        </span>
                        <span className="text-Page1">
                          <div className="title-Page1">
                            <p>{item.states.phone == "OFF" ? "قطع" : "وصل"}</p>
                          </div>
                          <div className="description-Page1">
                            <p>وضعیت خط تلفن</p>
                          </div>
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.access === "مدیر" ? (
                      ""
                    ) : (
                      <div
                        className="alarm-Page1"
                        id={them == "white" ? "light_bg" : ""}
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
                              {item.states.ajir == "No Alarm"
                                ? "بدون آژیر"
                                : item.states.ajir == "Alarming"
                                ? "آژیر زده شده"
                                : "غیر فعال"}
                            </p>
                          </div>
                          <div className="description-Page1">
                            <p>وضعیت آژیر</p>
                          </div>
                        </span>
                      </div>
                    )}
                    <div
                      className="notif-Page1"
                      id={them == "white" ? "light_bg" : ""}
                    >
                      <span className="icons-Page1">
                        <div
                          className="icon-Page1"
                          id={them == "white" ? "icon5L-Page" : "icon5-Page"}
                        ></div>
                      </span>
                      <span className="text-Page1">
                        <div className="title-Page1">
                          <p>{item.states.beeper == "OFF" ? "قطع" : "وصل"}</p>
                        </div>
                        <div className="description-Page1">
                          <p>وضعیت اسپیکر</p>
                        </div>
                      </span>
                    </div>
                    {item.model == "AS20" ? (
                      <div
                        className="connect-Page1"
                        id={them == "white" ? "light_bg" : ""}
                        style={{ backgroundColor: "unset", boxShadow: "unset" }}
                      ></div>
                    ) : (
                      ""
                    )}
                    <div
                      className="connect-Page1"
                      id={them == "white" ? "light_bg" : ""}
                    >
                      <span className="icons-Page1">
                        <div
                          className="icon-Page1"
                          id={them == "white" ? "icon6L-Page" : "icon6-Page"}
                        ></div>
                      </span>
                      <span className="text-Page1">
                        <div className="title-Page1">
                          <p>
                            {item.states.connection == "OFF" ? "قطع" : "وصل"}
                          </p>
                        </div>
                        <div className="description-Page1">
                          <p>وضعیت برق دستگاه</p>
                        </div>
                      </span>
                    </div>
                  </div>

                  {item.model === "AIO21 PT" && item.access == "مدیر" ? (
                    <div className="partition_state">
                      <div
                        className="partitions"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <div>
                          <p>{item.partitions[0].name}</p>
                          <p>{item.partitions[0].state}</p>
                        </div>
                        <div
                          className="partitionIcon"
                          id={them === "white" ? "border_green" : ""}
                          style={{
                            backgroundImage:
                              "url(" +
                              (item.partitions[0].state.toLowerCase() ===
                              "خارج از دسترس"
                                ? PartitionIcon.dis
                                : item.partitions[0].state.toLowerCase() ===
                                  "غیر فعال"
                                ? PartitionIcon.disarm
                                : item.partitions[0].state.toLowerCase() ===
                                  "فعال"
                                ? PartitionIcon.arm
                                : PartitionIcon.na) +
                              ")",
                          }}
                        ></div>
                      </div>
                      <div
                        className="partitions"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <div>
                          <p>{item.partitions[1].name}</p>
                          <p>{item.partitions[1].state}</p>
                        </div>
                        <div
                          className="partitionIcon"
                          id={them === "white" ? "border_green" : ""}
                          style={{
                            backgroundImage:
                              "url(" +
                              (item.partitions[1].state.toLowerCase() ===
                              "خارج از دسترس"
                                ? PartitionIcon.dis
                                : item.partitions[1].state.toLowerCase() ===
                                  "غیر فعال"
                                ? PartitionIcon.disarm
                                : item.partitions[1].state.toLowerCase() ===
                                  "فعال"
                                ? PartitionIcon.arm
                                : PartitionIcon.na) +
                              ")",
                          }}
                        ></div>
                      </div>
                      <div
                        className="partitions"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <div>
                          <p>{item.partitions[2].name}</p>
                          <p>{item.partitions[2].state}</p>
                        </div>
                        <div
                          className="partitionIcon"
                          id={them === "white" ? "border_green" : ""}
                          style={{
                            backgroundImage:
                              "url(" +
                              (item.partitions[2].state.toLowerCase() ===
                              "خارج از دسترس"
                                ? PartitionIcon.dis
                                : item.partitions[2].state.toLowerCase() ===
                                  "غیر فعال"
                                ? PartitionIcon.disarm
                                : item.partitions[2].state.toLowerCase() ===
                                  "فعال"
                                ? PartitionIcon.arm
                                : PartitionIcon.na) +
                              ")",
                          }}
                        ></div>
                      </div>
                      <div className="partitions_null">
                        <div>
                          <p></p>
                          <p></p>
                        </div>
                        <div></div>
                      </div>
                      <div
                        className="partitions"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <div>
                          <p>{item.partitions[3].name}</p>
                          <p>{item.partitions[3].state}</p>
                        </div>
                        <div
                          className="partitionIcon"
                          id={them === "white" ? "border_green" : ""}
                          style={{
                            backgroundImage:
                              "url(" +
                              (item.partitions[3].state.toLowerCase() ===
                              "خارج از دسترس"
                                ? PartitionIcon.dis
                                : item.partitions[3].state.toLowerCase() ===
                                  "غیر فعال"
                                ? PartitionIcon.disarm
                                : item.partitions[3].state.toLowerCase() ===
                                  "فعال"
                                ? PartitionIcon.arm
                                : PartitionIcon.na) +
                              ")",
                          }}
                        ></div>
                      </div>
                      <div
                        className="partitions"
                        id={them == "white" ? "light_bg" : ""}
                      >
                        <div>
                          <p>{item.partitions[4].name}</p>
                          <p>{item.partitions[4].state}</p>
                        </div>
                        <div
                          className="partitionIcon"
                          id={them === "white" ? "border_green" : ""}
                          style={{
                            backgroundImage:
                              "url(" +
                              (item.partitions[4].state.toLowerCase() ===
                              "خارج از دسترس"
                                ? PartitionIcon.dis
                                : item.partitions[4].state.toLowerCase() ===
                                  "غیر فعال"
                                ? PartitionIcon.disarm
                                : item.partitions[4].state.toLowerCase() ===
                                  "فعال"
                                ? PartitionIcon.arm
                                : PartitionIcon.na) +
                              ")",
                          }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="part3-Page1"></div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const close_alert_partition = () => {
    setClickActiveLink(false);
  };
  //***************HelpP */


  return (
    <div className="bg-Page1">
      <div className="bgb-Page1" id={them == "white" ? "light_bg" : ""}>
      
        <div className="header-Page1">
          <div className="helpButton" onClick={props.set_helpP}></div>
          <div className="titlPart-Page1">
            <p style={{ fontWeight: "400", fontSize: "medium" }}>A.smart</p>
          </div>
          <div className="refresh">
            <div className=""></div>

            <div className=""></div>
          </div>
        </div>
        
        <div
          style={{
            width: "100vw",
            height: "70vh",
            position: "fixed",
            zIndex: "2",
            visibility: isScroll,
          }}
        ></div>
        {clickActiveLink === true ? (
          <PartitionAlert
            close_alert_partition={close_alert_partition}
            type={action}
          ></PartitionAlert>
        ) : (
          ""
        )}

        {addDevice ? <AddDevice close_add_device={close_add}></AddDevice> : ""}
        {!deleteAlert ? (
          <Swiper
            modules={[Navigation, Pagination, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            allowTouchMove={isScroll}
            navigation
            pagination={{ clickable: false }}
            scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {devices}

            <SwiperSlide>
              <div className="Page1  swiper-slide" style={{ height: "100vh" }}>
                <div className="addDevice-Page1 ">
                  <div
                    className="contentAdd-Page1"
                    id={them == "white" ? "lightnb_bg" : ""}
                  >
                    <div className="centerAdd-Page1" onClick={add_device}>
                      <div
                        className="img-Device"
                        id={them == "white" ? "noborder" : ""}
                      >
                        <div
                          className={
                            them == "white" ? "borerL-img" : "borer-img"
                          }
                          id="borer-img"
                        ></div>
                      </div>

                      <div className="textAdd-Page1">
                        <p style={{}}>اضافه کردن دستگاه</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="part2Add-Page1">
                  <a href={"./front/settingG.html"}>
                    <div
                      className="settingAdd-Pag1"
                      id={them == "white" ? "lightButtonnb_bg" : ""}
                    >
                      <div
                        className={
                          them == "white" ? "iconASL-Page1" : "iconAS-Page1"
                        }
                      ></div>
                      <span className="textAS-Page1"> تنظیمات نرم افزار</span>
                    </div>
                  </a>
                  <a to={"/about"}>
                    <div
                      className="aboutAdd-Pag1"
                      id={them == "white" ? "lightButtonnb_bg" : ""}
                    >
                      <div
                        className={
                          them == "white" ? "iconAAL-Page1" : "iconAA-Page1"
                        }
                      ></div>
                      <p
                        className="textAA-Page1"
                        id={them == "white" ? "light_text" : ""}
                      >
                        درباره ما
                      </p>
                    </div>
                  </a>
                  <a to={"/help"}>
                    <div
                      className="helpAdd-Pag1"
                      id={them == "white" ? "lightButtonnb_bg" : ""}
                    >
                      <div
                        className={
                          them == "white" ? "iconAHL-Page1" : "iconAH-Page1"
                        }
                      ></div>
                      <p
                        className="textAH-Page1"
                        id={them == "white" ? "light_text" : ""}
                      >
                        راهنما
                      </p>
                    </div>
                    {/* <Command name={name} isIcon={true}></Command>*/}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <Alert
            close_alert={change_state_alert}
            title="حذف دستگاه"
            description="آیا از حذف دستگاه مطمئن هستید؟"
            operator="delete_device"
            name={device.name}
            close_delete_alert={close_delete_alert}
          ></Alert>
        )}
      </div>
    </div>
  );
};
export default Page1;
