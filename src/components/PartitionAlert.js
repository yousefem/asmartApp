import "./PartitionAlert.css";
// import { Link } from "react-router-dom";
import { useState } from "react";
import {} from "../actions";
import { useDispatch, useSelector } from "react-redux";

const PartitionAlert = (props) => {
  // alert(props.type)
  let them=window.localStorage.getItem('theme')
  let device=JSON.parse(window.localStorage.getItem('device'));
  const dispatch = useDispatch();
  const number = device.number;
  const password = device.password;
  const partitionsName=device.partitions;
 
  let partitions = "";

  const [partitionList, setPartitionList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const click_submit = () => {
    props.close_alert_partition();
  };

  for (let i = 0; i <= partitionList.length; i++) {
    if (partitionList[i]) {
      partitions = partitions + ":p" + (i + 1);
    }
  }

  const click_selector_part = (event) => {
    switch (event.target.id) {
      case "part1":
        setPartitionList([
          !partitionList[0],
          partitionList[1],
          partitionList[2],
          partitionList[3],
          partitionList[4],
        ]);
        break;

      case "part2":
        setPartitionList([
          partitionList[0],
          !partitionList[1],
          partitionList[2],
          partitionList[3],
          partitionList[4],
        ]);
        break;

      case "part3":
        setPartitionList([
          partitionList[0],
          partitionList[1],
          !partitionList[2],
          partitionList[3],
          partitionList[4],
        ]);
        break;

      case "part4":
        setPartitionList([
          partitionList[0],
          partitionList[1],
          partitionList[2],
          !partitionList[3],
          partitionList[4],
        ]);
        break;

      case "part5":
        setPartitionList([
          partitionList[0],
          partitionList[1],
          partitionList[2],
          partitionList[3],
          !partitionList[4],
        ]);
        break;
    }
  };

  return (
    <div className="PartitionAlert">
      <div className="contaner-PartionAlert" id={them==='white' ? 'lightnb_bg':''}>
        <div className="title-PartitionAlert">
          <p> پارتیشن مورد نظر خود را انتخاب کنید </p>{" "}
        </div>{" "}
        <div className="partions-PartitionAlert">
          <ul>
            <li onClick={click_selector_part} id="p1" className={them=='white' ?  'lightButtonnb_bg':''}>
              <input type={"checkbox"} value="part1" name="part1" id="part1" />
              <label for="part1">{partitionsName[0].name} </label>{" "}
            </li>{" "}
            <li onClick={click_selector_part} id="p2" className={them=='white' ?  'lightButtonnb_bg':''}>
              <input type={"checkbox"} value="part1" name="part2" id="part2" />
              <label for="part2"> {partitionsName[1].name} </label>{" "}
            </li>{" "}
            <li onClick={click_selector_part} id="p3" className={them=='white' ?  'lightButtonnb_bg':''}>
              <input type={"checkbox"} value="part1" name="part3" id="part3" />
              <label for="part3"> {partitionsName[2].name} </label>{" "}
            </li>{" "}
            <li onClick={click_selector_part} id="p4" className={them=='white' ?  'lightButtonnb_bg':''}>
              <input type={"checkbox"} value="part1" name="part4" id="part4" />
              <label for="part4"> {partitionsName[3].name} </label>{" "}
            </li>{" "}
            <li onClick={click_selector_part} id="p5" className={them=='white' ?  'lightButtonnb_bg':''}>
              <input type={"checkbox"} value="part1" name="part5" id="part5" />
              <label for="part5"> {partitionsName[4].name} </label>{" "}
            </li>
          </ul>{" "}
        </div>{" "}
        <div className="function-PartitionAlert" >
          <a
            href={
              "sms:" +
              number +
              "?&body=*A:" +
              password +
              "%23" +
              (props.type === "active" ? "ARM" : "DISARM") +
              partitions
            }
            
          >
            <button id={them=='white' ?  'lightButtonnb_bg':''} onClick={click_submit}> تایید </button>{" "}
          </a>{" "}
          <a href="./">
            <button  id={them=='white' ?  'lightButtonnb_bg':''} onClick={props.close_alert_partition}> انصراف </button>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default PartitionAlert;
