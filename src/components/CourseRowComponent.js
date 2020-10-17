// row inside of a table, we are turning into a components

import React from "react";
import {Link} from "react-router-dom";
import {updateCourse, deleteCourse} from "../services/CourseService";

// declaring editCourse & courseBeingEdited in order to change
//rowcomp to class
const courseBeingEdited = false
const editCourse = () => {
}

//creating class based (not function based)
//functional comps depend only on the functions passed,
export default class CourseRowComponent extends React.Component {

    //maintaining local state for editing
    state = {
        editing: false,
        //copy of course to use it's info
        course: this.props.course
    }

    render() {
        return (
            <tr>

                <td>
                    {  //title: if being edited,render input field
                        this.state.editing &&
                        <input
                            className="form-control"
                            //if course being changed, update title
                            onChange={(event) => {
                                const newTitle = event.target.value
                                this.setState(prevState => ({
                                    course: {...prevState.course, title: newTitle}
                                }))
                            }
                            }
                            value={this.state.course.title}/>
                    }
                    { //if not, just render title & label
                        !this.state.editing &&
                        <Link
                            to={`/edit/${this.props.course._id}`}>{this.props.course.title} {this.props.course._id}</Link>
                    }
                </td>
                <td>{this.props.course.owner}</td>
                <td>{this.props.course.modified}</td>

                {/*    /!*associate btm element with an onclick event, must use {}*!/!*!/}
                {/!*    /!*this postpones event, when it actually happens*!/!*/}


                {/*<i className="fa fa-trash-o" aria-hidden="true">  </i>*/}
                <td>

                    <button onClick={() => this.props.deleteCourse(this.props.course)}
                            className="btn btn-warning">Delete
                    </button>


                    { //if not editing, display edit button
                        !this.state.editing &&
                        <button
                            onClick={() => this.setState({editing: true})}
                            className="btn btn-primary">Edit
                        </button>
                    }


                    { //if editing, display OK button to save changes
                        this.state.editing &&
                        <button
                            onClick={() => {
                                updateCourse(this.state.course._id, this.state.course)
                                    .then(status => this.setState({editing: false}))
                            }}
                            className="btn btn-primary">OK</button>
                    }
                </td>
            </tr>
        )
    }
}


