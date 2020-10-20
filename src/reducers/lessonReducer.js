
export const lessonReducer = (state={}, action)  => {
    switch (action.type) {

        case "UPDATE_LESSON": //UPDATE_LESSON updates one lesson whose ID is lessonId
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson?action.lesson : lesson)
            }

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
