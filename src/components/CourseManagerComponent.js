/* Implements a course manager that allows managing a collection of courses including adding new
 courses, deleting courses and editing existing courses. Maintains the current list of courses
  and implements event handlers.
  Keeps the state of courses property, and hands the courses to List, Table & Grid components
  to render them respectively.
  */

//course manager holds course grid and course list

import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGrid from "./CourseGrid";
import CourseTableComponent from "./CourseTableComponet";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import "font-awesome/css/font-awesome.css"
import CourseRowComponent from "./CourseRowComponent";

//wrap in browser router so things inside can navigate
//main way of components talking to one another is by passing functions
//CourseManager is parent to CourseListComponent & CourseGrid
//one subcomponent of Manager will take list of courses
//and render them different than another comp. using same courses (render as grid)
//list would live in the parent component and can pass the list to both of them (man)
export class CourseManagerComponent extends React.Component {

    //to do : keep state of courses in Manager instead of List
    //then this.state.props can be passed to other classes (grid/table)
    // that have to render the same data (courses)
    state = {
        // layout: 'table',
        courses: []
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                                  courses: courses
                              })
            })
    }

    //
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedCourse: courses[0]
    //     }
    // }

    selectCourse = course =>
        this.setState({selectedCourse: course})

    //passing the actual object to be deleted
    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                                              courses: prevState.courses.filter(c => c._id !== course._id)
                                          })
            )).catch(error => {
        })
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            modified: (new Date()).toDateString()
        }
        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))

    }

//sets courseBeingEdited flag to course when clicked to edit
    editCourse = (course) => {
        this.setState({
                          courseBeingEdited: course
                      })
    }

    render() {
        return (
            <div className="container-md" style={{padding: 30}}>
                <BrowserRouter>
                    <Link to="/login">Login</Link> |
                    <Link to="/register">Register</Link> |
                    <Link to="/profile">Profile</Link> |
                    <Link to="/courses">Courses</Link> |
                    <Link to="/edit">CourseEditor</Link> |
                    <Link to="/table">CourseTable</Link> |

                    <Link to="/courses/grid">Grid</Link>

                    {/*routes look for exact url path match*/}

                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/courses" exact>
                        {/*syntax below allows passed args, CourseList parameters */}
                        {/*pass CourseList obj's attribute instructor*/}
                        <CourseListComponent courses={this.state.courses}
                                             instructor="Wax Ladrian" term="Fall 2020"/>
                    </Route>
                    <Route path="/courses/grid"
                           render={() => <CourseGrid courses={this.state.courses}
                                                     deleteCourse={this.deleteCourse}
                                                     selectCourse={this.selectCourse}/>}/>
                    {/*<Route path="courses/grid" component={CourseGrid}/>*/}

                    {/*"/edit/:course._id"*/}
                    <Route path={"/edit/"} component={CourseEditorComponent}
                    />
                    <Route path="/table" exact
                           render={() => <CourseTableComponent
                               courses={this.state.courses}
                               deleteCourse={this.deleteCourse}
                               selectCourse={this.selectCourse}/>}/>

                    {/*//whatever this holds is what gets rendered on the webpage*/}

                </BrowserRouter>
            </div>

        );
    }
}
