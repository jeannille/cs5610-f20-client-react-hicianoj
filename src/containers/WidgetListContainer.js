/*
Example from lecture. Containers maps state (generated by <Provider/> ), extracts wnted pieces
 and matches to properties we care about
 */

import React from "react";
import {connect} from "react-redux";
import WidgetList from "../components/WidgetList";


//state is provided here by Provider (which has store of states)
// stateToPropertyManager maps all properties to their states
//connect then takes in the state:property map, and gives WidgetList its respective property state
const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets
})

export default connect
(stateToPropertyMapper)
(WidgetList)


