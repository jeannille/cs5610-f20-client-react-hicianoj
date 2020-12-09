
/*
Reducer that controls list of modules.
 */

const initialState = {
    modules: []
}
//gets info from container (from what is returned by disptach mapper function, ie action)
const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "DELETE_MODULE": // return array in previous state EXCEPT for module w/ specified id
            return {
                ...state,
                modules: state.modules.filter(module => module._id !== action.module._id)
            }
        case "CREATE_MODULE":
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case "UPDATE_MODULE": //
            return {
                ...state,
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
            }
        default:
            return state
    }
}

export default moduleReducer