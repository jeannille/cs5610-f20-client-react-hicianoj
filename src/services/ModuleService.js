const courseUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/courses"
const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/modules"

// Creates a new module instance for the course whose ID is courseId
export const createModule = (courseId, newModule) =>
    fetch(`${courseUrl}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

// retrieves all modules for course whose ID is courseId
export const findModulesForCourse = (courseId) =>
    fetch(`${courseUrl}/${courseId}/modules`)
        .then(response => response.json())

//retrieves one module whose ID is moduleId (optional)
export const findModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`)
        .then(response => response.json())

// updateModule(moduleId, module) updates one module whose ID is moduleId
export const updateModule = (moduleId, module) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

//removes module whose ID is moduleId
export const deleteModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    updateModule, findModulesForCourse, createModule, deleteModule
}