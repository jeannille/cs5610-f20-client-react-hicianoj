import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget} from "../actions/widgetActions";


const WidgetList = ({widgets}) =>
    <div>
        <h1>WidgetLIst </h1>


    <ul>
        widgets.map(widget. => <li>{widget.name}</li>
    </ul>

    </div>


export default WidgetList



//Stateless react comp, WidgetList receives array of widgets & renders them, also receives
// function names (actions) to notify container to implement respective actions
// const WidgetList = ({
//                         widgets=[],
//                         deleteWidget,
//                         createWidget,
//                         updateWidget,
//                         editWidget,
//                         okWidget}) =>
//     <div className = "container">
//         <div className="form-group" id = "widgetBox">
//             <h3>
//                 Heading Widget
//                 <span className="float-right">
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-up"></i>
//                         </a>
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-down"></i>
//                         </a>
//                         <select>
//                             <option>Heading</option>
//                             <option>Textbook</option>
//                             <option>Document</option>
//                             <option>Slides</option>
//                         </select>
//                         <a className="btn btn-warning"><i className="fa fa-trash"></i></a>
//                             </span>
//             </h3>
//
//             <input className="form-control" placeholder="enter paragraph text"/>
//
//             <select className="form-control">
//                 <option>Heading 1</option>
//                 <option>Heading 2</option>
//                 <option>Heading 3</option>
//                 <option>Heading 4</option>
//                 <option>Heading 5</option>
//             </select>
//
//             <input className="form-control"
//                    title="Name your widget" placeholder="Widget Name"/>
//         </div>
//
//         <div className="form-group">
//             <h3>
//                 Paragraph Widget
//                 <span className="float-right">
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-up"></i>
//                         </a>
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-down"></i>
//                         </a>
//                         <select>
//                             <option>Paragraph</option>
//                             <option>Heading</option>
//                             <option>Paragraph</option>
//                             <option>List</option>
//                         </select>
//                         <a className="btn btn-warning"><i className="fa fa-trash"></i></a>
//                             </span>
//             </h3>
//
//
//             <div className="form-group">
//                 <label htmlFor="exampleFormControlTextarea1">Enter text</label>
//                 <textarea className="form-control" id="exampleFormControlTextarea1"
//                           rows="3"></textarea>
//             </div>
//         </div>
//
//         <div class="form-group">
//
//             <h3>
//                 List Widget
//                 <span className="float-right">
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-up"></i>
//                         </a>
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-down"></i>
//                         </a>
//                         <select>
//                             <option>List</option>
//                             <option>Heading</option>
//                             <option>Paragraph</option>
//                             <option>Image</option>
//                         </select>
//                         <a className="btn btn-warning"><i className="fa fa-trash"></i></a>
//                             </span>
//             </h3>
//         </div>
//
//         <div className="form-group">
//             <h3>
//                 Image Widget
//                 <span className="float-right">
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-up"></i>
//                         </a>
//                         <a className="btn btn-info">
//                             <i className="fa fa-arrow-down"></i>
//                         </a>
//                         <select>
//                             <option>Image</option>
//                             <option>Heading</option>
//                             <option>Paragraph</option>
//                             <option>List</option>
//                         </select>
//                         <button className="btn btn-warning"><i className="fa fa-trash"></i></button>
//                             </span>
//             </h3>
//         </div>
//     </div>
//
// const stateToPropertyMapper = (state) => ({
//     widgets: state.widgetsReducer.widgets
// })
//
// const propertyToDispatchMapper = (dispatch) => ({
//     deleteWidget: (widget) => deleteWidget(dispatch, widget),
//     createWidget: () => createWidget(dispatch),
//     updateWidget: (widget) => updateWidget(dispatch, widget),
//     editWidget: (widget) => editWidget(dispatch, widget),
//     okWidget: (widget) => okWidget(dispatch, widget)
// })
// export default connect
// ( stateToPropertyMapper,
//   propertyToDispatchMapper)
// (WidgetList)