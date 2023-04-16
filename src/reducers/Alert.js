const Alert = (state, action) => {
    switch (action.type) {

        case 'DESCRIPTION_ALERT':
            // alert('set alert description')
            return {
                response: state.response,
                title: action.title,
                description: action.description,
                name: action.name,
                operator: action.operator,
                backTo: action.backTo
            }
            break;




        default:
            return state = {
                response: false,
                title: 'null',
                description: 'null',
                name: '',
                operator: '',
                backTo: ''
            }
            break;
    }

}

export default Alert;