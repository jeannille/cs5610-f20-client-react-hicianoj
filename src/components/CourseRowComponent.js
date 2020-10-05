// row inside of a table, we are turning into a compoment

import React from "react";
import CourseListComponent from "./CourseListComponent";
//creating class based (not function based)

const CourseRowComponent = ({course, deleteCourse, editCourse, courseBeingEdited}) =>
    <tr>
        <td>
            {
                course === courseBeingEdited &&
                <input
                    className="form-control"
                    value={courseBeingEdited.title}/>
            }
            {
                course !== courseBeingEdited &&
                <label>{course.title}</label>
            }
        </td>
        <td>{course.owner}</td>
        <td>{course.modified}</td>
        <td>
            {/*associate btm element with an onclick event, must use {}*/}
            {/*this postpones event, when it actually happens*/}
            <button className="btn btn-warning" onClick={() => editCourse(course)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteCourse(course)}>Remove</button>
        </td>
    </tr>

export default CourseRowComponent

