
const initialState= {
    topics:[]

}
const topicReducer = (state= initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOPIC": //updates one topic whose ID is topicId
            return {
                ...state,
                topics: state.topics.map(topic => topic._id === action.topic?action.topic : topic)
            }
        case "DELETE_LESSON": //removes topic whose ID is topicId
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case "FIND_TOPICS_FOR_LESSON": //retrieves all topics for lesson whose ID is lessonId
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
        case "CREATE_TOPIC": //creates a new topic instance for the lesson whose ID is lessonId
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        default:
            return state
    }
}

export default topicReducer