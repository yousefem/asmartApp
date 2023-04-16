import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Alert.css";
import { Link } from "react-router-dom";
import { deleteDevice } from "../actions";

const Alert = (props) => {
  //params
  let them = window.localStorage.getItem("theme");
  let device = window.localStorage.getItem("device");
  let title = props.title;
  let description = props.description;
  let operator = props.operator;
  let name = props.name;
  // let backTo=useSelector(state=>state.Alert.backTo);

  const dispatch = useDispatch();
  const response_yes = () => {
    switch (operator) {
      case "delete_device":
        dispatch(deleteDevice(name));
        break;
      default:
        break;
    }
props.close_delete_alert()
    // window.history.back();
  };
  const response_no = () => {
    props.close_delete_alert()
    // window.history.back();
  };
  return (
    <div className="Alert">
      <div className="bg-Alert" id={them == "white" ? "light_bg" : ""}>
        <div className="content-Alert" id={them == "white" ? "lightnb_bg" : ""}>
          <div
            className="title-Alert"
            id={them == "white" ? "title_light" : ""}
          >
            <p> {title} </p>
          </div>{" "}
          <div
            className="description-Alert"
            id={them == "white" ? "light_text" : ""}
          >
            <p> {description} </p>
          </div>{" "}
          <div className="controller-Alert">
            <button
              onClick={response_yes}
              id={them == "white" ? "lightButton_bg" : ""}
            >
              {" "}
              بله{" "}
            </button>{" "}
            <button
              onClick={response_no}
              id={them == "white" ? "lightButton_bg" : ""}
            >
              {" "}
              خیر{" "}
            </button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Alert;
