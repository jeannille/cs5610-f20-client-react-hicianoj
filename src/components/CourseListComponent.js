import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import "font-awesome/css/font-awesome.css"
import CourseTableComponent from "./CourseTableComponet";
import CourseGrid from "./CourseGrid";

//parent of CourseTable and CourseGrid
class CourseListComponent extends React.Component {
//can now use local state react recognizes state change, and any parts that depend on the state
// will be re-rendered

    state = {
        courses: [],
        courseBeingEdited: {},
        layout: 'table' // flag, will default to table

    }

    toggle = () =>
        this.setState(prevState =>{
        if (prevState.layout === 'table') {
            return ({
                layout: 'grid'
            })
        } else {
            return ({
                layout: 'table'
            })
        }
    })


    //lifecycle function fetches courses from data, sets & renders
    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                                  courses: courses
                              })
            })
    }

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

//what instance of CourseListComponent will return/render
    render() {
        return (
            <div>
                {/*java classes can keep track of their own state*/}
                <h1>Course List (Professor: {this.props.instructor}) {this.props.term}</h1>
                <button className="btn btn-success" onClick={this.toggle}> Toggle </button>
                {/*can't use keyword 'class' because its a key word in javascript E6
            so that keywords don't collide, JSX forces us to use different tokens ie. style, for*/}
                    {
                        this.state.layout === 'table' && <CourseTableComponent
                            courses = {this.state.courses} deleteCourse={this.deleteCourse}/>
                    }
                    {
                        this.state.layout === 'grid' &&
                        <CourseGrid courses = {this.state.courses} deleteCourse={this.deleteCourse}/>
                        // <div className="card-deck">
                        // <CourseCard courses = {this.state.courses} deleteCourse={this.deleteCourse}/>
                        // <CourseCard courses = {this.state.courses} deleteCourse={this.deleteCourse}/>
                        //
                        // </div>

                    }

                <button onClick={this.addCourse} className="btn btn-primary">
                    Add a Course
                </button>
            </div>
        )
    }
}

//{} notifies that  this is an expression that needs to be evaluated 58:17
//wrap in an outer div to be able to grab as one component 1:01

// you can declare at most one default

export default CourseListComponent