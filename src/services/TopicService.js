
//from assignment format
// const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/lessons/LESSON_ID/topics"
// const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/topics/TOPIC_ID"

//from jose's lecture format
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/lessons"
const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/topics"

// createTopic(lessonId, topic) creates a new topic instance for the lesson whose ID is lessonId
export const createTopic = (lessonId, newTopic) =>
    fetch(`${lessonUrl}/${lessonId}/lessons`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

// findTopicsForLesson(lessonId) retrieves all topics for lesson whose ID is lessonId
export const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

// findTopic(topicId) retrieves one topic whose ID is topicId (optional)
export const findTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}`)
        .then(response => response.json())

// updateTopic(topicId, topic) updates one topic whose ID is topicId
export const updateTopic = (topicId, topic) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

// deleteTopic(topicId) removes topic whose ID is topicId
export const deleteTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {
    createTopic, findTopicsForLesson, findTopic, updateTopic, deleteTopic
}