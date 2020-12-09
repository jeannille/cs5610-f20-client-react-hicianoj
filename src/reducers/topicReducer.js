

const initialState = {
    topics: []
}

export const topicReducer = (state= initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOPIC": //updates one topic whose ID is topicId
            return {
                ...state,
                topics: state.topics.map(topic => topic._id === action.topic._id ? action.topic : topic)
            }
        case "DELETE_TOPIC": //removes topic whose ID is topicId
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topic._id)
            }
        case "FIND_TOPICS_FOR_LESSON": //retrieves all topics for lesson whose ID is lessonId
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
            //after topic is created, reducer should append the new topic to old state list
        case "CREATE_TOPIC": //creates a new topic instance for the lesson whose ID is lessonId
            return {
                ...state, //get state of old topics
                topics: [
                    ...state.topics, //and append new topic to it
                    action.topic
                ]
            } //default, return state without changes
        default:
            return state
    }

}

