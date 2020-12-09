// import React from "react";
// import {connect} from "react-redux";
// import ModuleListComponent from "../components/ModuleListComponent"
// import moduleService from "../services/ModuleService";
//
// //get state from reducer
// const stateToPropertyMapper = (state) => ({
//     modules: state.moduleReducer.modules,
//     course: state.courseReducer.course
// })
//
// const propertyToDispatchMapper = (dispatch) => ({
//     ok: (module) =>
//         moduleService.updateModule(module._id, {
//             ...module, editing: false
//         }).then(status => dispatch({
//                                        type: "UPDATE_MODULE",
//                                        module: {...module, editing: false}
//                                    })),
//     edit: (module) =>
//         moduleService.updateModule(module._id, {
//             ...module, editing: true
//         }).then(status =>
//                     dispatch({
//                                  type: "UPDATE_MODULE",
//                                  module: {...module, editing: true}
//                              })),
//     deleteModule: (module) =>
//         moduleService.deleteModule(module._id)
//             .then(status => dispatch({
//                                          type: "DELETE_MODULE",
//                                          module: module
//                                      })),
//     createModule: (course) => {
//         console.log(course._id)
//         moduleService.createModule(course._id, {
//             title: "New Module"
//         }).then(actualModule => dispatch({
//                                              type: "CREATE_MODULE",
//                                              module: actualModule
//
//                                          }))
//     },
//     updateModule: (module) =>
//         dispatch({
//                      type: "UPDATE_MODULE",
//                      module: module
//                  })
// })
//
// export default connect(stateToPropertyMapper, propertyToDispatchMapper)(ModuleListComponent)