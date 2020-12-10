import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget,
    updateWidgetOrder

} from "../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import ImageWidget from "./widgets/ImageWidget";
import ListWidget from "./widgets/ListWidget";

//to update widget order
const UP = -1
const DOWN = 1
/*
Widget List iterates over list of widgets received from local java server.
 */

//functions to handle up and down buttons

function handleMove (id, direction, widgets, updateWidgetOrder, topicId) {
    // const {items} = this.state

    // {alert("entered handleMove")}


    const position = widgets.findIndex((i) => i.id === id)
    if (position < 0) {
        throw new Error("Given item not found.")
    } else if (direction === UP && position === 0 || direction === DOWN && position === widgets.length - 1) {
        return // canot move outside of array
    }

    const item = widgets[position] // save item for later
    const newWidgets = widgets.filter((i) => i.id !== id) // remove item from array
    newWidgets.splice(position + direction, 0, item) // puts item back into array into its new position

    // {alert(JSON.stringify(newWidgets))}

    // this.setState({widgets: newWidgets})
    updateWidgetOrder(newWidgets,topicId);

}

const WidgetList = ({
                        topicId = {},
                        widgets = [],
                        deleteWidget,
                        createWidget,
                        updateWidget,
                        editWidget,
                        okWidget,
                        updateWidgetOrder
                    }) =>
    <div>
        <h3>Widgets</h3>
        <ul className="list-group">
            {
                widgets.map(widget =>
                                <li key={widget.id} className="list-group-item">
                                    {/*{JSON.stringify(widget)}*/}
                                    {/*arrows*/}


                                    {/*{*/}
                                    {/*    widget.editing &&*/}
                                    {/*    <span><input*/}
                                    {/*        onChange={(event) => updateWidget({*/}
                                    {/*                                              ...widget,*/}
                                    {/*                                              name: event.target.value*/}
                                    {/*                                          })}*/}
                                    {/*        value={widget.name}/>*/}
                                    {/*        <button onClick={() => okWidget(widget)}>*/}
                                    {/*            Ok*/}
                                    {/*        </button>*/}
                                    {/*        </span>*/}
                                    {/*}*/}
                                    {
                                        <span>
                                            {
                                                widget.editing &&
                                                <span className="float-right">
                        <a className="btn btn-info" onClick={() => handleMove(widget.id, UP, widgets, updateWidgetOrder, topicId)} >
                            <i className="fa fa-arrow-up" ></i>
                        </a>
                        <a className="btn btn-info">
                            <i className="fa fa-arrow-down" onClick={() => handleMove(widget.id, DOWN, widgets, updateWidgetOrder, topicId)}></i>
                        </a>
                                                    {/* dropdown menu to update value of widget type*/}
                            <select onChange={(event) => okWidget({
                                                                      ...widget,
                                                                      type: event.target.value
                                                                  })}
                                                            value="widget type">
                            <option value="WIDGET TYPE">Select Widget Type</option>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LIST">List</option>
                        </select>
                                        <button className={"btn btn-danger float-right"}
                                                onClick={() => deleteWidget(widget)}>
                                        <i className="fa fa-trash-o"/>
                                    </button></span>
                                            }
                                            {widget.type}
                                            {
                                                widget.type === "HEADING" &&
                                                <HeadingWidget widget={widget}
                                                               editing={widget.editing}
                                                               ok={okWidget}
                                                               updateWidget={updateWidget}
                                                               widget={widget}
                                                />
                                            }
                                            {
                                                widget.type === "PARAGRAPH" &&
                                                <ParagraphWidget name={widget.name}
                                                                 editing={widget.editing}
                                                                 ok={okWidget}
                                                                 updateWidget={updateWidget}
                                                                 widget={widget}/>
                                            }
                                            {
                                                widget.type === ("IMAGE") &&
                                                <ImageWidget
                                                    widget={widget}
                                                    updateWidget={updateWidget}
                                                    ok={okWidget}
                                                    deleteWidget={deleteWidget}
                                                />
                                            }
                                            {
                                                widget.type === ("LIST") &&
                                                <ListWidget
                                                    widget={widget}
                                                    updateWidget={updateWidget}
                                                    ok={okWidget}
                                                    deleteWidget={deleteWidget}
                                                />
                                            }
                                            <button className = "btn btn-warning float-right" onClick={() => editWidget(widget)}>
                                                <i className="fa fa-pencil-square-o"></i>
                                  </button>
                                </span>
                                    }
                                </li>
                )
            }
            <li className="list-group-item ">
                <button className="btn btn-success"
                    //when button is clicked, WList comp. notifies reducer via dispatcher
                        onClick={() => createWidget(topicId)}>
                    <i className="fa fa-plus-circle"/>
                </button>
            </li>
            {/*{JSON.stringify(widgets)}*/}

        </ul>

    </div>

const stateToPropertyMapper = (state) => ({
    //properties of this component : what lives in reducer side
    widgets: state.widgetsReducer.widgets,
    topicId: state.widgetsReducer.topicId //gets topicId from reducer?
})

//dispatch calls the specified reducer function (we've stored in widgetActions)
const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widgetId) => deleteWidget(dispatch, widgetId),
//notify the reducer by passing it an object
    createWidget: (topicId) => createWidget(dispatch, topicId),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget),
    updateWidgetOrder: (newWidgets, topicId) => updateWidgetOrder(dispatch, newWidgets, topicId)
})

export default connect
(stateToPropertyMapper,
 propertyToDispatchMapper)
(WidgetList)
