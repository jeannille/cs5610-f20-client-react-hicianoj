import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import CourseGrid from "./CourseGrid";
/*
This component mounts
 */

class CourseListComponent extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {},
        layout: 'table'
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                                  courses: courses
                              })
            })
    }

    toggle = () =>
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid' //return obj w/ layout set as grid
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                                              courses: prevState.courses.filter(c => c._id !== course._id)
                                          })
            ))
            .catch(error => {

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

    editCourse = (course) => {
        this.setState({
                          courseBeingEdited: course
                      })
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Course List (For {this.props.instructor}) {this.props.term}</h1>
                <span><button className="float-right btn btn-lg btn-info" onClick={this.toggle}>
                    <i className="fa fa-plus-circle"/></button></span>

                {
                    this.state.layout === 'table' &&
                    <table className="table table-responsive-md table-hover">
                        {
                            this.state.courses.map(course =>
                                                       <CourseRowComponent
                                                           deleteCourse={this.deleteCourse}
                                                           course={course}/>
                            )
                        }
                    </table>
                }

                {
                    this.state.layout === 'grid' &&
                    <CourseGrid courses={this.state.courses}/>
                }
                <button
                    onClick={this.addCourse}
                    className="btn btn-success">
                    Add Course
                </button>
            </div>
        );
    }
}

export default CourseListComponent

//what instance of CourseListComponent will return/render
//     render() {
//         return (
//             <div>
//                 {/*java classes can keep track of their own state*/}
//                 <h1>Course List (Professor: {this.props.instructor}) {this.props.term}</h1>
//                 <button className="btn btn-success" onClick={this.toggle}> Toggle </button>
//                     {
//                         this.state.layout === 'table' && <CourseTableComponent
//                             courses = {this.state.courses} deleteCourse={this.deleteCourse}/>
//                     }
//                     {
//                         this.state.layout === 'grid' &&
//                         <CourseGrid courses = {this.state.courses}
// deleteCourse={this.deleteCourse}/> }  <button onClick={this.addCourse} className="btn
// btn-primary"> Add a Course </button> </div> ) } }

