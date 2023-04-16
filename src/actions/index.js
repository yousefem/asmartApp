export const HideCommand = () => {
    return {
        type: 'HIDE_SMS_COMAND'
    }
}
export const VisibleCommand = () => {
    return {
        type: 'VISIBLE_SMS_COMAND'
    }
}

export const SetDevice = (name, number, model, password, operator, access, part, partitions, zones, remotes) => {
    return {
        name: name,
        model: model,
        number: number,
        password: password,
        operator: operator,
        access: access,
        part: part,
        partitions: partitions,
        zones: zones,
        remotes: remotes,
        type: 'SET_DEVICE'
    }
}

export const Devices = (device) => {

    return {
        type: 'ADD_DEVICE',
        device: device
    }



}
export const Update = (index) => {


    return {
        type: 'SMS_UPDATE',
        index: index
    }



}

export const parseMessage = (message, asset) => {






    let letter = '';
    let type = '';
    let content = '';
    let end = 0;
    let start = 0;
    let endNumber = 1;
    let data = [];
    for (let i = 1; i <= message.length; i++) {
        letter = message.slice(i - 1, i);
        if (letter == '\n') {
            type = message.slice(0, i);
            content = message.slice(i);

            break;

        } else {

        }
    }

    switch (type) {
        case "STATUS\n":


            let is3line = false;
            for (let i = 1; i <= content.length + 1; i++) {

                letter = content.slice(i - 1, i);
                if (data.length != 1) {
                    if (letter == ':') {
                        start = i;


                    }
                    if (letter == '\n' || i === (content.length)) {
                        end = i;
                        data.push(content.slice(start, (i === (content.length) ? end : end - 1)));

                    }
                } else {

                    if (is3line && letter == '\n') {
                        end = i;

                        data.push(content.slice(start, end - 1));

                    }
                    if (!is3line) {
                        start = i - 1;
                        is3line = true;

                    }


                }



            }


            break;

        case 'list:\n':
            let contact = { number: '', access: '', index: '' }
            let cunter = 0;
            let endNumber1 = 1;
            let charactor = '';
            start = 0;



            for (let i = 1; i <= (content.length + 1); i++) {


                charactor = content.slice(i - 1, i);

                if (content.length == (i - 1) && endNumber1 == 3) {
                    contact.access = content.slice(start, i - 1);
                    data.push(contact);
                    contact = { number: '', access: '', index: '' }
                }


                if (charactor == '\n' && endNumber1 == 3) {
                    contact.access = content.slice(start, i - 1);
                    start = i;
                    endNumber1 = 1;

                    data.push(contact);
                    contact = { number: '', access: '', index: '' }
                }


                if (charactor == ':' && endNumber1 == 2) {
                    contact.number = content.slice(start, i - 1);
                    start = i;


                    endNumber1 = 3;
                }


                if (charactor === ':' && endNumber1 === 1) {

                    endNumber1 = 2;
                    contact.index = content.slice(start, i - 1);
                    start = i;


                }









            }




            break;
        case 'remotes:\n':

            let remote = { name: '', active: '', index: '' }
            let cunter2 = 0;
            let endNumber2 = 1;
            let charactor2 = '';
            start = 0;

            for (let i = 1; i <= (content.length + 1); i++) {


                charactor2 = content.slice(i - 1, i);

                if (content.length == (i - 1) && endNumber2 == 3) {
                    remote.active = content.slice(start, i - 1);
                    data.push(remote);
                    remote = { name: '', active: '', index: '' }
                }


                if (charactor2 == '\n' && endNumber2 == 3) {
                    remote.active = content.slice(start, i - 1);
                    start = i;
                    endNumber2 = 1;

                    data.push(remote);
                    remote = { name: '', active: '', index: '' }
                }


                if (charactor2 == ':' && endNumber2 == 2) {
                    remote.name = content.slice(start, i - 1);
                    start = i;


                    endNumber2 = 3;
                }


                if (charactor2 === ':' && endNumber2 === 1) {


                    endNumber2 = 2;
                    remote.index = content.slice(start, i - 1);
                    start = i;


                }





            }





            break;


        case 'zones:\n':
            let zone = { name: '', active: '', index: '' }
            for (let i = 1; i <= (content.length - 1); i++) {

                letter = content.slice(i - 1, i);

                if (letter == ':' && endNumber == 2) {
                    end = i;

                    zone.name = content.slice(start, end - 1);


                    start = i;
                    endNumber = 3;




                }
                if (letter == ':' && endNumber == 1) {
                    zone.index = content.slice(start, i - 1).trim()

                    start = i;
                    endNumber = 2;


                }

                if (letter == ':' && endNumber == 3) {
                    start = i;
                    endNumber = 4;





                }
                if ((letter = '\n' || i == (content.length - 1)) && endNumber == 4) {
                    end = i;


                    zone.active = content.slice(start, end + 1);


                    data.push(zone);
                    zone = { name: "", active: "" }
                    endNumber = 1;
                    start = i + 1

                }
            }


            break;


        case 'text:\n':
            data.push(message.slice(6));
            console.log('index.js: text sms is:', data)

            break;
        case "out:\n":

            for (let i = 1; i <= content.length; i++) {
                letter = content.slice(i - 1, i);
                if (letter == ':') {
                    start = i;


                }
                if (letter == '\n' || i == content.length) {
                    end = i;
                    data.push(content.slice(start, end));

                }
            }

            break;
        case "NAME:\n":
            letter = '';
            let indexPartition = 0;
            let partitionList = []
            for (let i = 0; i <= content.length - 1; i++) {

                if (content[i] != '\n') {
                    letter += content[i];
                } else {
                    partitionList.push(letter)
                    letter = '';
                }
                if (i == content.length - 1) {
                    partitionList.push(letter)
                }


            }

            data = partitionList;


            break;



        default:
            break;

    }


    return {
        type: 'UPDATE_' + type.slice(0, type.length - 1),
        data: data,
        asset: asset
    }



}

export const changeDevice = (deviceName, deviceNa, deviceNu, devicePa, deviceMo, deviceOp, deviceAc, devicePart, devicepartL) => {
    console.log('mmmm', devicepartL);

    return {
        type: 'CHANGE_DEVICE',
        newName: deviceNa,
        name: deviceName,
        number: deviceNu,
        password: devicePa,
        operator: deviceOp,
        access: deviceAc,
        part: devicePart,
        devicepartL: devicepartL
    }


}

export const deleteDevice = (name) => {
    return {
        type: 'DELETE_DEVICE',
        name: name
    }


}

export const changeDeviceT = (data, newName, name) => {

    return {
        type: 'CHANGE_DEVICE_T',
        newName: newName,
        name: name,
        device: data
    }
}

export const changeBG = (path) => {
    return {
        type: 'CHANGE_BG',
        path: path
    }

}



export const discriptionAlert = (title, description, name, operator, backTo) => {
    return {
        type: 'DESCRIPTION_ALERT',
        title: title,
        description: description,
        name: name,
        operator: operator,
        backTo: backTo
    }

}

export const login = () => {
    return {
        type: 'LOGIN'
    }
}


export const doActive = () => {
    return {
        type: 'DO_ACTIVE'
    }

}