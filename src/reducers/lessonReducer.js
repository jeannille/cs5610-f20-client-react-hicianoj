
//reducers expect a state, and action (obj with an associated type to it
//receives actions from dispatch function, when Container calls propertyToDisptachMapper
// import {CREATE_LESSON_FOR_MODULE, UPDATE_LESSON, DELETE_LESSON} from "../actions/lessonActions";
const initialState = {
    lessons: []
}
//listens for actions associated w. lesson component!
export const lessonReducer = (state= initialState, action) => {
    switch (action.type) {
        case "UPDATE_LESSON": //iterte over old lessons, if lesson matches keep, if not take old
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id ? action.lesson : lesson)
            }
        case "DELETE_LESSON":
            //notification from lessonTabs dispatchToPropertyManager
            return {
                ...state, //filter the lessons, keep ones w/ different id than one passed
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons,
                moduleId: action.moduleId
            }
        case "CREATE_LESSON_FOR_MODULE":
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
