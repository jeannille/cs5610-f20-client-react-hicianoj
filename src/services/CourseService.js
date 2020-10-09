//encapsulates all course related server communication
//exported functions for other pages to use

const url = "https://wbdv-generic-server.herokuapp.com/api/hicianoj/courses"

/*
Retrieves all course instances as an array of courses
 */
export const findAllCourses = () =>
    fetch(url).then(response => response.json())

/*
Creates a new course instance and adds it to the collection of courses
 */
export const createCourse = (newCourse) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newCourse),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

/*
Deletes course instance whose id matches the id parameter.
 */
// export const deleteCourse = (courseId) =>
//     fetch(url).then(response => response.json())
export const deleteCourse = (courseId) =>
    fetch(`${url}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

/*
Updates the course instance whose id matches the id parameter.
Updates the instance with values in course parameter.
 */
export const updateCourse = (courseId, newCourse) => {
    fetch(`${url}/${courseId}`, {
        method: "PUT",
        body: JSON.stringify(newCourse),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

}



/*
Retrieves a course instance that matches the id parameter
 */
export const findAllCoursesById = (courseId) => {
    fetch(`${url}/${courseId}`, {
    }).then(response => response.json())

}

