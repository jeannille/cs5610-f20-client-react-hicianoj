/*
CourseTable renders an array of courses as a table where each row represents a course.
(the CourseEditor, renders a course instance selected from the
 CourseGrid or CourseTable component).
 */

import React from "react";
import CourseListComponent from "./CourseListComponent";
import CourseRowComponent from "./CourseRowComponent";

const CourseTable = () =>
    <div>
        <h2> Course Table Component {attribute}</h2>
        <table className="table">
            <tbody>
            {/*should this be CourseListComponent.courses*/}
            {/*map each cpurse*/}
            {CourseListComponent.state.courses.map((course, key) =>
                                                       <CourseRowComponent course={course}
                                                                           key={key}/>
            )}
            </tbody>

        </table>
    </div>

// <table className="table">
//     <tbody>
//     { courses.map((course, key) =>
//                       <CourseRow course={course}key={key}/>
//     )}
//     </tbody>
// </table>


