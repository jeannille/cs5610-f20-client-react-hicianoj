/*
CourseGrid renders an array of courses as a grid of cards, where each card represents a
course as shown below.
 */
/*
Child of CourseManagerComponent, sibling of coursegrid
 */

import React from "react";
import {Link} from "react-router-dom";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService";
import CourseCard from "./CourseCard";

const CourseGrid = ({courses}) => {
    // <h1>what</h1>
    let state = {
        layout: 'grid'
    }

    const toggle = () => {
        if (state.layout === 'table') {
            return ({
                layout: 'grid'
            })
        } else {
            return ({
                layout: 'table'
            })
        }
    }

    return (
        <div className="card-deck">
            <h1>Course Grid</h1>
            <div className="row">
                {/*for each course, create render card*/}
                {courses.map((course, key) =>
                                 <CourseCard course={course}
                                             key={key}/>)}
            </div>
        </div>
    )
}



export default CourseGrid