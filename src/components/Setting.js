import React from "react";
import "./Setting.css";
import { useSelector, useDispatch } from "react-redux";
import { HideCommand, VisibleCommand } from "../actions/index";
// import { Link } from 'react-router-dom';
import Command from "./Command";

const Setting = (props) => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  let access=device.access;


  //   const name = useSelector((state) => state.Device.name);
  const name = device.name;
  //   const access = useSelector((state) => state.Device.access);
  const model = device.model;

  const dispatch = useDispatch();
  const date = new Date();

  
  let year=date.getFullYear();
  let month =date.getMonth();
  let day=date.getDate();
  
  let hours=date.getHours();
  let minutes=date.getMinutes();
  dispatch(VisibleCommand());
  const go_to_home = () => {};
  const go_to_contact = () => {
    props.changePage("contact");
  };

  const go_to_sms = () => {
    props.changePage("sms");
  };

  const go_to_zoon_info = () => {
    props.changePage("zoonInfo");
  };

  const go_to_remotes = () => {
    props.changePage("remotes");
  };
  const go_to_out_put = () => {
    props.changePage("outPuts");
  };

  const go_to_charge = () => {
    props.changePage("charge");
  };
  const go_to_information = () => {
    props.changePage("information");
  };
  return (
    <div className="Setting">
      <Command name={name} isIcon={true}></Command>
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton" onClick={go_to_home}></div>
            <div className="titlPart-Setting">
              <p style={{}}>{name}</p>
            </div>

          </div>
          <div className="menu-Setting">
            <a href={"./charge.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item1-Setting"}
                onClick={go_to_charge}
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "iconChatgeL-Setting"
                      : "iconChatge-Setting"
                  }
                ></div>
                <div className="text-Setting">
                  <span>شارژ سیم کارت</span>
                </div>
              </div>
            </a>
            <a href={"./sms.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item2-Setting"}
                onClick={go_to_sms}
              >
                <div
                  className={"icon-Setting"}
                  id={them == "white" ? "messageL-Setting" : "message-Setting"}
                ></div>
                <div className="text-Setting">
                  <span>متن پیام ها</span>
                </div>
              </div>
            </a>
            <a href={"./contact.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item3-Setting"}
                onClick={go_to_contact}
              >
                <div
                  className="icon-Setting"
                  id={them == "white" ? "contactL-Setting" : "contact-Setting"}
                ></div>
                <div className="text-Setting">
                  <span>شماره تلفن ها</span>
                </div>
              </div>
            </a>

            <a href={"./outPut.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item4-Setting"}
                onClick={go_to_out_put}
              >
                <div
                  className="icon-Setting"
                  id={them == "white" ? "outPutL-Setting" : "outPut-Setting"}
                ></div>
                <div className="text-Setting">
                  <span>خروجی ها</span>
                </div>
              </div>
            </a>
            {access != "مدیر" ? (
              <a href={"./remote.html"}>
                <div
                  className="item-Setting"
                  id={them == "white" ? "lightButtonnb_bg" : "item5-Setting"}
                  onClick={go_to_remotes}
                >
                  <div
                    className="icon-Setting"
                    id={them == "white" ? "remoteL-Setting" : "remote-Setting"}
                  ></div>
                  <div className="text-Setting">
                    <span>ریموت ها</span>
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}
            {access != "مدیر" ? (
              <a href={"./zon.html"}>
                <div
                  className="item-Setting"
                  id={them == "white" ? "lightButtonnb_bg" : "item6-Setting"}
                  onClick={go_to_zoon_info}
                >
                  <div
                    className="icon-Setting"
                    id={them == "white" ? "zoneL-Setting" : "zone-Setting"}
                  ></div>
                  <div className="text-Setting">
                    <span>اطلاعات زونها</span>
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}

            <a href={"./info.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item7-Setting"}
                onClick={go_to_information}
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "informationL-Setting"
                      : "information-Setting"
                  }
                ></div>
                <div className="text-Setting">
                  <span>اطلاعات دستگاه</span>
                </div>
              </div>
            </a>
            {model == "AIO21 PT" ? (
              <a href={"./partitionS.html"}>
                <div
                  className="item-Setting"
                  id={them == "white" ? "lightButtonnb_bg" : "item5-Setting"}
                  onClick={go_to_remotes}
                >
                  <div
                    className="icon-Setting"
                    id={them == "white" ? "partitionL-Setting" : "partition-Setting"}
                  ></div>
                  <div className="text-Setting">
                    <span> پارتیشن ها</span>
                  </div>
                </div>
              </a>
            ) : (
              ""
            )}
            <a href={"./ChangePassDe.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item5-Setting"}
                onClick={go_to_remotes}
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "changePassDeL-Setting"
                      : "changePassDe-Setting"
                  }
                ></div>
                <div className="text-Setting">
                  <span>رمز عبور دستگاه</span>
                </div>
              </div>
            </a>
            {access!='کاربر' ?
            <a
              href={
                "sms:" +
                device.number +
                "?&body=+"+(access==='مدیر'?"*A:":'') +
                
                device.password +
                "%23"+'dt:'+day+'/'+month+'/'+(year-2000)+':'+hours+'-'+minutes
                
              }
            >
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item5-Setting"}
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "setDateL-Setting"
                      : "setDate-Setting"
                  }
                ></div>
                <div className="text-Setting">
                  <span>تنظیم تاریخ و ساعت</span>
                  
                </div>
              </div>
            </a>:''}
            {model!='AIO21 PT' ?            <a href={"./adv.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item7-Setting"}
                onClick={go_to_information}
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "AdvL-Setting"
                      : "Adv-Setting"
                  }
                ></div>
                <div className="text-Setting">
                  <span>تنظیمات پیشرفته</span>
                </div>
              </div>
            </a>:''}

            <div className="item-null" onClick={go_to_remotes}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
