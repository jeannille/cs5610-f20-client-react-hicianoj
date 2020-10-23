
//these are used in the container

import lessonService from "../services/LessonService";

export const deleteLesson = (dispatch, lesson) =>
    lessonService.deleteLesson(lesson._id)
        .then(statue => dispatch({
                                     type: DELETE_LESSON,
                                     lesson: lesson
                                 })
        )

export const updateLesson = (dispatch, lesson) =>
    lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
                                     type: UPDATE_LESSON,
                                     lesson
                                 })
        )
//create lesson for associated module
export const createLesson = (dispatch, module, lesson) =>
    lessonService.createLessonForModule(module._id, lesson)
        .then(actualLesson => dispatch({
                                           type: CREATE_LESSON,
                                           lesson: actualLesson
                                       }))

export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const CREATE_LESSON = "CREATE_LESSON"