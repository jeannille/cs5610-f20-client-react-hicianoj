/*
CourseTable renders an array of courses as a table where each row represents a course.
 */

import React from "react";
import CourseListComponent from "./CourseListComponent";

import CourseRowComponent from "./CourseRowComponent";
const CourseTable = () =>

<table className="table">
    <tbody>
    {/*should this be CourseListComponent.courses*/}
    {CourseListComponent.state.courses.map((course, key) =>
                      <CourseRowComponent course={course}key={key}/>
    )}
    </tbody>
</table>
