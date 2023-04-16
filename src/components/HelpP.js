import { useState } from "react";
import "./HelpP.css";

const HelpP = (props) => {
  const [page1H, setPage1H] = useState();
  let them = window.localStorage.getItem("theme");
  const pathname = window.location.pathname;
  // alert(pathname);
  



  return (
    <div className="HelpP">
      <div className="content-HelpP" id={ "lightnb_bg" }>
        <div
          className="title-HelpP"
          id={ "borederBottom_Adv" }
        >
          راهنما
        </div>
        <div
          className="text-HelpP"
          id={ "borederBottom_Adv"}
        >
          {pathname === "/" || pathname === "/application/front/" || pathname.includes("Page1")   ? (
            <iframe
              src="https://asmart.ir/application/Help/help_html/main_control.html"
              name="targetframe"
              allowTransparency="true"
              frameborder="0"
            ></iframe>
          ) : (
            ""
          )}
          {pathname.includes("contact") ? (
            <iframe
              src="https://asmart.ir/application/Help/help_html/Phone_number.html"
              name="targetframe"
              allowTransparency="true"
              frameborder="0"
            ></iframe>
          ) : (
            ""
          )}
          {pathname.includes("sms") ? (
            <iframe
              src="https://asmart.ir/application/Help/help_html/sms_text.html"
              name="targetframe"
              allowTransparency="true"
              frameborder="0"
            ></iframe>
          ) : (
            ""
          )}
          {pathname.includes("charge") ? (
            <iframe
              src="https://asmart.ir/application/Help/help_html/sim_charge.html"
              name="targetframe"
              allowTransparency="true"
              frameborder="0"
            ></iframe>
          ) : (
            ""
          )}
          {pathname.includes("zon") ? (
            <iframe
              src="https://asmart.ir/application/Help/help_html/zone_name.html"
              name="targetframe"
              allowTransparency="true"
              frameborder="0"
            ></iframe>
          ) : (
            ""
          )}
          {pathname.includes("remote") ? (
            <iframe
              src="https://asmart.ir/application/Help/help_html/remote_name.html"
              name="targetframe"
              allowTransparency="true"
              frameborder="0"
            ></iframe>
          ) : (
            ""
          )}
          
          {pathname.includes("ChangePassDe") ? (
            <iframe
              src="https://asmart.ir/application/Help/help_html/password.html"
              name="targetframe"
              allowTransparency="true"
              frameborder="0"
            ></iframe>
          ) : (
            ""
          )}
        </div>
        <div className="button-HelpP">
          <button
            className="save-Infofrmation margin_AdvBu"
            id={ "lightButton_bg"}
            onClick={props.set_helpP}
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpP;
