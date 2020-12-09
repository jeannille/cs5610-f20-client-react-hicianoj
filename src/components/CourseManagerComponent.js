/* Implements a course manager that allows managing a collection of courses including adding new
 courses, deleting courses and editing existing courses. Maintains the current list of courses
  and implements event handlers.
  Keeps the state of courses property, and hands the courses to List, Table & Grid components
  to render them respectively.
  */

//course manager holds course grid and course list

import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "../containers/CourseEditorContainer";
import CourseGrid from "./CourseGrid";
import CourseTableComponent from "./CourseTableComponet";

export class CourseManagerComponent extends React.Component {
    state = {
        courses: []
    }

    render() {
        return (
            <div className="container-md" style={{padding: 30}}>
                <BrowserRouter>
                    <Link to="/login">Login</Link> |
                    <Link to="/register">Register</Link> |
                    <Link to="/profile">Profile</Link> |
                    <Link to="/table">Courses</Link>
                    {/*<Link to="/edit">CourseEditor</Link> |*/}
                    {/*<Link to="/grid">Grid</Link>*/}
                    {/*routes look for exact url path match*/}
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/table" exact>
                        {/*syntax below allows passed args, CourseList parameters */}
                        {/*pass CourseList obj's attribute instructor*/}
                        <CourseListComponent courses={this.state.courses}
                                             instructor="Wax Ladrian" term="Fall 2020"/>
                    </Route>
                    {/*<Route path="/grid" exact component={CourseGrid}/>*/}
                    {/*<Route path="/grid"*/}
                    {/*       render={() => <CourseGrid courses={this.state.courses}*/}
                    {/*                                 courseBeingEdited={this.state.courseBeingEdited}*/}
                    {/*                                 layout={this.state.layout}*/}
                    {/*                                 deleteCourse={this.deleteCourse}*/}
                    {/*                                 selectCourse={this.selectCourse}*/}
                    {/*                                 updateCourse={this.updateCourse}*/}
                    {/*                                 editCourse={this.editCourse}*/}
                    {/*                                 addCourse={this.addCourse}*/}
                    {/*                                 toggle={this.toggle}*/}
                    {/*                                 instructor="Wax Ladrian"*/}
                    {/*                                 term="Fall 2020"/>}/>*/}

                    {/*passing saving course id as parameter and passing*/}
                    {/*edit/id and edit for router page... how can i delete regular editor pg?*/}
                    <Route
                        path={["/edit/:courseId",
                               "/edit/:courseId/modules/:moduleId",
                               "/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                               "/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}

                        exact
                        component={CourseEditorComponent}/>


                    {/*<Route path="/edit"  exact component={CourseEditorComponent}/>*/}
                    {/*path={["/edit/:courseId", "/edit/:courseId/modules/:moduleId"]}*/}

                    {/*<Route path="/table" exact*/}
                    {/*       render={() => <CourseTableComponent*/}
                    {/*           courses={this.state.courses}*/}
                    {/*           courseBeingEdited={this.state.courseBeingEdited}*/}
                    {/*           layout={this.state.layout}*/}
                    {/*           deleteCourse={this.deleteCourse}*/}
                    {/*           selectCourse={this.selectCourse}*/}
                    {/*           updateCourse={this.updateCourse}*/}
                    {/*           editCourse={this.editCourse}*/}
                    {/*           addCourse={this.addCourse}*/}
                    {/*           toggle={this.toggle}*/}
                    {/*           instructor="Wax Ladrian"*/}
                    {/*           term="Fall 2020"*/}

                    {/*       />}/>*/}
                </BrowserRouter>


                }
            </div>

        );
    }
}
