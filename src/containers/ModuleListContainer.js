

//get state from reducer
const stateToPropertyMapper = state => ({
    count: state.fsm.count
})

//dispatch responsible for invoking fsm as needed, takes in dispatch obj w/ value
const propertyToDispatchMapper = (dispatch) => ({
    // up: () => {alert("UP")},
    // down: () => {alert("DOWN")} //test
    up: () => dispatch({type: "UP"}),
    down: () => dispatch({type: "DOWN"})
})