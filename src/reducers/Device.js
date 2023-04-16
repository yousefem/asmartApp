const Device = (state = { isScroll: false, isLogin: false }, action) => {

    if (action.type == 'SET_DEVICE') {
        window.localStorage.setItem("device", JSON.stringify({
            model: action.model,
            name: action.name,
            number: action.number,
            password: action.password,
            operator: action.operator,
            path: state.path,
            isLogin: state.isLogin,
            access: action.access,
            part: action.part,
            zones: action.zones,
            remotes: action.remotes,
            partitions: action.partitions


        }));
        return (
            state = {
                model: action.model,
                name: action.name,
                number: action.number,
                password: action.password,
                operator: action.operator,
                path: state.path,
                isLogin: state.isLogin,
                access: action.access,
                part: action.part,
                partitions: action.partitions


            }
        )

    } else if (action.type == 'CHANGE_BG') {
        return state = {
            model: state.model,
            name: state.name,
            number: state.number,
            password: state.password,
            operator: state.operator,
            path: action.path,
            isLogin: state.isLogin
        }
    } else if (action.type == 'LOGIN') {
        return state = {
            isScroll: false,
            isLogin: true
        }

    } else {
        return state = state
    }



}

export default Device;