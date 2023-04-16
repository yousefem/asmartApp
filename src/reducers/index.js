import { combineReducers } from 'redux';
import Command from './store1';
import Device from './Device';
import Devices from './Devices';
import Update from './Update';
import Alert from './Alert';
import Function from './Function';







const allReducers = (
    combineReducers(

        {
            Command: Command,
            Device: Device,
            Devices: Devices,
            Update: Update,
            Alert: Alert,
            Function: Function
        }

    )
);



export default allReducers;