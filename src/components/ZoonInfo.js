import React, { useState } from "react";
import "./ZoonInfo.css";
import ZoonAlert from "./ZoonAlert";
import { useSelector, useDispatch } from "react-redux";
import { HideCommand, VisibleCommand } from "../actions/index";
// import { Link } from "react-router-dom";
import Command from "./Command";

const ZoonInfo = (props) => {
  let them = window.localStorage.getItem("theme");
  let device=JSON.parse(window.localStorage.getItem("device"))
  const name = device.name;
  const number = device.number;
  const password = device.password;
  const model=device.model;
  const access=device.access;
  const part=device.part;
  const [index, setIndex] = useState("");
  const dispatch = useDispatch();
  dispatch(VisibleCommand());
  const [Alert, setAlert] = useState(false);
  const go_to_setting = () => {
    window.history.back();
  };
  const colse_alert = () => {
    setAlert(false);
  };
  const zoon_alert = (event) => {
    setAlert(true);
    setIndex(event.target.id);
  };
  const AIO21PT1 =
  model == "AIO21 PT" && access == "مدیر"
    ? "A:"
    : model == "AIO21 PT" && access == "کاربر"
    ? "p" + part + ":"
    : "";

  return (
    <div className="ZoonInfo">
      
      <div className="bg-Setting">
        
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          {/* <Command name={name} isIcon={true}/> */}
          
          {Alert ? (
            <ZoonAlert close_alert={colse_alert} index={index}>
              {" "}
            </ZoonAlert>
          ) : (
            ""
          )}{" "}
          <div className="blure"> </div>{" "}
          <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}></div>{" "}
            <div className="titlPart-Setting">
              <p style={{ fontWeight: "400", fontSize: "medium" }}> {name} </p>
            </div>{" "}
            <a href={"sms:" + number + "?&body=*"+AIO21PT1 + password + "%23ZN?"}>
              {" "}
              <div className="refresh">
                <div className="icon-refresh"> </div>
                <div className="text-refresh"></div>{" "}
              </div>
            </a>
          </div>
          <div className="part-ZoonInfo" id="part1-ZoonInfo"></div>{" "}
          <div className="part-ZoonInfo" id="part2-ZoonInfo">
            <div className="table-ZoonInfo">
              <div
                className="title-ZoonInfo "
                id={them == "white" ? "title_light" : ""}
              >
                <div className="oprator-ZoonInfo">
                  <p> عملیات </p>
                </div>{" "}
                <div className="state-ZoonInfo">
                  <p> وضعیت </p>
                </div>{" "}
                <div className="name-ZoonInfo">
                  <p> نام </p>
                </div>{" "}
                <div className="number-ZoonInfo">
                  <p> شماره </p>
                </div>{" "}
              </div>{" "}
              <div className="items-ZoonInfo">
                {" "}
                {props.data.map((item) => {
                    
                  return (
                    item.name==='عدم دسترسی' ? ('') :
                    (<div
                      className="item-ZoonInfo"
                      id={them == "white" ? "lightnb_bg" : ""}

                    >
                      <div className="cotroller-ZoonInfo">
                        <a
                          href={
                            "sms:" +
                            number +
                            "?&body=*" +
                            AIO21PT1+
                            password +
                            "%23ZN:" +
                            item.number +
                            ":DIS"
                          }
                          id={
                            them == "white"
                              ? "stateL-ZoonInfo"
                              : "state-ZoonInfo"
                          }
                        >
                          {" "}
                          <div
                            className={
                              them == "white"
                                ? "stateL-ZoonInfo"
                                : "state-ZoonInfo"
                            }
                          >
                            <div>
                              {" "}
                              <p> </p>
                            </div>
                          </div>
                        </a>
                        <div
                          className={
                            them == "white"
                              ? "operatorL-ZoonInfo"
                              : "operator-ZoonInfo"
                          }
                          id={item.number}
                          onClick={zoon_alert}
                        >
                          <div id={item.number}>
                            {" "}
                            <p id={item.number}> </p>
                          </div>
                        </div>{" "}
                      </div>
                      <div className="state-ZoonInfo">
                        <p>
                          {" "}
                          {item.state == "c"
                            ? "بسته"
                            : item.state == "o"
                            ? "باز"
                            : item.state == "d"
                            ? "غیر فعال"
                            : "خالی"}{" "}
                        </p>
                      </div>{" "}
                      <div className="name-ZoonInfo">
                        <p

                        >
                          
                          {item.name}
                        </p>
                      </div>
                      <div className="number-ZoonInfo">
                        <p> {item.number} </p>
                      </div>
                    </div>)
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default ZoonInfo;
