import CourseRowComponent from "./CourseRowComponent";
import CourseListComponent from "./CourseListComponent";

import React from "react";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import CourseGrid from "./CourseGrid";

/*
Gets passed courses (in a given state) through parent. Does not handle altering state.
 */
// {
//     let grid = true
//     let table = false
// }

const CourseTableComponent = ({courses, deleteCourse, selectCourse}) => {

    return (
        <div className="container-md">
            <h1>Table View </h1>
            <div>
                <table className="table table-bordered ">
                    <tbody>

                {/*// maps key to value, for courses*/}
                {courses.map((course, key) =>
                                 //giving properties/attr to CourseRow obj
                                 <CourseRowComponent
                                     key={course._id}
                                     deleteCourse={deleteCourse}
                                     selectCourse={selectCourse}
                                     course={course}/>
                )}
                </tbody>
            </table>

            </div>
        </div>

    )

}
export default CourseTableComponent
