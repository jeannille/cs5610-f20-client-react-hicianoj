import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import CourseListComponent from "./components/CourseListComponent";
import Profile from "./components/Profile"
import Register from "./components/Register"
import Login from "./components/Login"
import {CourseManagerComponent} from "./components/CourseManager";


ReactDOM.render(
    <div className="container-fluid">
        <CourseManagerComponent/>
    </div>,
    document.getElementById('root')
);


// import {BrowserRouter, Link, Route} from "react-router-dom"
//
// ReactDOM.render(
// //wrap in browser router so things inside can navigate
//     <BrowserRouter>
//         // wrap in container div
//         <div className="container">
//             <Link to={"/login"}>Login</Link> |
//             <Link to={"/register"}>Register</Link> |
//             <Link to={"/profile"}>Profile</Link> |
//             <Link to={"/courses"}>Courses</Link> |
//             <Link to={"/edit"}>Course Editor</Link>
//             {/*create routes */}
//             <Route path="/login" exact component={Login}/>
//             <Route path="/register" exact component={Register}/>
//             <Route path="/profile" exact component={Profile}/>
//             <Route path="/courses" exact>
//                 <CourseListComponent instructor= "Wax Ladrian"/></Route>
//             {/*<CourseListComponent instructor="Wax Ladrian" term="Fall 2020"/>*/}
//             {/*//whatever this holds is what gets rendered on the webpage*/}
//         </div>
//     </BrowserRouter>
// ,
// //renders everything above inside root
// document.getElementById('root')
// );

//the js parses instantiates CourseListComponent, parses to see is there are any parameters
//builds object whos attribute names are the keys, and the values of keys provided

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
