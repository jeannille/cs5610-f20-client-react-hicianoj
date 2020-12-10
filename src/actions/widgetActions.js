/*
widgetActions call widgetService functions, then sends to dispatcher.
sends to reducer (reducer waites for action, ie CREATE_WIDGET,
//reducer runs CREATE_ACTION condition, which returns updated
//state from widgets
 */
import widgetService from "../services/WidgetService";

export const DELETE_WIDGET = "DELETE_WIDGET"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"

//these actions propertyToDispatchMapper
export const editWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, {
        ...widget, editing: true
    }).then(status =>
                dispatch({
                             type: "UPDATE_WIDGET",
                             widget: {...widget, editing: true}
                         }))
//notify reducer that widgetList component sent

export const okWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget.id, {...widget, editing: false})
        .then(status => dispatch(
            {type: UPDATE_WIDGET, widget: {...widget, editing: false}}));


//gets handed to widgetsReducer, and case will be "UPDATE_WIDGET"
export const updateWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget});

//reach out to widgetService and report back,
//this function is called in WidgetList first
//reaches out to widgetService (fetch from WidgetService file)
// out to server for state of widgets list
//.then once response is back, dispatch is called / reducer
//and DELETE WIDGET action is taken
export const deleteWidget = (dispatch, widget) =>
    widgetService.deleteWidget(widget.id)
        .then(status => dispatch({
                                     type: "DELETE_WIDGET",
                                     widget: widget
                                 })
        )

//contact widget, get response, get widgets from server, call dispatch and notify
//reducers of array state of widgets, then reducer notifies everyone
//itll propigate the store, to provider, to container/components

//we call the dispatch function here instead of in WidgetList dispatchToPropertyMapper
//all the dispatch function does is call the reducer function
// and passes it an action (type: )
export const createWidget = (dispatch, topicId) =>
    widgetService.createWidget(topicId)
        .then(widget => dispatch({
                                     type: CREATE_WIDGET,
                                     widget: widget,
                                     topicId: topicId
                                 })) // send widget to reducer

export const updateWidgetOrder = (dispatch, newWidgets, topicId) =>
    widgetService.updateWidgetOrder(newWidgets, topicId)
        .then(responseNewWidgetOrder => dispatch({
                                                     type: "UPDATE_WIDGET_ORDER",
                                                     responseNewWidgetOrder
                                                 }));
