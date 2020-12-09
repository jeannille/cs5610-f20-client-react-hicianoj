// //these are used in the container
//
// import topicService from "../services/TopicService";
//
// // export const deleteTopic = (dispatch, topic) =>
// //     topicService.deleteTopic(topic._id)
// //         .then(statue => dispatch({
// //                                      type: DELETE_TOPIC,
// //                                      topic: topic
// //                                  })
// //         )
//
// export const updateTopic = (dispatch, topic) =>
//     topicService.updateTopic(topic._id, topic)
//         .then(status => dispatch({
//                                      type: UPDATE_TOPIC,
//                                      topic : topic
//                                  })
//         )
//
// export const createTopic = (dispatch, lesson, topic) =>
//     topicService.createTopicForLesson(lesson._id, topic)
//         .then(actualTopic => dispatch({
//                                            type: CREATE_TOPIC,
//                                            topic: actualTopic
//                                        }))
//
// export const DELETE_TOPIC = "DELETE_TOPIC"
// export const UPDATE_TOPIC = "UPDATE_TOPIC"
// export const CREATE_TOPIC= "CREATE_TOPIC"
