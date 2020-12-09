
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/lessons"
const topicsUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/topics"

// createTopic(lessonId, topic) creates a new topic instance for the lesson whose ID is lessonId
const createTopic = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({
                                 title: "NEW TOPIC"
                             }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

// findTopicsForLesson(lessonId) retrieves all topics for lesson whose ID is lessonId

const findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

// findTopic(topicId) retrieves one topic whose ID is topicId (optional)
const findTopic = (topicId) =>
    fetch(`${topicsUrl}/${topicId}`)
        .then(response => response.json())

// updateTopic(topicId, topic) updates one topic whose ID is topicId
const updateTopic = (topicId, topic) =>
    fetch(`${topicsUrl}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

// deleteTopic(topicId) removes topic whose ID is topicId
const deleteTopic = (topicId) =>
    fetch(`${topicsUrl}/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())



export default {
    createTopic, findTopicsForLesson, findTopic, updateTopic, deleteTopic
}
