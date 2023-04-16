import React, { useState } from "react";
import "./Remotes.css";
import RemoteAlert from "./RemoteAlert";
import { useSelector, useDispatch } from "react-redux";
import { HideCommand, VisibleCommand } from "../actions/index";
// import { Link } from 'react-router-dom';
import Command from "./Command";

const Remotes = (props) => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  console.log("---", device);
  const name = device.name;
  const number = device.number;
  const password = device.password;
  const model = device.model;
  const access = device.access;
  const part = device.part;

  let [index, setIndex] = useState("");

  const dispatch = useDispatch();
  dispatch(VisibleCommand());
  const go_to_setting = () => {
    window.history.back();
  };
  const [remoteAlert, setRemoteAlert] = useState(false);
  async function change_alert_remote(event) {
    setRemoteAlert(!remoteAlert);
    setIndex(event.target.id);
  }
  const AIO21PT1 =
    model == "AIO21 PT" && access == "مدیر"
      ? "A:"
      : model == "AIO21 PT" && access == "کاربر"
      ? "p" + part + ":"
      : "";
  return (
    <div className="Remotes">
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          {remoteAlert ? (
            <RemoteAlert
              change_alert={change_alert_remote}
              index={index}
            ></RemoteAlert>
          ) : (
            ""
          )}
          <div className="blure"></div>
          <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}></div>
            <div className="titlPart-Setting">
              <p style={{ fontWeight: "400", fontSize: "medium" }}>{name}</p>
            </div>
            <a
              href={
                "sms:" +
                number +
                "?&body=*" +
                AIO21PT1 +
                password +
                "%23RMT" +
                "?"
              }
            >
              <div className="refresh">
                <div className="icon-refresh"></div>

                <div className="text-refresh">{/* <p>بروز رسانی</p> */}</div>
              </div>
            </a>
          </div>

          <div className="part-Remotes" id="part1-Remotes"></div>
          <div className="part-Remotes" id="part2-Remotes">
            <div className="table-Remotes">
              <div
                className="title-Remotes"
                id={them == "white" ? "title_light" : ""}
              >
                <div className="state-Remotes">
                  <p>عمليات</p>
                </div>
                <div className="type-Remotes">
                  <p> دسترسی</p>
                </div>
                <div className="name-Remotes">
                  <p>نام</p>
                </div>
                <div className="number-Remotes">
                  <p> شماره</p>
                </div>
              </div>
              <div className="items-Remotes">
                {props.data.map((item) => {
                  return (
                    <div
                      className="item-Remotes"
                      id={them == "white" ? "lightnb_bg" : ""}
                    >
                      <div className="states-remotes">
                        <a
                          href={
                            "sms:" +
                            number +
                            "?&body=*" +
                            AIO21PT1 +
                            password +
                            "%23RMT:DL:" +
                            item.number
                          }
                          id={them == "white" ? "noborder" : ""}
                        >
                          <div
                            className={
                              them == "white"
                                ? "stateL-Remotes"
                                : "state-Remotes"
                            }
                            id={item.number}
                          >
                            <p></p>
                          </div>
                        </a>
                        <div
                          className={
                            them == "white" ? "editL-Remotes" : "edit-Remotes"
                          }
                          id={item.number}
                          onClick={change_alert_remote}
                        >
                          <p id={item.number}></p>
                        </div>
                        <a
                          href={
                            "sms:" +
                            number +
                            "?&body=*" +
                            AIO21PT1 +
                            password +
                            "%23RMT:DS:" +
                            item.number
                          }
                          id={them == "white" ? "noborder" : ""}
                        >
                          <div
                            className={
                              them == "white"
                                ? "stateL-Remotes"
                                : "state-Remotes"
                            }
                            id={item.number}
                          >
                            <p id={item.number}> </p>
                          </div>
                        </a>
                      </div>
                      <div className="type-Remotes">
                        <p>
                          {item.state == "1"
                            ? "غیر فعال"
                            : item.state == "2"
                            ? "روشن/خاموش"
                            : item.state == "3"
                            ? "فقط روشن"
                            : item.state == "4"
                            ? "فقط خاموش"
                            : "خالی"}
                        </p>
                      </div>
                      <div className="name-Remotes">
                        <p>{item.name}</p>
                      </div>

                      <div className="number-Remotes">
                        <p>{item.number}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <div className="add-Remotes">
                        <div className="addIcon-Remotes">

                        </div>

                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remotes;
