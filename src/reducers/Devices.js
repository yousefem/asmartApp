const Devices = (state = (window.localStorage.getItem('devices') == null ? [] : JSON.parse(window.localStorage.getItem('devices'))), action) => {


    switch (action.type) {

        case 'ADD_DEVICE':
            let testState = []
            for (let i = 0; i < state.length; i++) {
                if (action.name != state[i].name) {
                    testState.push(state[i])
                }
            }
            testState.push(action.device);


            window.localStorage.setItem('devices', JSON.stringify(testState));


            return state = testState
            break;
        case 'CHANGE_DEVICE':


            let NewDeviceList = []
            for (let i = 0; i < state.length; i++) {
                if (action.name == state[i].name) {

                    NewDeviceList.push(state[i])
                    NewDeviceList[i].name = action.newName;
                    NewDeviceList[i].number = action.number;
                    NewDeviceList[i].password = action.password;
                    NewDeviceList[i].operator = action.operator;
                    NewDeviceList[i].access = action.access;
                    NewDeviceList[i].part = action.part;
                    NewDeviceList[i].partitions = action.devicepartL;
                    // NewDeviceList[i].partitions = action.part;




                } else {
                    NewDeviceList.push(state[i])

                }

            }
            window.localStorage.setItem('devices', JSON.stringify(NewDeviceList));
            return state = NewDeviceList;
            break;

        case 'DELETE_DEVICE':
            let deviceList = [];
            for (let i = 0; i < state.length; i++) {
                if (action.name != state[i].name) {
                    deviceList.push(state[i]);


                }

            }

            window.localStorage.setItem('devices', JSON.stringify(deviceList));
            return state = deviceList;
            break;
        case 'CHANGE_DEVICE_T':
            console.log('sss', action.device);

            let deviceList2 = []
            for (let i = 0; i < state.length; i++) {
                if (action.name != state[i].name) {

                    deviceList2[i] = state[i]
                } else {


                    deviceList2[i] = action.device;

                }
            }

            window.localStorage.setItem('devices', JSON.stringify(deviceList2));
            return state = deviceList2;

            break;
        case 'UPDATE_STATUS':

            let deviceListUS = [];


            for (let i = 0; i < state.length; i++) {
                if (action.asset.Name == state[i].name) {
                    deviceListUS.push(state[i]);
                    if (action.asset.model == 'AIO21') {
                        deviceListUS[i].states.work = (action.data[0]);
                        deviceListUS[i].states.ajir = (action.data[1]);
                        deviceListUS[i].states.connection = (action.data[2]);
                        deviceListUS[i].states.battery = (action.data[3]);
                        deviceListUS[i].states.phone = (action.data[action.data.length - 2]);
                        deviceListUS[i].states.beeper = (action.data[action.data.length - 1]);
                    } else if (action.asset.model == 'AS20') {
                        deviceListUS[i].states.work = (action.data[0]);
                        deviceListUS[i].states.ajir = (action.data[1]);
                        deviceListUS[i].states.connection = (action.data[2]);
                        deviceListUS[i].states.phone = (action.data[action.data.length - 2]);
                        deviceListUS[i].states.beeper = (action.data[action.data.length] - 1);
                    } else if (action.asset.model == 'ECO20') {
                        deviceListUS[i].states.work = (action.data[0]);
                        deviceListUS[i].states.ajir = (action.data[1]);
                        deviceListUS[i].states.connection = (action.data[2]);
                        deviceListUS[i].states.beeper = (action.data[action.data.length - 2]);

                    } else if (action.asset.model == 'AIO21 PT' && action.asset.access === 'مدیر') {


                        deviceListUS[i].states.connection = (action.data[action.data.length - 4]);
                        deviceListUS[i].states.battery = (action.data[action.data.length - 3]);
                        deviceListUS[i].states.phone = (action.data[action.data.length - 2]);
                        deviceListUS[i].states.beeper = (action.data[action.data.length - 1]);

                        action.data[1] = action.data[1].slice(3, action.data[1].length);
                        deviceListUS[i].partitions[0].state = action.data[0].toLowerCase() === 'disarm' ? 'غیر فعال' : (action.data[0].toLowerCase() === 'arm' ? 'فعال' : (action.data[0].toLowerCase() === 'dis' ? 'خارج از دسترس' : 'خارج از سرویس'));
                        deviceListUS[i].partitions[1].state = action.data[1].toLowerCase() === 'disarm' ? 'غیر فعال' : (action.data[1].toLowerCase() === 'arm' ? 'فعال' : (action.data[1].toLowerCase() === 'dis' ? 'خارج از دسترس' : 'خارج از سرویس'));
                        deviceListUS[i].partitions[2].state = action.data[2].toLowerCase() === 'disarm' ? 'غیر فعال' : (action.data[2].toLowerCase() === 'arm' ? 'فعال' : (action.data[2].toLowerCase() === 'dis' ? 'خارج از دسترس' : 'خارج از سرویس'));
                        deviceListUS[i].partitions[3].state = action.data[3].toLowerCase() === 'disarm' ? 'غیر فعال' : (action.data[3].toLowerCase() === 'arm' ? 'فعال' : (action.data[3].toLowerCase() === 'dis' ? 'خارج از دسترس' : 'خارج از سرویس'));
                        deviceListUS[i].partitions[4].state = action.data[4].toLowerCase() === 'disarm' ? 'غیر فعال' : (action.data[4].toLowerCase() === 'arm' ? 'فعال' : (action.data[4].toLowerCase() === 'dis' ? 'خارج از دسترس' : 'خارج از سرویس'));

                    } else if (action.asset.model === 'AIO21 PT' && action.asset.access === 'کاربر') {

                        deviceListUS[i].states.work = action.data[0]
                        deviceListUS[i].states.ajir = action.data[1]
                        deviceListUS[i].states.power = action.data[2]
                        deviceListUS[i].states.battery = action.data[3]
                        deviceListUS[i].states.phone = action.data[4]
                        deviceListUS[i].states.beeper = action.data[5]
                    }



                } else {
                    deviceListUS.push(state[i]);
                }
            }

            window.localStorage.setItem('devices', JSON.stringify(deviceListUS));
            return state = deviceListUS;
            break;
        case 'UPDATE_out:':

            let deviceListUO = []
            for (let i = 0; i < state.length; i++) {
                if (state[i].name == action.asset.Name) {
                    deviceListUO.push(state[i]);
                    deviceListUO[i].out[0].state = action.data[0]
                    deviceListUO[i].out[1].state = action.data[1]

                } else {
                    deviceListUO.push(state[i])
                }
            }
            window.localStorage.setItem('devices', JSON.stringify(deviceListUO));
            return state = deviceListUO;

            break;
        case 'UPDATE_text:':


            let deviceListUT = [];
            for (let i = 0; i < state.length; i++) {
                if (state[i].name === action.asset.Name) {
                    deviceListUT.push(state[i]);

                    deviceListUT[i].smss[action.asset.smsindex - 1].text = action.data[0];


                } else {
                    deviceListUT.push(state[i])
                }
            }
            window.localStorage.setItem('devices', JSON.stringify(deviceListUT));
            return state = deviceListUT

            break;
        case 'UPDATE_list:':



            let deviceListUL = [];

            for (let i = 0; i < state.length; i++) {
                console.log('ss', state[i]);

                if (state[i].name === action.asset.Name) {

                    deviceListUL.push(state[i]);

                    // پاک کردن داده های تماس دستگاه مور نظر
                    for (let x = 0; x < deviceListUL[i].contact.length; x++) {
                        deviceListUL[i].contact.number = 'خالی'
                        deviceListUL[i].contact.description = 'خالی'


                    }

                    // نوشتن دوباره داده های تماس
                    for (let j = 0; j < (action.data.length); j++) {
                        console.log('index', deviceListUL[i]);


                        deviceListUL[i].contact[action.data[j].index - 1] = { number: action.data[j].number, description: action.data[j].access, index: action.data[j].index }


                    }





                } else {
                    deviceListUL.push(state[i])
                }


            }


            window.localStorage.setItem('devices', JSON.stringify(deviceListUL));
            return state = deviceListUL;
            break;
        case 'UPDATE_remotes:':

            let deviceListUR = [];
            for (let i = 0; i < state.length; i++) {
                if (state[i].name == action.asset.Name) {
                    deviceListUR.push(state[i]);
                    for (let f = 0; f < deviceListUR[i].remotes.length; f++) {
                        deviceListUR[i].remotes[f] = { 'name': state[i].remotes[f].name, 'type': 'خالی', 'number': f + 1, 'state': 'خالی' }
                    }
                    for (let j = 0; j < action.data.length; j++) {


                        deviceListUR[i].remotes[action.data[j].index - 1].name = action.data[j].name;
                        deviceListUR[i].remotes[action.data[j].index - 1].state = action.data[j].active;

                    }





                } else {
                    deviceListUR.push(state[i])
                }
            }
            window.localStorage.setItem('devices', JSON.stringify(deviceListUR));
            return state = deviceListUR;
            break;
        case 'UPDATE_zones:':

            console.log('kkk', action.data);
            let deviceListUZ = [];
            for (let i = 0; i < state.length; i++) {
                if (state[i].name == action.asset.Name) {
                    deviceListUZ.push(state[i]);
                    if (action.asset.model != 'AIO21 PT') {
                        for (let j = 0; j < (action.data.length); j++) {
                            deviceListUZ[i].zones[j].name = action.data[j].name;
                            deviceListUZ[i].zones[j].state = action.data[j].active;
                        }
                    } else {

                        deviceListUZ[i].zones[0].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[0].state = 'عدم دسترسی'

                        deviceListUZ[i].zones[1].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[1].state = 'عدم دسترسی'

                        deviceListUZ[i].zones[2].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[2].state = 'عدم دسترسی'

                        deviceListUZ[i].zones[3].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[3].state = 'عدم دسترسی'

                        deviceListUZ[i].zones[4].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[4].state = 'عدم دسترسی'

                        deviceListUZ[i].zones[5].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[5].state = 'عدم دسترسی'

                        deviceListUZ[i].zones[6].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[6].state = 'عدم دسترسی'

                        deviceListUZ[i].zones[7].name = 'عدم دسترسی'
                        deviceListUZ[i].zones[7].state = 'عدم دسترسی'

                        for (let m = 0; m < action.data.length; m++) {

                            deviceListUZ[i].zones[action.data[m].index - 1].name = action.data[m].name
                            deviceListUZ[i].zones[action.data[m].index - 1].state = action.data[m].active

                        }


                    }





                } else {
                    deviceListUZ.push(state[i])
                }
            }
            window.localStorage.setItem('devices', JSON.stringify(deviceListUZ));
            return state = deviceListUZ;
            break;
        case 'UPDATE_NAME:':

            let deviceListUPN = [];
            for (let i = 0; i < state.length; i++) {
                deviceListUPN.push(state[i]);
                if (state[i].name == action.asset.Name) {
                    for (let j = 0; j < (action.data.length); j++) {

                        deviceListUPN[i].partitions[j].name = action.data[j]

                    }

                } else {

                }

            }
            window.localStorage.setItem('devices', JSON.stringify(deviceListUPN));
            return state = deviceListUPN;



            break;
        default:

            return state = state;
            break;



    }

}

export default Devices;