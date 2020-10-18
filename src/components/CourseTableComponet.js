import CourseRowComponent from "./CourseRowComponent";
import CourseListComponent from "./CourseListComponent";
import React from "react";

class CourseTableComponent extends React.Component {

render() {
    return (

        <div>
            <table className="table">
                <tbody>
                <td>blah</td>
                <td>test</td>
                {/*{courses.map((course, key) =>*/}
                {/*                 <CourseRowComponent course={course} key={key}/>*/}
                {/*)}*/}
                {
                    // maps key to value, for courses
                    this.state.courses.map(course =>
                                               //giving properties/attr to CourseRow obj
                                               <CourseRowComponent
                                                   deleteCourse={this.deleteCourse}
                                                   course={course}/>
                    )
                }

                </tbody>
            </table>




        </div>
    )
}
}

export default CourseTableComponent