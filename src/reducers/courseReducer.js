/*
example from lecture
 */

const initialState = {
    courses: [],
    course: {
        _id: "1234",
        title: "SOME BOGUS COURSE"
    }
}

// updates state of course in order to for Property Manager to obtain, and then map to course
// Property Manager
const courseReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_COURSES":
            return {
                ...state,
                course: action.course
            }
        default:
            return state
    }
}

export default courseReducer
