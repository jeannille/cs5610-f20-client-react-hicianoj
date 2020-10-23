import React from "react";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {findCourseById} from "../services/CourseService";
import moduleService from "../services/ModuleService";
import {createLesson} from "../actions/lessonActions";

const LessonTabsComponent = (
    {
        moduleId,
        lessons=[],
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) =>
    <div>
        {/* ({moduleId})*/}
        <h3>Lessons</h3>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                                <li key={lesson._id} className="nav-item">
                                    <a class="nav-link">
                                        <button onClick={() => deleteLesson(lesson._id)}
                                                className="btn btn-md float-right">
                                            <i className="fa fa-trash-o "/>
                                        </button>

                                        {
                                            !lesson.editing &&
                                            <span>
                    <button onClick={() => updateLesson({...lesson, editing: true})}
                            className="btn btn-md float-right">
                <i className="fa fa-pencil"/>
              </button>
                                                {lesson.title}
                  </span>}
                                        {
                                            lesson.editing &&
                                            <span>
              <button onClick={() =>
                  updateLesson({...lesson, editing: false})}>
                <i className="fa fa-check"/>
              </button>
                    <input value={lesson.title}/>
                  </span>
                                        }
                                    </a>
                                </li>
                )
            }
            <button className="btn btn-light" onClick={() => createLesson(module)}>
            <i className="fa fa-plus"/>
        </button>
        </ul>

        <br/>
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId
})

const propertyToDispatchMapper = (dispatch) => ({
    //ok button appears when lesson is not being updated
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

    // updateLesson: (newLesson) =>
    //     lessonService.updateLesson(newLesson)
    //         .then(actuaLesson => dispatch({
    //                                           type: "UPDATE_LESSON",
    //                                           lesson: actuaLesson
    //                                       })),

    deleteLesson: (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => dispatch({
                                         type: "DELETE_LESSON",
                                         lessonId
                                     })),
    createLesson: (moduleId) =>
        lessonService.createLessonForModule(
            moduleId, {
                title: "New Lesson"
            })
            .then(actualLesson => dispatch({
                                               type: "CREATE_LESSON_FOR_MODULE",
                                               lesson: actualLesson
                                           })),
    updateLesson: (lesson) =>
        dispatch({
                     type: "UPDATE_LESSON",
                     lesson: lesson
                 })

})

export default connect
(stateToPropertyMapper,
 propertyToDispatchMapper)
(LessonTabsComponent)
