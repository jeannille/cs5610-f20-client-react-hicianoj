/*
example from lecture to understand reducer (fsm) using redux, goes with fsm,CounterContainer
 */

//simple UP DOWN buttons to click, connected onj "count" by passing up and down
import React from "react";

// count property whose state is provided TO Counter BY the "fsm" finite state machine (reducer)
//up and down properties are passed to "fsm"
const Counter = ({count, up, down}) =>
    <div>
        {count}
        <button onClick={up}>+</button>
        <button onClick={down}>-</button>
    </div>

export default Counter