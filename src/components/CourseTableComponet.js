import CourseRowComponent from "./CourseRowComponent";

import React from "react";
// import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import CourseGrid from "./CourseGrid";
import {Link, NavLink} from "react-router-dom";

const CourseTableComponent = ({courses, layout,  deleteCourse, selectCourse, updateCourse, instructor, term, toggle, addCourse}) => {

    return (
        <div className="container-md">
            <h1>Professor {instructor} {term}</h1>
            <h1>Table View </h1>
            <button className="btn btn-success" onClick={toggle}> <Link to="courses/grid">"Toggle</Link> </button>
            <div>
                <table className="table table-bordered ">
                    <tbody>
                {/*// maps key to value, for courses*/}
                {courses.map((course, key) =>
                                 //giving properties/attr to CourseRow obj
                                 <CourseRowComponent
                                     key={key}
                                     deleteCourse={deleteCourse}
                                     selectCourse={selectCourse}
                                     updateCourse={updateCourse}
                                     course={course}/>
                )}
                </tbody>
            </table>

            </div>
            <button onClick={addCourse}>Add Course</button>
        </div>

    )

}
export default CourseTableComponent
