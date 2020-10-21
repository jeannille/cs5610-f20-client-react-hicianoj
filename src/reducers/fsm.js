import CounterContainer from "../containers/CounterContainer";

/*
Finite state machine takes in initialState (previous state) & specified action, it "calculates,"
 determines what to do next and updates the state. The state is then provided to respective
  components via the connect method.
 */
const initialState = { //reg json obj
    communications: {
        title: "Message/communication",
        msg: "Testing MESSAGE is being sent!!"
    },
    count: 123 //hardcoded to demonstrate initial state and test count buttons in Counter
}

//takes in previous state & action, calculates & returns updates state
// state is generated/returned by the fsm (dispatch invokes fsm as needed)
const fsm = (state = initialState, action) => {
    switch (action.type) {
        //action type: if the up button is clicked in counter ui (use for tabs, modules etc)
        case "UP":
            return ({
                ...state,
                count: state.count + 1  //then update increment count

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
