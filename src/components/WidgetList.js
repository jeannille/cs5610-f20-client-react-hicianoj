import React from "react";
import {connect} from "react-redux";
import {
    createWidget,
    deleteWidget,
    updateWidget,
    editWidget,
    okWidget
} from "../actions/widgetActions";

const WidgetList = ({
                        widgets = [],
                        deleteWidget,
                        createWidget,
                        updateWidget,
                        editWidget,
                        okWidget
                    }) =>
    <div className="container">
        <h1>Widgets</h1>
        <ul>
            {
                widgets.map(widget =>
                                <li className="list-group-item">
                                    <button className="btn float-right"
                                            onClick={() => deleteWidget(widget)}>
                                        <i className="fa fa-trash"/>
                                    </button>
                                    {
                                        widget.editing &&
                                        <span><input
                                            onChange={(event) => updateWidget({
                                                                                  ...widget,
                                                                                  name: event.target.value
                                                                              })}
                                            value={widget.name}/>
                <button className="btn btn-light" onClick={() => okWidget(widget)}>
                  <i className="fa fa-check-circle"/>
                </button>
                </span>
                                    }
                                    {
                                        !widget.editing &&
                                        <span>
                  {widget.name}
                                            <button onClick={() => editWidget(widget)}
                                                    className="float-right btn">
                    <i className="fa fa-pencil"/>
                  </button>
                </span>
                                    }
                                </li>
                )
            }
        </ul>

        <button className="btn btn-success float-right" onClick={createWidget}><i
            className="fa fa-plus-circle"/></button>
    </div>

// export default WidgetList

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidget: () => createWidget(dispatch),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget)
})

export default connect
(stateToPropertyMapper,
 propertyToDispatchMapper)
(WidgetList)
