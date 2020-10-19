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

const CourseGrid = (courses) =>


    <div>
        <div>
            <h2>Course Grid</h2>
        </div>
        {
            //div className Row Start
            <div className = "row">
                {
                    //column size  for each card
                    courses.courses.map(function(course) {
                        return <div className = " col-lg-4">
                            <ul>
                                <CourseCard
                                    key={course._id}
                                    deleteCourse={courses.deleteCourse}
                                    course={course}/>
                            </ul>
                        </div>

                    })
                }
            </div>
        }
    </div>

// <h1>what</h1>
//     <div>
//     <div>
//         <h1>Course Grid</h1>
//     </div>
//         {
//             //div className Row Start
//             <div className = "row">
//                 {
//             <div>
//
//
//
//                     <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
//
//                         {/*for each course, create card*/}
//                         {courses.map((course, key) =>
//                                          <CourseCard course={course}
//                                                      key={key}/>)}
//
//
//                     </div>
//                 </div>
//             </div>
//
//         )
//
//     }
// }

            export default CourseGrid