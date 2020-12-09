//REACTDOM is only loaded once in JS and never again, every comp will need
//at least react-dom
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import "font-awesome/css/font-awesome.min.css"

import * as serviceWorker from './serviceWorker';
import {CourseManagerComponent} from "./components/CourseManagerComponent";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import fsm from "./reducers/fsm"
import widgetsReducer from "./reducers/widgetsReducer";
import moduleReducer from "./reducers/moduleReducer";
import courseReducer from "./reducers/courseReducer";
import {lessonReducer} from "./reducers/lessonReducer";
import {topicReducer} from "./reducers/topicReducer";

//https://redux.js.org/api/combinereducers
// MAP of multiple reducers, we can refer to rither one. each is repsonsible for its states
//shortcut since key:value have same chars
const reducers = combineReducers({
                                     fsm, widgetsReducer, moduleReducer, courseReducer, lessonReducer, topicReducer
                                 })

const store = createStore(reducers)
//reducer feeds updated state to store variable



//Providers uses store and feeds it to specific components requesting a connect (need state update)
//Provider provides the state through the store const
ReactDOM.render(
    <Provider store={store}>
        <CourseManagerComponent/>
    </Provider>,
    document.getElementById('root')
);

//connect receives call and uses the 2 args, passes what the provider has passed to it
//(stateMapper function, )
//connect() maps the return as a mapping,  property: key  and its values (message)
//populating data by extracting from the state and creates property map & then calls hello w/ map

//the js parses instantiates CourseListComponent, parses to see is there are any parameters
//builds object whos attribute names are the keys, and the values of keys provided

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
