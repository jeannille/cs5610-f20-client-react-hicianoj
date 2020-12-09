

const initialState = {
    courses: [],
    course: {}
}

// updates state of course in order to for Property Manager to obtain, and then map to course
// Property Manager
const courseReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_COURSES":
            //sending actual course from the server
            return {
                ...state,
                course: action.course //gets saves as store, and reaches CourseEditor
            }
        default:
            return state
    }
}

export default courseReducer
