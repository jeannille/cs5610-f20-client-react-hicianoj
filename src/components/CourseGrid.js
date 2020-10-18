/*
CourseGrid renders an array of courses as a grid of cards, where each card represents a
course as shown below.
 */
/*
Child of CourseManagerComponent, sibling of coursegrid
 */

import React from "react";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService";
import CourseCard from "./CourseCard";



export default class CourseGrid extends React.Component {

    state = {
        courses: [],
        courseBeingEdited: {} //boolean flag
    }

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

    editCourse = (course) => {
        this.setState({
                          courseBeingEdited: course
                      })
    }

    render() {
        return(
            <div className="card-deck">
                <h1>Course Grid</h1>
                {  this.state.courses.map((course, key) =>
                                   <CourseCard course={course}
                                               key={key}/>)}
            </div>
        )
    }
}