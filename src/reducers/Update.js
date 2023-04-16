const Update = (state = { name: '', index: '' }, action) => {

    switch (action.type) {

        case 'SMS_UPDATE':
            alert('salam')
            window.localStorage.setItem('smsIndex', action.index)
            return state = { name: 'sms', index: action.index }

            break;
        default:
            return state = state;
            break;
    }


}
export default Update;