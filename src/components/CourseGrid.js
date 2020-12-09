/*
CourseGrid renders an array of courses as a grid of cards, where each card represents a
course as shown below.
 */

import React from "react";
import {Link} from "react-router-dom";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService";
import CourseCard from "./CourseCard";

//takes in courses from parent CourseListComp and is rendered when layout = 'grid'
const CourseGrid = ({courses}) =>

    <div>
        <div>
            <h2>Course Grid</h2>
        </div>
        {
            //div className Row Start
            <div className = "row">
                {
                    //column size  for each card
                    courses.map(function(course, key) {
                        return <div className = " col-lg-4">
                            <ul>
                                <CourseCard
                                    key={key}
                                    course={course}
                                    deleteCourse={deleteCourse} />
                            </ul>
                        </div>

                    })
                }
            </div>
        }
    </div>


            export default CourseGrid