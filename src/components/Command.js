import React, { useState } from "react";
import "./Command.css";
import { parseMessage } from "../actions";
import { useDispatch, useSelector } from "react-redux";

// import { Link } from 'react-router-dom';

const Command = (props) => {
  let device = JSON.parse(window.localStorage.getItem("device"));
  const [open, setOpen] = useState(false);
  const widthC = props.isIcon ? "90px" : "100vw";
  const heightC = props.isIcon ? "90px" : "100vh";
  const [width, setWidth] = useState(widthC);
  const [height, setHeight] = useState(heightC);
  const [message, setMessage] = useState("");
  const deviceName = device != null ? device.name : "";
  const deviceModel = device != null ? device.model : "";
  const access = device != null ? device.access : "";
  const smsindex = window.localStorage.getItem("smsIndex");
  const [isFirst, seIsFirst] = useState(true);
  let closeBg = true;
  const name = device != null ? device.name : "";
  const model = device != null ? device.modelL : "";
  // alert(model)
  let them = window.localStorage.getItem("theme");

  const dispatch = useDispatch();

  const oepn_command = () => {
    setWidth("100vw");
    setHeight("100vh");
  };

  const close_command = () => {
    setWidth(widthC);
    setHeight(heightC);
  };

  const no_is_first = (event) => {
    event.target.value = "";
  };
  const set_message = (event) => {
    setMessage(event.target.value);
  };

  const parse_message = () => {
    dispatch(
      parseMessage(
        message,
        {
          Name: device.name,
          model: device.model,
          smsindex: smsindex,
          access: access,
        },
        model
      )
    );
    setWidth(widthC);
    setHeight(heightC);
    if (props.can_refresh) {
    }
    window.location.reload();
  };
  const parse_message_go_back = () => {
    dispatch(
      parseMessage(
        message,
        { Name: name, model: model, smsindex: smsindex, access: access },
        model
      )
    );
    setWidth(widthC);
    setHeight(heightC);
    if (props.can_refresh) {
    }

    window.history.back();
  };

  const set_closeBg = () => {};
  const go_to_home = () => {
    window.history.back();
  };

  return (
    <div
      className={props.isIcon ? "Command" : "CommandBG"}
      style={{
        width: width,
        height: height,
        fontSize: "large",
        fontWeight: "600",
        backgroundColor: width == "90px" ? "" : "#0f0f0f8c",
      }}
    >
      {props.isIcon ? (
        ""
      ) : (
        <div
          className="blure-Command"
          id={them == "white" ? "light_bg" : ""}
        ></div>
      )}
      <div
        className="text-Command"
        id={them == "white" ? "lightnb_bg" : ""}
        onTouchStart={set_closeBg}
        style={{ visibility: width == "90px" ? "hidden" : "visible" }}
      >
        <div className="titl-Command" id={them == "white" ? "title_light" : ""}>
          <div>
            <span>( {name} ) : </span>
            <span>پیامک دریافتی دستگاه را وارد کنید </span>
          </div>
        </div>
        <textarea
          className="txa"
          type="text"
          onChange={set_message}
          maxLength={160}
          id={them == "white" ? "lightButton_bg" : ""}
          onClick={no_is_first}
        ></textarea>
        {/* <a href={"./Page1.html"}> */}
        <a>
          <button
            onClick={parse_message}
            id={them == "white" ? "lightButton_bg" : ""}
          >
            اعمال
          </button>
        </a>
        {/* {props.isIcon ? (
          <a href={props.goto == "setting" ? "/Setting.html" : ""}>
            <button
              onClick={parse_message}
              id={them == "white" ? "lightButton_bg" : ""}
            >
              اعمال
            </button>
          </a>
        ) : (
          <button
            onClick={parse_message_go_back}
            id={them == "white" ? "lightButton_bg" : ""}
          >
            اعمال
          </button>
        )} */}
        {props.isIcon ? (
          <button
            onClick={close_command}
            id={them == "white" ? "lightButton_bg" : ""}
          >
            انصراف
          </button>
        ) : (
          <button
            onClick={go_to_home}
            id={them == "white" ? "lightButton_bg" : ""}
          >
            انصراف
          </button>
        )}
      </div>
      {props.isIcon ? (
        <div
          className={them == "white" ? "iconL-Command" : "icon-Command"}
          id={them == "white" ? "lightButton_bg" : ""}
          onClick={oepn_command}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Command;
