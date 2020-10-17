/*
CourseTableComponent renders an array of courses as a table where each row represents a course.
(the CourseEditor, renders a course instance selected from the
 CourseGrid or CourseTableComponent component).
 */

import React from "react";
import CourseListComponent from "./CourseListComponent";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = () =>

      <div>
          <table className="table">
              <tbody>
              {/*{courses.map((course, key) =>*/}
              {/*                 <CourseRowComponent course={course} key={key}/>*/}
              {/*)}*/}
              </tbody>
          </table>


      </div>






