import React, { useState } from "react";
import "./AddDevice.css";
import { Devices } from "../actions";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const AddDevice = (props) => {
  let them = window.localStorage.getItem("theme");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [selectModel, setSelectModel] = useState(false);
  const [selectAccess, setSelectAccess] = useState(false);
  const [selectPort, setSelectPort] = useState(false);
  const [selectOperator, setSelectOperator] = useState(false);
  const [model, setModel] = useState("ECO20");
  const [access, setAccess] = useState("");
  const [part, setPart] = useState("1");
  const [operator, setOperator] = useState("همراه اول");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const allData =
    window.localStorage.getItem("devices") != null
      ? JSON.parse(window.localStorage.getItem("devices"))
      : [];

  const change_select_model = () => {
    setSelectModel(!selectModel);
    setSelectOperator(false);
  };
  const change_select_access = () => {
    setSelectAccess(!selectAccess);
  };
  const change_select_port = () => {
    setSelectPort(!selectPort);
  };
  const change_select_operator = () => {
    setSelectOperator(!selectOperator);
    setSelectModel(false);
  };
  const set_model_device = (event) => {
    setError("");
    setModel(event.target.outerText);
    setSelectModel(!selectModel);
    if (event.target.outerText === "AIO21 PT") {
      setAccess("مدیر");
    } else {
      setAccess("");
    }
  };
  const set_access_device = (event) => {
    setAccess(event.target.outerText);
    setSelectAccess(!selectAccess);
  };
  const set_port_device = (event) => {
    setPart(event.target.id);
    setSelectPort(!selectPort);
  };
  const set_operator_device = (event) => {
    setError("");
    setOperator(event.target.outerText);
    setSelectOperator(!selectOperator);
  };
  const set_number_device = (event) => {
    setError("");
    // alert(event.target.value.slice(1,2))
    if (
      (event.target.value.slice(0, 1) == 0 ||
        event.target.value.slice(0, 1) == "") &&
      (event.target.value.slice(1, 2) == 9 ||
        event.target.value.slice(1, 2) == "") &&
      event.target.value.length <= 11
    ) {
      setNumber(event.target.value);
    } else if (
      !(
        event.target.value.slice(0, 1) == 0 ||
        event.target.value.slice(0, 1) == ""
      ) ||
      !(
        event.target.value.slice(1, 2) == 9 ||
        event.target.value.slice(1, 2) == ""
      )
    ) {
      event.target.value = "";
      setError("شماره موبایل به درستی وارد نشده");
    } else if (!(event.target.value.length <= 11)) {
      event.target.value = number;
      setError("شماره موبایل نمی تواند بیش تر از 11 رقم باشد");
    }
  };

  const click_selector_access = (event) => {};
  const close_selectore = () => {
    setSelectModel(false);
    setSelectOperator(false);
  };
  const set_name_device = (event) => {
    setError("");
    setName(event.target.value);
  };
  const set_password_device = (event) => {
    if (event.target.value.length <= 12) {
      setError("");
      setPassword(event.target.value);
      // event.target.value=password;
    } else {
      event.target.value = password;
      setError("رمز دستگاه نمی تواند بیشتر از 12 رقم باشد");
    }
  };
  const partitions = [
    { name: "پارتیشن 1", state: "غیر فعال" },
    { name: "پارتیشن 2", state: "غیر فعال" },
    { name: "پارتیشن 3", state: "غیر فعال" },
    { name: "پارتیشن 4", state: "غیر فعال" },
    { name: "پارتیشن 5", state: "غیر فعال" },
  ];
  const add_device = async () => {
    let nameOk = 0 < name.length ? 0 : 1;
    let passwordOk =
      4 <= password.length && password.length <= 12 ? true : false;
    let numberOk = 9000000000 <= number && number <= 9999999999 ? 0 : 1;
    for (let item of allData) {
      if (item.name == name) {
        nameOk = 2;
      }
//شماره تکراری
      // if (item.number == number) {
      //   numberOk = 2;
      // }
    }

    const zones =
      model == "ECO20"
        ? [
            { name: "خالی", number: "1", state: "غیر فعال" },
            { name: "خالی", number: "2", state: "غیر فعال" },
            { name: "خالی", number: "3", state: "غیر فعال" },
            { name: "خالی", number: "4", state: "غیر فعال" },
            { name: "خالی", number: "5", state: "غیر فعال" },
          ]
        : model == "AS20"
        ? [
            { name: "خالی", number: "1", state: "غیر فعال" },
            { name: "خالی", number: "2", state: "غیر فعال" },
            { name: "خالی", number: "3", state: "غیر فعال" },
            { name: "خالی", number: "4", state: "غیر فعال" },
            { name: "خالی", number: "5", state: "غیر فعال" },
          ]
        : model == "AIO21"
        ? [
            { name: "خالی", number: "1", state: "غیر فعال" },
            { name: "خالی", number: "2", state: "غیر فعال" },
            { name: "خالی", number: "3", state: "غیر فعال" },
            { name: "خالی", number: "4", state: "غیر فعال" },
            { name: "خالی", number: "5", state: "غیر فعال" },
            { name: "خالی", number: "6", state: "غیر فعال" },
            { name: "خالی", number: "7", state: "غیر فعال" },
            { name: "خالی", number: "8", state: "غیر فعال" },
          ]
        : model == "AIO21"
        ? [
            { name: "خالی", number: "1", state: "غیر فعال" },
            { name: "خالی", number: "2", state: "غیر فعال" },
            { name: "خالی", number: "3", state: "غیر فعال" },
            { name: "خالی", number: "4", state: "غیر فعال" },
            { name: "خالی", number: "5", state: "غیر فعال" },
            { name: "خالی", number: "6", state: "غیر فعال" },
            { name: "خالی", number: "7", state: "غیر فعال" },
            { name: "خالی", number: "8", state: "غیر فعال" },
          ]
        : model == "AIO21 PT"
        ? [
            { name: "خالی", number: "1", state: "غیر فعال" },
            { name: "خالی", number: "2", state: "غیر فعال" },
            { name: "خالی", number: "3", state: "غیر فعال" },
            { name: "خالی", number: "4", state: "غیر فعال" },
            { name: "خالی", number: "5", state: "غیر فعال" },
            { name: "خالی", number: "6", state: "غیر فعال" },
            { name: "خالی", number: "7", state: "غیر فعال" },
            { name: "خالی", number: "8", state: "غیر فعال" },
          ]
        : "";

    const remotes =
      model == ("ECO20" || "AS20")
        ? [
            { name: "1ریموت ", type: " خالی", number: " 1", state: "غیر فعال" },
            { name: "2ریموت ", type: " خالی", number: "2", state: "غیر فعال" },
            { name: "3ریموت", type: " خالی", number: " 3", state: "غیر فعال" },
            { name: "4ریموت", type: " خالی", number: "4", state: "غیر فعال" },
            { name: "5ریموت ", type: " خالی", number: "5", state: "غیر فعال" },
            { name: "6ریموت ", type: " خالی", number: "6", state: "غیر فعال" },
            { name: "7ریموت ", type: " خالی", number: "7", state: "غیر فعال" },
            { name: "8ریموت", type: " خالی", number: "8", state: "غیر فعال" },
            { name: "9ریموت", type: " خالی", number: "9", state: "غیر فعال" },
            { name: "10ریموت", type: " خالی", number: "10", state: "غیر فعال" },
          ]
        : model == "AIO21"
        ? [
            { name: "ریموت ", type: " خالی", number: " 1", state: "غیر فعال" },
            { name: "ریموت 2", type: " خالی", number: "2", state: "غیر فعال" },
            { name: "3 ریموت", type: " خالی", number: " 3", state: "غیر فعال" },
            { name: "4 ریموت", type: " خالی", number: "4", state: "غیر فعال" },
            { name: "ریموت 5", type: " خالی", number: "5", state: "غیر فعال" },
            { name: "ریموت 6", type: " خالی", number: "6", state: "غیر فعال" },
            { name: "ریموت 7", type: " خالی", number: "7", state: "غیر فعال" },
            { name: "ریموت 8", type: " خالی", number: "8", state: "غیر فعال" },
            { name: "ریموت 9", type: " خالی", number: "9", state: "غیر فعال" },
            {
              name: "ریموت 10",
              type: " خالی",
              number: "10",
              state: "غیر فعال",
            },
            {
              name: "ریموت 11",
              type: " خالی",
              number: "11",
              state: "غیر فعال",
            },
            {
              name: "ریموت 12",
              type: " خالی",
              number: "12",
              state: "غیر فعال",
            },
            {
              name: "ریموت 13",
              type: " خالی",
              number: "13",
              state: "غیر فعال",
            },
            {
              name: "ریموت 14",
              type: " خالی",
              number: "14",
              state: "غیر فعال",
            },
            {
              name: "ریموت 15",
              type: " خالی",
              number: "15",
              state: "غیر فعال",
            },
          ]
        : model == "AS20"
        ? [
            { name: "1ریموت", type: " خالی", number: " 1", state: "غیر فعال" },
            { name: "2ریموت", type: " خالی", number: "2", state: "غیر فعال" },
            { name: "3ریموت", type: " خالی", number: " 3", state: "غیر فعال" },
            { name: "4ریموت", type: " خالی", number: "4", state: "غیر فعال" },
            { name: "5ریموت", type: " خالی", number: "5", state: "غیر فعال" },
            { name: "ریموت 6", type: " خالی", number: "6", state: "غیر فعال" },
            { name: "ریموت 7", type: " خالی", number: "7", state: "غیر فعال" },
            { name: "ریموت 8", type: " خالی", number: "8", state: "غیر فعال" },
            { name: "ریموت 9", type: " خالی", number: "9", state: "غیر فعال" },
            {
              name: "ریموت 10",
              type: " خالی",
              number: "10",
              state: "غیر فعال",
            },
          ]
        : model == "AIO21 PT"
        ? [
            { name: "1ریموت", type: " خالی", number: " 1", state: "غیر فعال" },
            { name: "2ریموت", type: " خالی", number: "2", state: "غیر فعال" },
            { name: "3ریموت", type: " خالی", number: " 3", state: "غیر فعال" },
            { name: "4ریموت", type: " خالی", number: "4", state: "غیر فعال" },
            { name: "5ریموت", type: " خالی", number: "5", state: "غیر فعال" },
            { name: "ریموت 6", type: " خالی", number: "6", state: "غیر فعال" },
            { name: "ریموت 7", type: " خالی", number: "7", state: "غیر فعال" },
            { name: "ریموت 8", type: " خالی", number: "8", state: "غیر فعال" },
            { name: "ریموت 9", type: " خالی", number: "9", state: "غیر فعال" },
            {
              name: "ریموت 10",
              type: " خالی",
              number: "10",
              state: "غیر فعال",
            },
          ]
        : "";

    const smss =
      model == "AIO21"
        ? [
            { name: " متن پیامک 1", text: "خالی", number: "1" },
            { name: "متن پیامک 2", text: "خالی", number: "2" },
            { name: "متن پیامک 3", text: "خالی", number: "3" },
            { name: "متن پیامک 4", text: "خالی", number: "4" },
            { name: "متن پیامک 5", text: "خالی", number: "1" },
            { name: "متن پیامک 6", text: "خالی", number: "6" },
            { name: "متن پیامک 7", text: "خالی", number: "7" },
            { name: "متن پیامک 8", text: "خالی", number: "8" },
          ]
        : model == "ECO20"
        ? [
            { name: "متن پیامک 1", text: "خالی", number: "1" },
            { name: "متن پیامک 2", text: "خالی", number: "2" },
          ]
        : model == "AIO21 PT"
        ? access === "مدیر"
          ? [
              { name: "متن پیامک 1", text: "خالی", number: "1" },
              { name: "متن پیامک 2", text: "خالی", number: "2" },
              { name: "متن پیامک 3", text: "خالی", number: "3" },
              { name: "متن پیامک 4", text: "خالی", number: "4" },
              { name: "متن پیامک 5", text: "خالی", number: "5" },
            ]
          : [{ name: "متن پیامک 1", text: "خالی", number: "1" }]
        : [
            { name: "متن پیامک 1", text: "خالی", number: "1" },
            { name: "متن پیامک 2", text: "خالی", number: "2" },
          ];

    const contact =
      model != "AIO21 PT"
        ? [
            { number: "خالی", description: "شماره 1", index: 1 },
            { number: "خالی", description: "شماره 2", index: 2 },
            { number: "خالی", description: "شماره 3", index: 3 },
            { number: "خالی", description: "شماره 4", index: 4 },
            { number: "خالی", description: "شماره 5", index: 5 },
            { number: "خالی", description: "شماره 6", index: 6 },
            { number: "خالی", description: "شماره 7", index: 7 },
            { number: "خالی", description: "شماره 8", index: 8 },
            { number: "خالی", description: "شماره 9", index: 9 },
            { number: "خالی", description: "شماره 10", index: 10 },
          ]
        : 
         [
            { number: "خالی", description: "شماره 1", index: 1 },
            { number: "خالی", description: "شماره 2", index: 2 },
            { number: "خالی", description: "شماره 3", index: 3 },
            { number: "خالی", description: "شماره 4", index: 4 },
            { number: "خالی", description: "شماره 5", index: 5 },
          ]
        ;
    if (passwordOk && nameOk == 0 && numberOk == 0) {
      dispatch(
        Devices({
          name: name,
          password: password,
          model: model,
          access: access,
          number: number,
          operator: operator,
          part: part,
          zones: zones,
          remotes: remotes,
          smss: smss,
          partitions: partitions,
          contact: contact,
          states: {
            battery: model == "AIO21" || model == "AIO21 PT" ? "0" : "not",
            beeper: "0",
            connection: "0",
            work: "0",
            phone: model != "ECO20" ? "0" : "not",
            ajir: "0",
          },
          out: [
            { state: "off", name: "خروجی اول", key: "o1" },
            { state: "off", name: "خروجی دوم", key: "o2" },
          ],
        })
      );
      props.close_add_device();
    } else {
      if (!passwordOk) {
        setError("رمز دستگاه باید 4 تا 12 رقم باشد");
      }
      switch (nameOk) {
        case 1:
          setError("نام دستگاه نمی تواند خالی باشد");
          break;
        case 2:
          setError("نام دستگاه نمی تواند تکراری باشد");
          break;
        default:
          break;
      }
      switch (numberOk) {
        case 1:
          setError("شماره موبایل به درستی وارد نشده");
          break;
        case 2:
          setError("قبلا با این شماره موبایل دستگاهی را ثبت کردید");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="bg-Page1">
      <div className="bgb-Page1" id={them == "white" ? "light_bg" : ""}>
        <div className="AddDevice">
          <div
            className="centerPart-AddDevice"
            id={them == "white" ? "lightnb_bg" : ""}
          >
            <div
              className="titl-AddDevice"
              id={them == "white" ? "title_light" : ""}
            >
              <p style={{ fontSize: "medium", fontWeight: "400" }}>
                اطلاعات دستگاه{" "}
              </p>
            </div>
            <div className="inputs-AddDevice">
              <div
                className="part1Inp-AddDevice"
                style={{ fontSize: "small", fontWeight: "400" }}
              >
                <span className="titlInp-AddDevice">مدل دستگاه</span>
                <span
                  className="selectModel-AddDevice"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  <div onClick={change_select_model}>
                    <span
                      className={
                        them == "white"
                          ? "moreIconL-AddDevice"
                          : "moreIcon-AddDevice"
                      }
                    ></span>
                    <span className="selected-AddDevice">{model}</span>
                  </div>
                  <ul style={{ height: selectModel ? "" : "0px" }}>
                    <li onClick={set_model_device}>ECO20</li>
                    <li onClick={set_model_device}>AS20</li>
                    <li onClick={set_model_device}>AIO21</li>
                    <li onClick={set_model_device}>AIO21 PT</li>
                  </ul>
                </span>
              </div>
              {model == "AIO21 PT" ? (
                <div className="part5Inp-AddDevice">
                  <span className="selectModel-AddDevice">
                    <div onClick={change_select_access}>
                      <span className="moreIcon-AddDevice"></span>
                      <span className="selected-AddDevice">{access}</span>
                    </div>
                    <ul style={{ height: selectAccess ? "" : "0px" }}>
                      <li onClick={set_access_device}>مدیر</li>
                      <li onClick={set_access_device}>کاربر</li>
                    </ul>
                  </span>
                  <span className="titlInp-AddDevice">دسترسی</span>
                </div>
              ) : (
                ""
              )}
              {access == "کاربر" && model === "AIO21 PT" ? (
                <div className="part6Inp-AddDevice">
                  <span className="selectModel-AddDevice">
                    <div onClick={change_select_port}>
                      <span className="moreIcon-AddDevice"></span>
                      <span className="selected-AddDevice">
                        {partitions[part - 1].name}
                      </span>
                    </div>
                    <ul style={{ height: selectPort ? "" : "0px" }}>
                      <li onClick={set_port_device} id="1">
                        خروجی1
                      </li>
                      <li onClick={set_port_device} id="2">
                        خروجی2
                      </li>
                      <li onClick={set_port_device} id="3">
                        خروجی3
                      </li>
                      <li onClick={set_port_device} id="4">
                        خروجی4
                      </li>
                      <li onClick={set_port_device} id="5">
                        خروجی5
                      </li>
                    </ul>
                  </span>
                  <span className="titlInp-AddDevice">خروجی</span>
                </div>
              ) : (
                ""
              )}

              <div className="part2Inp-AddDevice">
                <span>
                  <input
                    type="text"
                    id={them == "white" ? "lightButtonnb_bg" : ""}
                    autocomplete="off"
                    onChange={set_name_device}
                    onClick={close_selectore}
                  />
                </span>
                <span className="titlInp-AddDevice">نام دستگاه</span>
              </div>
              <div className="part3Inp-AddDevice">
                <span>
                  <input
                    type="number"
                    id={them == "white" ? "lightButtonnb_bg" : ""}
                    lang="en"
                    className="left"
                    autocomplete="off"
                    maxLength={11}
                    onChange={set_number_device}
                    onClick={close_selectore}
                  />
                </span>

                <span className="titlInp-AddDevice">شماره سیم کارت</span>
              </div>
              <div className="part4Inp-AddDevice">
                <span>
                  <input
                    type="number"
                    id={them == "white" ? "lightButtonnb_bg" : ""}
                    className="left"
                    lang="en"
                    autocomplete="off"
                    minLength={4}
                    maxLength={12}
                    onChange={set_password_device}
                    onClick={close_selectore}
                  />
                </span>
                <span className="">رمز دستگاه</span>
              </div>
              <div className="part7Inp-AddDevice">
                <span
                  className="selectModel-AddDevice"
                  id={them == "white" ? "lightButton_bg" : ""}
                >
                  <div onClick={change_select_operator}>
                    <span
                      className={
                        them == "white"
                          ? "moreIconL-AddDevice"
                          : "moreIcon-AddDevice"
                      }
                    ></span>
                    <span className="selected-AddDevice">{operator}</span>
                  </div>
                  <ul style={{ height: selectOperator ? "" : "0px" }}>
                    <li onClick={set_operator_device}>همراه اول</li>
                    <li onClick={set_operator_device}>ایرانسل</li>
                    <li onClick={set_operator_device}>رایتل</li>
                    <li onClick={set_operator_device}>سایر</li>
                  </ul>
                </span>
                <span className="titlInp-AddDevice">اپراتور</span>
              </div>
            </div>
            <div className="error-AddDevice">
              <span>{error}</span>
            </div>
            <div
              className="controller-AddDevice"
              style={{ fontSize: "small", fontWeight: "500" }}
            >
              <button
                onClick={add_device}
                id={them == "white" ? "lightButton_bg" : ""}
              >
                تایید
              </button>
              <button
                onClick={props.close_add_device}
                id={them == "white" ? "lightButton_bg" : ""}
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
