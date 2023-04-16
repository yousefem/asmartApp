const window_CP = (state = 'store1', action) => {
    switch (action.type) {
        case 'HIDE_SMS_COMAND':
            return state = 'hide'

        case 'VISIBLE_SMS_COMAND':

            return state = 'visible'


        default:
            return state = 'visible';
    }

}


export default window_CP;