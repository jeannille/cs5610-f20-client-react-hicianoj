import React from "react";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import {Link} from "react-router-dom";

// /*
// Stateless react component, renders a list of modules from the currently selected course. Has
//  properties: course, modules in course, and functions defined in ModuleService.
//  */

const ModuleListComponent = (
    {
        course = {},
        modules = [],
        deleteModule,
        createModule,
        updateModule,
        edit,
        ok,
    }) =>
    <div>
        <h2>Currently editing: <br/> <i>{course.title}</i></h2>
        <h3>Modules </h3>
        <ul className="list-group">
            {
                modules.map(module =>
                                <li key={module._id} className="list-group-item">
                                    <button className="btn btn-danger float-right"
                                            onClick={() => deleteModule(module)}>
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                    {
                                        !module.editing &&
                                        <span>
                  <button onClick={() => edit(module)} className="btn btn-warning float-right">
                    <i className="fa fa-pencil"/>
                  </button>

                  {/*encode the URL to maintain correct module id*/}
                  <Link to={`/edit/${course._id}/modules/${module._id}`}>
                    {module.title}
                  </Link>
                                        </span>
                                    }
                                    {
                                        module.editing &&
                                        <span>
                <button className="btn btn-success float-right"
                    onClick={() => ok(module)}>
                  <i className="fa fa-check-circle"/>
                </button>
                <input
                    onChange={(event) => updateModule({
                                                          ...module,
                                                          title: event.target.value
                                                      })}
                    value={module.title}/>
              </span>
                                    }

                                </li>
                )
            }

            <li className="list-group-item ">
                <button className="btn btn-success"
                        onClick={() => createModule(course)}>
                    <i className="fa fa-plus-circle"/>
                </button>
            </li>
        </ul>
    </div>

// export default ModuleListComponent

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    ok: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
                                       type: "UPDATE_MODULE",
                                       module: {...module, editing: false}
                                   })),
    edit: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: true
        }).then(status =>
                    dispatch({
                                 type: "UPDATE_MODULE",
                                 module: {...module, editing: true}
                             })),
    deleteModule: (module) =>
        moduleService.deleteModule(module._id)
            .then(status => dispatch({
                                         type: "DELETE_MODULE",
                                         module: module
                                     })),
    createModule: (course) =>
        moduleService.createModuleForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
                                             type: "CREATE_MODULE",
                                             module: actualModule
                                         })),
    updateModule: (module) =>
        dispatch({
                     type: "UPDATE_MODULE",
                     module: module
                 })
    // moduleService.updateModule(module._id, module)
    //   .then(status => dispatch({
    //     type: "UPDATE_MODULE",
    //     module: module
    //   }))
})

export default connect
(stateToPropertyMapper,
 propertyToDispatchMapper)
(ModuleListComponent)

// <div className="row">
//
//     <div className>  {/*previous row = 4*/}
//         <ul className="list-group wbdv-module-list">
//             <li className="list-group-item active wbdv-module-item">Module 1: Intro &
//                 Review
//                 <i className="fa fa-times float-right"></i>
//             </li>
//             <li className="list-group-item wbdv-module-item">Module 2: Divide & Conquer
//                 <i className="fa fa-times float-right"></i>
//             </li>
//             <li className="list-group-item wbdv-module-item">Module 3 :Dynamic
//                 Programming
//                 <i className="fa fa-times float-right"></i>
//             </li>
//             <li className="list-group-item wbdv-module-item"> Module 4: Greedy
//                 Algorithms
//                 <i className="fa fa-times float-right"></i>
//             </li>
//             <li className="list-group-item wbdv-module-item">Module 5: Graph
//                 Algorithms<i
//                     className="fa fa-times float-right"></i>
//             </li>
//
//             <li className="list-group-item">New Module<i
//                 className="fa fa-plus float-right"></i>
//             </li>
//         </ul>
//     </div>
// </div>




