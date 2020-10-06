import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService";

//declare a function, that by concevtion, that wil hav same name as file
//returns an html item

//implicit version of function() { etc} return etc
//grabs and deconstructs CourseListComponent object, and extracts desired fields
//value of keys, gets bound by the original obj, becomes local value
//function here, takes one large argument, and parses, order doesnt matter
//theyre being bound by their name

//new ES6 syntax now uses Classes & inheritence
//instance of this class, returns/renders a div
class CourseListComponent extends React.Component {
//can now use local state
    //react recognizes state change, and any parts that depend on the state will be re-rendered
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

    //once status is returned, safe to delete 1:29
    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                                              //re-renders state, array
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
                        // map  iterates over  array elements, as it iterates
                        // every single item as it iterates every single time
                        //     take function as argument, whatever the function returns, oit
                        //     concatenates all the outputs into one big string
                        this.state.courses.map(course =>
                                                   <CourseRowComponent
                                                       courseBeingEdited={this.state.courseBeingEdited}
                                                       editCourse={this.editCourse}
                                                       deleteCourse={this.deleteCourse}
                                                       course={course}/>
                        )
                    }
                </table>
                <button onClick={this.addCourse}
                        className="btn btn-primary">
                    Add a Course
                </button>
            </div>
        )
    }

}

//{} notifies that  this is an expression that needs to be evaluated 58:17
//wrap in an outer div to be able to grab as one component 1:01

// you can decalre at most one default

export default CourseListComponent