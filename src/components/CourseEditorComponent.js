/*
Create a React component called CourseEditor, renders a course instance selected from the
 CourseGrid or CourseListComponent component (CourseRowComponents will map to edit when clicked on).
 Modules, Lessons will be static.
 */
//using objects to create layers of abstraction
//building an aggregation of multiple subcomponents (ie. modulelist, lessonTabs)
import React from "react";
import {findCourseById} from "../services/CourseService";
import "font-awesome/css/font-awesome.css"
import CourseTableComponent from "./CourseTableComponet";
import ModuleListComponent from "./ModuleListComponent";
import WidgetList from "./WidgetList";

//no longer being used in CourseManager
class CourseEditorComponent extends React.Component {

    state = {
        course: {
            _id: "",
            title: ""
        }
    }
    //
    // // given a course, find it's modules
    // // Route creates properties and passes it to CourseEditor (passes courseId)
    // // used to render titles since courseId is a props of course
    componentDidMount() {
        console.log(this.props)
        // this.props.findModulesForCourse(this.props.match.params.courseId)
        findCourseById(this.props.match.params.courseId) //findCourseById from propMapper
            .then(actualCourse => this.setState({
                                                    course: actualCourse
                                                }))
    }

    render() {
        return (
            <div className="container">
                {this.props.match.params.courseId}
                <h1>Currently editing: </h1>
                <h2>{this.state.course.title} testtt </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent/>
                        {/*    modules on left size 4*/}
                    </div>
                    {/*right hand side, lessons/topics/widgets size 8*/}
                    <div className="col-8">
                        <h1>Lessons what</h1>
                        <h1>Topics</h1>
                        <WidgetList/>


                    </div>
                </div>
            </div>
        )
    }
}

export default CourseEditorComponent




