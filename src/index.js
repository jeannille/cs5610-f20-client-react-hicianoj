//REACTDOM is only loaded once in JS and never again, every comp will need
//at least react-dom
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import "font-awesome/css/font-awesome.min.css"

import App from './App';
import * as serviceWorker from './serviceWorker';
import CourseListComponent from "./components/CourseListComponent";
import CourseEditorComponent from "./components/CourseEditorComponent";
import Profile from "./components/Profile"
import Register from "./components/Register"
import Login from "./components/Login"
import CourseTableComponent from "./components/CourseTableComponet";
import {CourseManagerComponent} from "./components/CourseManagerComponent";
import {Provider} from "react-redux";
import {createStore} from "redux";
import HelloContaner from "./containers/HelloContaner";

//regular json objb
const initialState ={
    communications: {
        title: "this is the title ",
        msg: "The test messsage"

    }
}

//finite state machine, reducer, calculated the next state
const fsm = (state = initialState, action) => {
    return state
}


const store = createStore(fsm)

//fsm feeds the store to components requesting it (need it)
ReactDOM.render(
    //Provider provides the state through the store const
    <Provider store={store}>
        <CourseManagerComponent/>
        <HelloContaner/> {/*calls its exported connect(stateMapper) */}
    </Provider>,
    document.getElementById('root')
);

//connct receives call and uses the 2 args, passes what the provider has passed to it
//(stateMapper function, )
//connect() maps the return as a mapping,  property: key  and its values (message)
//populting data by extracing from the state and creates property map & then calls hello w/ map


//the js parses instantiates CourseListComponent, parses to see is there are any parameters
//builds object whos attribute names are the keys, and the values of keys provided

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
