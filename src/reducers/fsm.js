/*
Finite state machine uses a store to keep track of history of states. Given a previous state and
 specified action, it "calculates," determines what to do next and updates the state. The state
  is then provided to respective components via the connect method.
 */
const initialState = {
    communications: {
        title: "Messgage/communication",
        msg: "Testing MESSAGE is being sent!!"
    },
    count: 123
}

const fsm = (state = initialState, action) => {
    switch (action.type) {
        case "UP":
            return ({
                ...state,
                count: state.count + 1
            })
            break;
        case "DOWN":
            return ({
                ...state,
                count: state.count - 1
            })
            break;
        default:
            return state
    }
}

export default fsm
