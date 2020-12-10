import React from "react";

/*
Widgets will handle if edit rendering.
 */

//pass widget, if it has editing, display etc
const ListWidget = (widget, okWidget, updateWidget, listType = ['ordered', 'unordered']) =>


            <div>
                {
                    widget.editing &&
                    <div>
                        <input placeholder="Name" className="form-control"
                               onChange={(event) => updateWidget(
                                   {...widget, name: event.target.value})}/>


                        <button type="button" className="btn btn-success float-right"
                                onClick={() => okWidget(widget)}>
                            Save
                        </button>

                        {/*<button className="btn btn-info float-right" onClick={() => ok(widget)}>*/}
                        {/*    Save Widget <i className="fa fa-check-circle"/>*/}
                        {/*</button>*/}

                    <h4>List: </h4>
                    <select onChange={ (event) => updateWidget({...widget, value: event.target.value })}
                    className="form-control"
                    value="list type"
                    name="selectListType"
                    >
                    <option value=""> Select List Type</option>
                    <option value="unordered"> Unordered List</option>
                    <option value="ordered"> Ordered List</option>
                    </select>

                        {
                            !widget.editing &&

                            <div>
                                <h3> Preview </h3>
                                {
                                    widget.value === ("unordered") &&

                                    <ul>
                                        <li> {widget.text}</li>
                                        <li> list item</li>
                                        <li> list item</li>
                                    </ul>

                                }
                                {
                                    widget.value === ("ordered") &&
                                    <ol>
                                        <li> {widget.text}</li>
                                        <li> list item</li>
                                        <li> list item</li>
                                    </ol>
                                }

                            </div>
                        }

                    </div>
                }

            </div>



export default ListWidget
