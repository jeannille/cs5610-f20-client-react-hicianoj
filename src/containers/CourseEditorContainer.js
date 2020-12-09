import React from "react";
import {connect} from "react-redux";
import {findCourseById} from "../services/CourseService";
import moduleService from "../services/ModuleService"
import lessonService from "../services/LessonService"
import topicService from "../services/TopicService";
import widgetService from "../services/WidgetService"
import WidgetList from "../components/WidgetList";
import ModuleListComponent from "../components/ModuleListComponent";
import LessonTabs from "../components/LessonTabsComponent";
import TopicPills from "../components/TopicPills";

class CourseEditorContainer extends React.Component {

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)

        //if we have a moduleId, retrieve its lessons etc, lessons fetched fom server, send to
        // reducer, reducer into state. use state to render list.
        if (moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if (lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
        }

    }

    //lifecycle to track changes in state
    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        //if current module different than previous, render its new lessons
        if (moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        //if lessonId has changed, fetch the selected lesson's topics
        if (lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
        }
        console.log(topicId)
        console.log(lessonId)
        // if (topicId !== prevProps.match.params.topicId) {
        //     this.props.findTopicsForLesson(topicId)
        // }

    }

    render() {
        return (
            <div>
                <h1>Course Editor</h1>
                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent active={true}/>
                    </div>
                    <div className="col-8 container">
                        <LessonTabs active={true}/>
                        <TopicPills active={true}/>
                        <WidgetList active={true}/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    //connect widgets list to assoc. topic
    findWidgetsForTopic: (topicId) =>
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({ //mapper then send to dispatch
                                          type: "FIND_WIDGETS_FOR_TOPIC", //reducer handles action
                                          widgets: widgets, //property: value
                                          topicId: topicId
                                      })),
    //widgets -> shorthand for widgets: widgets

    findAllWidgets: () =>
        widgetService.findAllWidgets() //comes back with all widgets & send to dispatcher
            .then(widgets => dispatch({
                                          type: "FIND_ALL_WIDGETS", //then pass along to all
                                                                    // reducers (widget reducer
                                                                    // will
                                          // care about the event find_all_widgets)
                                          widgets : widgets
                                      })),

    findCourseById: (courseId) => findCourseById(courseId)
        .then(actualCourse => dispatch({
                                           type: "SET_COURSES", //have to be unique
                                           course: actualCourse,

                                           //reducer stores in store, then provides to CourseEditor
                                       })),
    findModulesForCourse: (courseId) => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
                                            type: "FIND_MODULES_FOR_COURSE",
                                            modules: actualModules,
                                            courseId
                                        })),
    findLessonsForModule: (moduleId) => lessonService.findLessonsForModule(moduleId)
        .then(actualLessons => dispatch({
                                      type: "FIND_LESSONS_FOR_MODULE",
                                      lessons: actualLessons,
                                      moduleId : moduleId
                                  })),

    //actualTopics are returned from server (topicService call) and given to dispatch
    //dispatch then invoked reducer and passes it action & item (actualTopics)
    findTopicsForLesson: (lessonId) => topicService.findTopicsForLesson(lessonId)
        .then(actualTopics => dispatch({
                                           type: "FIND_TOPICS_FOR_LESSON",
                                           topics: actualTopics,
                                           lessonId : lessonId

                                       }))

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(CourseEditorContainer)
