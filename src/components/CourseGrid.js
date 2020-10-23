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


const CourseGrid = ({courses, instructor, term, toggle}) =>

    <div>
        <div>
            <h1>Professor {instructor} {term}</h1>
            <h2>Course Grid</h2>
            <button class="toggleBtn"className="btn btn-success" onClick={toggle}> <Link to="/table">Toggle</Link> </button>
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
                                    deleteCourse={courses.deleteCourse} />
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