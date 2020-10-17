import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";

//instance of this class, returns/renders a div
class CourseListComponent extends React.Component {
//can now use local state react recognizes state change, and any parts that depend on the state
// will be re-rendered
    state = {
        courses: [],
        courseBeingEdited: {}
    }

    //passing the actual object to be deleted

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                                  courses: courses
                              })
            })
    }

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
            _id: (new Date()).getMilliseconds() + "",
            title: "New Course",
            owner: "me",
            lastOpened: (new Date()).toDateString()
        }
        this.setState(prevState => ({
            courses: [
                ...prevState.courses, newCourse
            ]
        }))
    }

    //returns an array, copies previous array and append array

    // createCourse(newCourse)
    //         .then(actualCourse => this.setState(prevState => ({
    //             courses: [
    //                 ...prevState.courses, actualCourse
    //             ]
    //         })))


//
// //if
// editCourse = (course) => {
//     this.setState({
//                       courseBeingEdited: course
//                   })
// }

//what instance of CourseListComponent will return/render
    render() {
    return (
        <div>
            {/*java classes can keep track of their own state*/}
            <h1>Course List (Professor: {this.props.instructor}) {this.props.term}</h1>
            {/*can't use keyword 'class' because its a key word in javascript E6
            so that keywords don't collide, JSX forces us to use different tokens ie. style, for*/}
            <table className="table">
                {
                    // maps key to value, for courses
                    this.state.courses.map(course =>
                                               //giving properties/attr to CourseRow obj
                                               <CourseRowComponent
                                                   courseBeingEdited={this.state.courseBeingEdited}
                                                   editCourse={this.editCourse}
                                                   deleteCourse={this.deleteCourse}
                                                   course={course}/>
                    )
                }
            </table>
            <button onClick={this.addCourse} className="btn btn-primary">
                Add a Course
            </button>
        </div>
    )
}}

//{} notifies that  this is an expression that needs to be evaluated 58:17
//wrap in an outer div to be able to grab as one component 1:01

// you can declare at most one default

export default CourseListComponent