/*
Create a React component called CourseEditor, renders a course instance selected from the
 CourseGrid or CourseTable component (CourseRowComponents will map to edit when clicked on).
 Modules, Lessons will be static.
 */
//using objects to create layers of abstraction
//building an aggregation of multiple subcomponents (ie. modulelist, lessonTabs)
import React from "react";
import {findCourseById} from "../services/CourseService";

class CourseEditorComponent extends React.Component {

    state = {
        course: {
            _id: "",
            title: ""
        }
    }

    //route passes ID to course editor
    componentDidMount() {
        this.props.findCourseById(this.props.match.params.courseId)
        this.props.findModulesForCourse(this.props.match.params.courseId)
        // console.log(this.props)
        // findCourseById(this.props.match.params.courseId)
        //     .then(actualCourse => this.setState({
        //                                             course: actualCourse
        //                                         }))
    }

    render() {
        return (
            <div>
                <h1>Course Editor {this.props.match.params.courseId}</h1>
                <h2>{this.state.course.title}</h2>
                <div className="row">
                    <div className="col-4">
                        <h1>Modules</h1>
                    </div>
                    <div className="col-8">
                        <h1>Lessons</h1>
                        <h1>Topics</h1>
                    </div>
                </div>
            </div>
        )

        // <div className="row">
        //     <div className="col-3">
        //         <ModuleList modules=
        //                         {this.props.course.modules}/></div>
        //     <div className="col-3">
        //         <LessonTabs lessons={ … }/>
        //         <TopicPills topics={ … }/>
        //     </div>
        // </div>
        // )

    }
}

export default CourseEditorComponent