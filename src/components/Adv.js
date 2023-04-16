import React from "react";
import Command from "./Command";
import "./Setting.css";
import "./Adv.css"

const Adv = () => {
  let them = window.localStorage.getItem("theme");
  let device = JSON.parse(window.localStorage.getItem("device"));
  let access = device.access;
  const name = device.name;

  const model = device.model;
  alert("فقط مدیر (شماره اول لیست تماس) قادربه تغییرات این قسمت می باشد")
  return (
    <div className="Adv">
      <Command name={name} isIcon={true}></Command>
      <div className="bg-Setting">
        <div className="bgb-Setting" id={them == "white" ? "light_bg" : ""}>
          <div className="header-Setting">
            <div className="helpButton" ></div>
            <div className="titlPart-Setting">
              <p style={{}}>{name}</p>
            </div>
          </div>

          <div className="menu-Setting">
          <a href={"./AdvMa.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item1-Setting"}
                
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "iconMaL-Adv"
                      : "iconMa-Adv"
                  }
                ></div>
                <div className="text-Setting">
                  <span>تنظیمات مدیر</span>
                </div>
              </div>
            </a>
            {/*  */}
            <a href={"./AdvAj.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item1-Setting"}
                
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "iconAjL-Adv"
                      : "iconAj-Adv"
                  }
                ></div>
                <div className="text-Setting">
                  <span>تنظیمات آژیر</span>
                </div>
              </div>
            </a>
            {/*  */}
            <a href={"./AdvZo.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item1-Setting"}
                
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "iconZoL-Adv"
                      : "iconZo-Adv"
                  }
                ></div>
                <div className="text-Setting">
                  <span>تنظیمات زون ها</span>
                </div>
              </div>
            </a>
            {/*  */}
            <a href={"./AdvRe.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item1-Setting"}
                
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "iconReL-Adv"
                      : "iconRe-Adv"
                  }
                ></div>
                <div className="text-Setting">
                  <span>ریموت ها </span>
                </div>
              </div>
            </a>
            {/*  */}
            <a href={"./AdvOu.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item1-Setting"}
                
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "iconOuL-Adv"
                      : "iconOu-Adv"
                  }
                ></div>
                <div className="text-Setting">
                  <span>خروجی ها</span>
                </div>
              </div>
            </a>
            {/*  */}
            <a href={"./AdvOt.html"}>
              <div
                className="item-Setting"
                id={them == "white" ? "lightButtonnb_bg" : "item1-Setting"}
                
              >
                <div
                  className="icon-Setting"
                  id={
                    them == "white"
                      ? "iconOtL-Adv"
                      : "iconOt-Adv"
                  }
                ></div>
                <div className="text-Setting">
                  <span>سایر تنظیمات</span>
                </div>
              </div>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Adv;
