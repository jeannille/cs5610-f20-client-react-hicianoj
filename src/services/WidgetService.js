/*
After updating java server with Widget component, Widget Service & Widget Controller
 */
//36:05 10/22
const WIDGET_URL = "http://localhost:8080/api/widgets" //returns list of all widgets
const TOPIC_URL = "http://localhost:8080/api/topics"

// const WIDGET_URL = "https://ancient-brook-80044.herokuapp.com/api/widgets"
// const TOPIC_URL = "https://ancient-brook-80044.herokuapp.com/api/topics"

//already parsing in Java WidgetController
//the client posts to java server according to the URL path
//this is getting response from the server when it requests to fetch that URL? where widgets are
//returns new list of JSON objects
const createWidget = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`,
          {
              method: "POST",
              body: JSON.stringify({
                                       name: "Heading Widget",
                                       type: "HEADING",
                                       size: 1
                                   }),
              headers: {
                  "content-type": "application/json"
              }
          })
        .then(response => response.json())

export const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

//this should hit "/api/topics/{topicId}/widgets" from java-widgetService
// which then returns array of widgets
const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`) //append widgets to match w URL
        .then(response => response.json())

//return all widgets from local java server
const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())

//widget Actions connects to widgetService, which fetches server URL
// and sends this response back to server
const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "DELETE"
    })
//no need to add response, since java server deletes
//returns nothing, void deleteWidget

const widgetOrder = (topicId, topicWidgets) => {
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify(topicWidgets),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}
//export in order to use in actions
export default {
    widgetOrder, findAllWidgets, createWidget, findWidgetsForTopic, deleteWidget, updateWidget
}
