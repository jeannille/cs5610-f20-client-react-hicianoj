import React from "react";
import {connect} from "react-redux";
import Hello from "../components/Hello";

//intermediary between redux handling and Hello component that just wants to render a message

//trivial example from slides & lectures to understand concept of reducers (fsm) & redux

const stateMapper = state => ({
    message: state.fsm.communications.msg
})

export default connect(stateMapper)(Hello)

// export default connect ( state => {
//     return {
//         message: state.communications.msg
//     }
// } ) (Hello)