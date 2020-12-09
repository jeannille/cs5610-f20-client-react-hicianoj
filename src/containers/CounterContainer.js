import React from "react";
import {connect} from "react-redux";
import Counter from "../components/Counter";



//receives state and maps back to Counter (wants state of its count property)
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

export default connect
( stateToPropertyMapper,
  propertyToDispatchMapper)
(Counter) //CounterContainer exports Counter, what it's messaging for