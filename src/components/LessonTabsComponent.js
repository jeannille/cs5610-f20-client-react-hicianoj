import React from "react";
import {lessonReducer} from "../reducers/lessonReducer";
import {connect} from "react-redux";
import lessonService from "../services/LessonService";
import {findCourseById} from "../services/CourseService";

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
            <button className="btn btn-light" onClick={() => createLessonForModule(moduleId)}>
            <i className="fa fa-plus"/>
        </button>
        </ul>

        <br/>
    </div>

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons,
    moduleId: state.lessonReducer.moduleId
})

const dispatchToPropertyMapper = (dispatch) => ({
    updateLesson: (newLesson) =>
        lessonService.updateLesson(newLesson)
            .then(actuaLesson => dispatch({
                                              type: "UPDATE_LESSON",
                                              lesson: actuaLesson
                                          })),
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
(LessonTabsComponent)
