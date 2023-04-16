import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Page1 from "./components/Page1";
import Setting from "./components/Setting";
import Contacts from "./components/Contacts";
import Sms from "./components/Sms";
import ZoonInfo from "./components/ZoonInfo";
import Remotes from "./components/Remotes";
import OutPuts from "./components/OutPuts";
import Charge from "./components/Charge";
import Command from "./components/Command";
import { useSelector, useDispatch } from "react-redux";
import { HideCommand, VisibleCommand } from "./actions/index";
import Cache from "js-local-cache";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddDevice from "./components/AddDevice";
import ContactAlert from "./components/ContactAlert";
import Information from "./components/Information";
import Alert from "./components/Alert";
import SettingG from "./components/SettingG";
import Login from "./components/Login";
import About from "./components/About";
import Help from "./components/Help";
import PartitionAlert from "./components/PartitionAlert";
import PartitionList from "./components/PartitionList";
import ChangePassDe from "./components/ChangePassDe";
import Adv from "./components/Adv";
import AdvMa from "./components/AdvMa";
import AdvAj from "./components/AdvAj";
import AdvZo from "./components/AdvZo";
import AdvRe from "./components/AdvRe";
import AdvOu from "./components/AdvOu";
import AdvOt from "./components/AdvOt";
import HelpP from "./components/HelpP";
// import Information from './components/Information';

function App() {
  const[helpP,setHelpP]=useState(false);
  const set_helpP=()=>{
    setHelpP(!helpP)
  }
  
  const commandState = useSelector((state) => state.Command);
  const dispatch = useDispatch();
  const deviceListT = useSelector((state) => state.Devices);
  const device = JSON.parse(window.localStorage.getItem("device"));
  let devices =
    window.localStorage.getItem("devices") != null
      ? JSON.parse(window.localStorage.getItem("devices"))
      : [];
  const [refresh, setRefresh] = useState(false);
  // const deviceName = useSelector((state) => state.Device.name);
  // alert(device)
  const deviceName = device != null ? device.name : "";
  // const device = useSelector((state) => state.device);
  const isLogin = JSON.parse(window.localStorage.getItem("isLogin"));
  const password = localStorage.getItem("password");
  const title = useSelector((state) => state.Alert.title);

  // const routingComponent = (pathNmae) => {
  //   let result = <> </>;

  //   if (pathNmae.search("blogs.html") != -1) {
  //     result = <Blogs />;
  //   }

  //   if (pathNmae.search("home.html") != -1) {
  //     result = <Home />;
  //   }

  //   return result;
  // };

  let devicesList =
    window.localStorage.getItem("devices") != null
      ? JSON.parse(window.localStorage.getItem("devices"))
      : [];

  //  console.log('vvv',devicesList);
  const set_refresh = () => {
    setRefresh(!refresh);
  };
  let [pageState, setPageState] = useState("");
  console.log("app.js: pi" + pageState);

  let zoonList = [];
  let remotesList = [];
  let contactsList = [];
  let smsList = [];
  let outPutsList = [];
  console.log("mm", devices);
  const set_data = () => {
    for (let i = 0; i < devices.length; i++) {
      if (devices[i].name == deviceName) {
        zoonList = devices[i].zones;
        remotesList = devices[i].remotes;
        contactsList = devices[i].contact;
        outPutsList = devices[i].out;

        smsList = devices[i].smss;
        break;
      }
    }
  };

  set_data();

  const change_page = (pageValue) => {
    console.log("app.js: page is" + pageValue);
  };
  console.log("app.js:sms List is", smsList);
  const show_smsList = () => {
    devices =
      window.localStorage.getItem("devices") != null
        ? JSON.parse(window.localStorage.getItem("devices"))
        : [];
    // setRefresh(!refresh);
    // smsList=devices[i].smss;
    set_data();
    setRefresh(!refresh);
  };
  const pathName = window.location.pathname;
  // alert(pathName)
  let content =
   (password == null || password == undefined || password == "" || isLogin!=0) ? (
    <Page1 changePage={change_page} data={devicesList} set_helpP={set_helpP}/>
  ) : <Login/>;


  window.localStorage.setItem("isLogin",0);
   
  if (pathName.search("/Setting") != -1) {
    content = <Setting changePage={change_page} set_helpP={set_helpP}> </Setting>;
  }
  if (pathName.search("/charge") != -1) {
    content = <Charge changePage={change_page} data={"2000"}  set_helpP={set_helpP}/>;
  }
  if (pathName.search("/sms") != -1) {
    content = (
      <Sms
        show_smsList={show_smsList}
        changePage={change_page}
        data={smsList}
        set_helpP={set_helpP}
      />
    );
  }
  if (pathName.search("/contact") != -1) {
    content = <Contacts changePage={change_page} data={contactsList} set_helpP={set_helpP}/>;
  }
  if (pathName.search("/outPut") != -1) {
    content = <OutPuts changePage={change_page} data={outPutsList} set_helpP={set_helpP}/>;
  }
  if (pathName.search("/remote") != -1) {
    content = <Remotes changePage={change_page} data={remotesList} set_helpP={set_helpP}/>;
  }

  if (pathName.search("/info") != -1) {
    content = <Information data={devicesList} set_helpP={set_helpP}/>;
  }
  if (pathName.search("/zon") != -1) {
    content = <ZoonInfo changePage={change_page} data={zoonList} set_helpP={set_helpP}/>;
  }
  if (pathName.search("/partitionS") != -1) {
    content = <PartitionList set_helpP={set_helpP}/>;
  }

  if (pathName.search("/settingG") != -1) {
    content = <SettingG set_helpP={set_helpP}/>;
    // content ='salam'
  }
  if (pathName.search("/Page1") != -1) {
    content = <Page1 set_helpP={set_helpP}/>;
    // content ='salam'
  }

  if (pathName.search("/command") != -1) {
    
    // content ='salam'
    <Command isIcon={false} setRefreshPage={set_refresh}/>
  }
  if (pathName.search("/ChangePassDe") != -1) {


   content=<ChangePassDe set_helpP={set_helpP}/>
  }

  if(pathName.search("/adv")!=-1){
    content=<Adv />
  }
  if(pathName.search("/AdvMa")!=-1){
    content=<AdvMa/>
  }
  if(pathName.search("/AdvAj")!=-1){
    content=<AdvAj/>
  }
  if(pathName.search("/AdvZo")!=-1){
    content=<AdvZo/>
  }
  if(pathName.search("/AdvRe")!=-1){
    content=<AdvRe/>
  }
  if(pathName.search("/AdvOu")!=-1){
    content=<AdvOu/>
  }
  if(pathName.search("/AdvOt")!=-1){
    content=<AdvOt/>
  }



  return (
    <div className="App">
      {helpP ? <HelpP set_helpP={set_helpP}/>:''}
      {content}
     
    </div>
  );
}

export default App;
