/* React component that implements a course manager that allows managing a collection
of courses including adding new courses, deleting courses and editing
existing courses. The course manager should maintain the current list of courses and implement
event handlers*/

//course manager holds course grid and course list

import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable"

//wrap in browser router so things inside can navigate
//main way of components talking to one another is by passing functions
//CourseManager is parent to CourseTable & CourseGrid
//one subcomponent of Manager will take list of courses
//and render them different than another comp. using same courses (render as grid)
//list would live in the parent component and can pass the list to both of them (man)
export class CourseManagerComponent extends React.Component {

    // toggle = () =>
    //     alert('toggle')

    state = {
        // layout: 'toggle'
        courses: []
    }

    //toggle between

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Link to={"/login"}>Login</Link> |
                    <Link to={"/register"}>Register</Link> |
                    <Link to={"/profile"}>Profile</Link> |
                    <Link to={"/courses"}>Courses</Link> |
                    <Link to={"/edit"}>Course Editor</Link> |
                    <Link to="/course/table">Table</Link> |
                    <Link to="/course/grid">Grid</Link> |
                    {/*routes look for exact url path match*/}
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/courses" exact>
                        {/*syntax below allows passed args, CourseList parameters */}
                        {/*pass CourseList obj's attribute instructor*/}
                        <CourseListComponent instructor="Wax Ladrian"/></Route>
                    <Route path="edit" exact component={CourseEditorComponent}/>
                    <Route path="/grid" component={CourseGrid}/>
                    <Route path="/table" component={CourseTable}/>
                    {/*<CourseListComponent instructor="Wax Ladrian" term="Fall 2020"/>*/}
                    {/*//whatever this holds is what gets rendered on the webpage*/}
                </div>
            </BrowserRouter>
        );
    }
}
