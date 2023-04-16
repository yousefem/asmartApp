const Function = (state, action) => {
    switch (action.type) {

        case 'DO_ACTIVE':

            return {
                action: 'active'

            }
            break;




        default:
            return state = {
                action: 'active'

            }
            break;
    }

}

export default Function;