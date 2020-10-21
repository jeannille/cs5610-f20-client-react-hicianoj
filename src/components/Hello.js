import React from "react";
import {connect} from "react-redux"

const Hello = ({message}) =>
    <div>
        <h1>Hello: {message}</h1>
    </div>

export default Hello
//message is from initialState obj in index.js

