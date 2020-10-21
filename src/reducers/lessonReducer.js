
//reducers expect a state, and action (obj with an associated type to it
//receives actions from dispatch function, when Container calls propertyToDisptachMapper
export const lessonReducer = (state={}, action)  => {
    switch (action.type) {
        //save button
        case "UPDATE_LESSON": //UPDATE_LESSON updates one lesson whose ID is lessonId
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson?action.lesson : lesson)
            }
        //delete button
        case "DELETE_LESSON": // DELETE_LESSON removes lesson whose ID is lessonId
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }

        case "FIND_LESSONS_FOR_MODULE": //FIND_LESSON_FOR_MODULE retrieves all lessons for course whose ID is moduleId
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        //add lesson button (plus)
        case "CREATE_LESSON_FOR_MODULE": //CREATE_LESSON creates a new lesson instance for the module whose ID is moduleId
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        default:
            return state
    }
}

export default lessonReducer