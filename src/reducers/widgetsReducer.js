import {DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions"

const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS":
            return {
                ...state, //old state
                widgets: action.widgets //get widgets that come from server
            }
        //overrides topic's old widgets list with whats being returned from server
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case CREATE_WIDGET:
            return { //gets passed actual widget in current state, thens add new widget & returns
                widgets: [...state.widgets, action.widget],
                topicId: action.topicId
                // reducer was passed widget action here by dispatcher
            }

        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget.id === action.widget.id ?
                              action.widget : widget)
            }

        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        case "UPDATE_WIDGET_ORDER":
            return {
                ...state,
                widgets: action.updatedWidgetOrder
            }
        default:
            return state
    }
}

export default widgetReducer
