import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import CourseListComponent from "./components/CourseListComponent";
import CourseRowComponent from "./components/CourseRowComponent";

ReactDOM.render(
//    wrap in container div
    <div className="container">
        <CourseListComponent instructor="Wax Ladrian" term="Fall 2020"/>
        {/*//whatever this holds is what gets rendered on the webpage*/}
    </div>,
document.getElementById('root')
);

//the js parses instantiates CourseListComponent, parses to see is there are any parameters
//builds object whos attribute names are the keys, and the values of keys provided

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
