import React from "react";
import widgets from "../WidgetList"
/*
Widgets will handle if edit rendering.
 */
//pass widget, if it has editing, display etc
const HeadingWidget = ( {widget, updateWidget, ok, editing, okWidget}) =>
    <div>
        { //if widget is being edited, display the following
            widget.editing &&
            <div>
                <select onChange={ (event) =>
                    updateWidget({...widget, size: event.target.value })}
                        className="form-control">
                    <option value="1"> Heading 1</option>
                    <option value="2"> Heading 2 </option>
                    <option value="3"> Heading 3</option>
                    <option value="4">Heading 4</option>
                    <option value="5">Heading 5</option>
                    <option value="6">Heading 6</option>
                </select>
                <input className="form-control" placeholder="Name"/>

                <div>
                    <span>
                        <input  className="form-control" placeholder="Heading Text"
                                onChange={ (event) =>
                                    updateWidget({...widget, text: event.target.value })}/>
                        <button className="btn btn-info float-right" onClick={() => ok(widget)}>
                            Save Widget <i className="fa fa-check-circle"/>
                        </button>
                        </span>
                </div>


            </div>
        }
        { //while widget is not being edited, display header text with selected header value


            !widget.editing &&
         <div>
             {
                 widget.size === 1 &&
                 <h1>{widget.text} </h1>
             }
             {
                 widget.size === 2 &&
                 <h2>{widget.text}  </h2>
             }
             {
                 widget.size === 3 &&
                 <h3>{widget.text} </h3>
             }
             {
                 widget.size === 4 &&
                 <h4>{widget.text}</h4>
             }
             {
                 widget.size === 5 &&
                 <h5>{widget.text}</h5>
             }
             {
                 widget.size === 6 &&
                 <h6>{widget.text}</h6>
             }





         </div>
        }
    </div>

export default HeadingWidget
