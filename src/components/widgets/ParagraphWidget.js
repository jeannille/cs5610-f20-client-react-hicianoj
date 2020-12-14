import React from "react";

const ParagraphWidget = (
    {
            widget,
            updateWidget,
            okWidget,
            deleteWidget,
    }) =>
    <div>

        {
            !widget.editing &&
            <div>
                {widget.text}
            </div>

        }

            {
                    widget.editing &&
                    <div className= "form-group">
                            <select className = "float-right" onChange={ (event) => okWidget({
                                                                           ...widget,
                                                                           type: event.target.value
                                                                   })}
                                    value="widget type" name="userSelectedWidgetType">
                                    <option value="Widget Type"> Widget Type </option>
                                    <option value="HEADING"> Heading </option>
                                    <option value="PARAGRAPH"> Paragraph </option>
                                    <option value="LIST"> List </option>
                                    <option value="IMAGE"> Image </option>
                            </select>


                            <button type="button" className="btn btn-success float-right" onClick={() => okWidget(widget)}>
                                    <i className = "fa fa-check"></i>
                            </button>

                            <h3>Paragraph</h3>

                            <textarea placeholder={"Paragraph text"} className="form-control"
                                      onChange={ (event) =>
                                          updateWidget({...widget, text: event.target.value })}></textarea>
                            <input placeholder="Widget Name" className="form-control"
                                   onChange={ (event) =>
                                       updateWidget({...widget, name: event.target.value })}/>

                            <div>
                                    <h3> Preview </h3>
                                    {widget.text}
                            </div>

                            <button type="button" className="btn btn-danger float-right"
                                    onClick={() => deleteWidget(widget)}>
                                   <i className = "fa fa-trash"></i>
                            </button>

                    </div>
            }

    </div>

export default ParagraphWidget

// import React from 'react';
// import editWidget from "../WidgetList"
//
// const ParagraphWidget = ({name, editing  = false, ok, widget, updateWidget, okWidget}) =>
//     <div>
//         {
//             !editing &&
//             <p>{widget.text}</p>
//
//         }
//         {/*While editing, text box appears and shows preview. */}
//
//         { widget.editing &&
//           <div>
//               <h4>Edit Paragraph:</h4>
//         <textarea id = "test" className ="form-control"
//                   placeholder={"Paragraph text"}
//                   onChange={(event) => updateWidget({
//                       ...widget, text: event.target.value
//                                                     })}/>
//         <input className ="form-control" placeholder="Widget Name" />
//               <h3>Paragraph Widget</h3>
//         <h3>Preview: </h3>
//         <p> {widget.text} </p>
//             <span><input className ="form-control"
//                          onChange={(event) => okWidget({
//                                                            ...widget,
//                                                            text: event.target.value
//                                                        })}
//                          value={widget.name}/>
//                         <button className="btn btn-info float-right" onClick={() => ok(widget)}>
//                             Save Widget <i className="fa fa-check-circle"/>
//                         </button>
//                         </span>
//             </div>
//         }
//         </div>
//
//
//
//
//
//
//
//
// export default ParagraphWidget
