import React from "react";
import {connect} from "react-redux";
import {lessonReducer} from "../reducers/lessonReducer";
import lessonService from "../services/LessonService";
import {Link} from "react-router-dom";
import moduleService from "../services/ModuleService";
import {editLesson} from "../actions/lessonActions";

const LessonTabs = (
    {
        course,
        moduleId,
        lessons = [],
        createLessonForModule,
        deleteLesson,
        updateLesson,
        edit,
        ok

    }) =>

    <div>
        <h3>Lessons </h3>
        {/*<p>({moduleId})</p>*/}
        {/*iterate and generate an li for each*/}
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li key={lesson._id} className="nav-item">
                                    <Link
                                        to={`/edit/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}
                                        className="nav-link">
                                        <button onClick={() => deleteLesson(lesson._id)}
                                                className="btn float-right">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        {
                                            !lesson.editing &&
                                            <span>
                                            {lesson.title}
                                                <button onClick={() => edit(lesson)}
                                                        className="btn float-right">
                                            <i className="fa fa-pencil"/>
                                            </button>
                                            </span>
                                        }

                                        {
                                            lesson.editing &&
                                            <span>

                                            <input
                                                onChange={(e) => updateLesson(
                                                    {...lesson, title: e.target.value})}
                                                value={lesson.title}/>
                                                 <button className="btn btn-success float-right"
                                                         onClick={() => ok(lesson)
                                                             //fetch the findLessonsForTopic
                                                         }>
                                        <i className="fa fa-check"/>
                                        </button>

                                                </span>
                                        }


                                    </Link>
                                </li>
                )
            }
            <button className="btn float-right" onClick={() => createLessonForModule(moduleId)}>
                <i className="fa fa-plus-circle"/>
            </button>

        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,
    lessons: state.lessonReducer.lessons,
    module: state.lessonReducer.module ,//lessons know which module it belongs to,
    moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispatch) => ({
        ok: (lesson) =>
            lessonService.updateLesson(lesson._id, {
                ...lesson, editing: false
            }).then(status => dispatch({
                                           type: "UPDATE_LESSON",
                                           lesson: {...lesson, editing: false}
                                       })),
        edit: (lesson) =>
            lessonService.updateLesson(lesson._id, {
                ...lesson, editing: true
            }).then(status =>
                        dispatch({
                                     type: "UPDATE_LESSON",
                                     lesson: {...lesson, editing: true}
                                 })),
    updateLesson: (lesson) =>
        dispatch({
                     type: "UPDATE_LESSON",
                     lesson: lesson
                 }),

    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                                         type: "DELETE_LESSON",
                                         lessonId
                                     })),
    createLessonForModule: (moduleId) =>
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                                               type: "CREATE_LESSON_FOR_MODULE",
                                               lesson: actualLesson
                                           }))
})

export default connect
(stateToPropertyMapper,
 dispatchToPropertyMapper)
(LessonTabs)
