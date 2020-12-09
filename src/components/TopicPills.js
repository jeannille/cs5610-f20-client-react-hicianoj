import React from "react";
import {connect} from "react-redux";
import topicService from "../services/TopicService"
import {Link} from "react-router-dom";

const TopicPills = ({topics = [], createTopic, lessonId, moduleId, course, deleteTopic,  updateTopic, edit, ok}) =>
    <div className={"container"}>
        <h3>Topics ({lessonId})</h3>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                               <li key={topic._id} className="nav-item">
                                   <button className="btn float-right"
                                           onClick={() => deleteTopic(topic)}>
                                       <i className="fa fa-trash-o"/>
                                   </button>
                                   {
                                       !topic.editing &&
                                       <span>
                  <button
                      onClick={() => edit(topic)}
                          className="btn float-right">
                    <i className="fa fa-pencil"/>
                  </button >
                                           <Link
                                               to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                               className="nav-link">
                    {topic.title}
                  </Link>
                                        </span>
                                   }
                                   {
                                       topic.editing &&
                                       <span>
                <button className="btn btn-success float-right" onClick={() => ok(topic)}>
                  <i className="fa fa-check-circle"/>
                </button>
                <input
                    onChange={(event) => updateTopic({
                                                          ...topic,
                                                          title: event.target.value
                                                      })}
                    value={topic.title}/>
              </span>
                                   }
                               </li>
                )
            }
            <li>
            <button className="btn btn-success float-right" onClick={() => createTopic(lessonId)}>
                <i className="fa fa-plus-circle"/>
            </button></li>
        </ul>

    </div>

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,
    moduleId: state.lessonReducer.moduleId,
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId
    //check which reducer is returns parent id (by actions)
})

//dispatch means you're calling the widgetReducer to get the updated state
//which happens up in the buttons
const dispatchMapper = (dispatch) => ({
    createTopic: (lessonId) => topicService
        .createTopic(lessonId)
        .then(topic => dispatch({
                                    type: "CREATE_TOPIC",
                                    topic : topic
                                })),
    edit: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_TOPIC",
                                 topic: {...topic, editing: true}
                             })),
    deleteTopic: (topic) =>
        topicService
            .deleteTopic(topic._id)
            .then(status => dispatch({
                                        type: "DELETE_TOPIC",
                                        topic : topic
                                    })),
    updateTopic: (topic) =>
        dispatch({
                     type: "UPDATE_TOPIC",
                     topic: topic
                 }),
    ok: (topic) =>
        topicService.updateTopic(topic._id, {
            ...topic, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_TOPIC",
                                       topic: {...topic, editing: false}
                                   }))
})

export default connect
(stateToPropertyMapper, dispatchMapper)
(TopicPills)
//
// {/*                            <ul className="nav nav-pills">*/
// }
// {/*    <li className="nav-item ">*/
// }
// {/*        <a href="#" className="nav-link">Recurrence Relations</a>*/
// }
// {/*    </li>*/
// }
// {/*    <li className="nav-item">*/
// }
// {/*        <a href="#" className="nav-link active">Stable Matching</a>*/
// }
// {/*    </li>*/
// }
// {/*    <li className="nav-item ">*/
// }
// {/*        <a href="#" className="nav-link">Asymptotic Order of Growth</a>*/
// }
// {/*    </li>*/
// }
// {/*    <li className="nav-item ">*/
// }
// {/*        <a href="#" className="nav-link wbdv-topic-add-btn"><i*/
// }
// {/*            className="fa fa-plus fa-.5x"/> Add*/
// }
// {/*            topic</a></li>*/
// }
// {/*</ul>*/
// }
