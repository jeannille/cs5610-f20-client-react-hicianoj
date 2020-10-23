
//reducers expect a state, and action (obj with an associated type to it
//receives actions from dispatch function, when Container calls propertyToDisptachMapper


const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson ? action.lesson : lesson)
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        case "CREATE_LESSON":
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



