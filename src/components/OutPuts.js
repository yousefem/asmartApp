import React, { useState } from "react";
import "./OutPuts.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Command from "./Command";

const OutPuts = (props) => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  // const name=useSelector(state=>state.Device.name);

  const number = device.number;
  const name = device.name;
  const password = device.password;
  const access = device.access;
  const model = device.model;
  const part = device.part;
  const go_to_setting = () => {
    window.history.back();
  };
  console.log("-----------", props.data);
  const [marginLo1, setMarginLo1] = useState("1");
  const [marginLo2, setMarginLo2] = useState("1");
  const [stateTextO1, setStateTextO1] = useState("on");
  const [stateTextO2, setStateTextO2] = useState("on");
  const bgColorOn = "#0afc96";
  const bgColorOff = " rgb(39, 37, 37)";
  // alert(props.data[0].state)
  const [opacity1_1, setOpacity1_1] = useState(
    props.data[0].state == "OFF" ||
      props.data[0].state == "OFF\n" ||
      props.data[0].state == "off"
      ? "100%"
      : "20%"
  );
  const [opacity1_2, setOpacity1_2] = useState(
    props.data[0].state == "OFF" ||
      props.data[0].state == "OFF\n" ||
      props.data[0].state == "off"
      ? "20%"
      : "100%"
  );
  const [opacity2_1, setOpacity2_1] = useState(
    props.data[1].state == "OFF" ||
      props.data[1].state == "OFF\n" ||
      props.data[1].state == "off"
      ? "100%"
      : "20%"
  );
  const [opacity2_2, setOpacity2_2] = useState(
    props.data[1].state == "OFF" ||
      props.data[1].state == "OFF\n" ||
      props.data[1].state == "off"
      ? "20%"
      : "100%"
  );
  const set_opacity1 = (event) => {
    if (event.target.id == "o1_1") {
      setOpacity1_1("20%");
      setOpacity1_2("100%");
    } else if (event.target.id == "o1_2") {
      setOpacity1_1("100%");
      setOpacity1_2("20%");
    } else if (event.target.id == "o2_1") {
      setOpacity2_1("20%");
      setOpacity2_2("100%");
    } else if (event.target.id == "o2_2") {
      setOpacity2_1("100%");
      setOpacity2_2("20%");
    }
  };

  const change_state = (event) => {
    if (event.target.id == "o1") {
      if (marginLo1 == "1") {
        setMarginLo1("0");
        setStateTextO1("off");
      } else {
        setMarginLo1("1");
        setStateTextO1("on");
      }
    } else {
      if (marginLo2 == "1") {
        setMarginLo2("0");
        setStateTextO2("off");
      } else {
        setMarginLo2("1");
        setStateTextO2("on");
      }
    }
  };
  const AIO21PT1 =
    model == "AIO21 PT" && access == "مدیر"
      ? "A:"
      : model == "AIO21 PT" && access == "کاربر"
      ? "p" + part + ":"
      : "";

  return (
    <div className="OutPuts">
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          {/* <Command name={name} isIcon={true}></Command> */}
          <div className="blure"></div>
          <div className="header-Setting">
            <div className="helpButton" onClick={props.set_helpP}></div>
            <div className="titlPart-Setting">
              <p style={{ fontWeight: "400", fontSize: "medium" }}>{name}</p>
            </div>
            <a href={"sms:" + number + "?&body=*" +AIO21PT1+password + "%23OUT?"}>
              <div className="refresh">
                <div className="icon-refresh"></div>

                <div className="text-refresh"></div>
              </div>
            </a>
          </div>

          <div className="part-OutPuts" id="part1-OutPuts">
            {props.data.map((item) => {
              // alert(item.state)
              //
              return (
                <div
                  className="item-OutPuts"
                  key={item.key}
                  id={them == "white" ? "lightnb_bg" : ""}
                >
                  <div className="state-OutPuts">
                    <a
                      href={
                        "sms:" +
                        number +
                        "?&body=*" +
                        AIO21PT1+
                        password +
                        "%23out:" +
                        (item.key == "o1" ? "1" : "2") +
                        ":on"
                      }
                    >
                      <div
                        id={item.key + "_1"}
                        className={
                          them == "white" ? "on-OutPut noborder" : "on-OutPut"
                        }
                        onClick={set_opacity1}
                        style={{
                          opacity: item.key == "o1" ? opacity1_1 : opacity2_1,
                        }}
                      >
                        <p></p>
                      </div>
                    </a>
                    <a
                      href={
                        "sms:" +
                        number +
                        "?&body=*" +
                        AIO21PT1+
                        password +
                        "%23out:" +
                        (item.key == "o1" ? "1" : "2") +
                        ":off"
                      }
                    >
                      <div
                        id={item.key + "_2"}
                        className="off-OutPut"
                        onClick={set_opacity1}
                        style={{
                          opacity: item.key == "o1" ? opacity1_2 : opacity2_2,
                        }}
                      >
                        <p></p>
                      </div>
                    </a>
                  </div>
                  <div className="name-OutPuts">
                    <span style={{ marginRight: "5px" }}>
                      <p>
                        {" "}
                        {item.state == "OFF\n" || item.state == "OFF"
                          ? "خاموش"
                          : item.state == "ON" || item.state == "ON\n"
                          ? "روشن"
                          : item.state}{" "}
                      </p>
                    </span>
                    <span>
                      <p> :{item.name}</p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutPuts;
