const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/modules"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/lessons"

// createLesson(moduleId, lesson) creates a new lesson instance for the module whose ID is moduleId
export const createLesson = (moduleId, lesson) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

// findLessonsForModule(moduleId) retrieves all lessons for course whose ID is moduleId
export const findLessonsForModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
        .then(response => response.json())

// findLesson(lessonId) retrieves one lesson whose ID is lessonId (optional)
//shouuld pass actual lesson._id when called and not in def right?
export const findModule = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}`)
        .then(response => response.json())

// updateLesson(lessonId, lesson) updates one lesson whose ID is lessonId
export const updateLesson = (lesson) =>
    fetch(`${lessonUrl}/${lesson._id}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

// deleteLesson(lessonId) removes lesson whose ID is lessonId
export const deleteLesson = lessonId =>
    fetch(`${lessonUrl}/${lessonId}`, {
        method: "DELETE"
    }).then(response => response.json())


export default {
    findLessonsForModule,
    createLesson,
    deleteLesson,
    updateLesson
}

