import React from 'react';
import editWidget from "../WidgetList"

const ParagraphWidget = ({name, editing  = false, ok, widget, updateWidget, okWidget}) =>
    <div>
        {
            !editing &&
            <p>{widget.text}</p>

        }
        {/*While editing, text box appears and shows preview. */}

        { widget.editing &&
          <div>
              <h4>Edit Paragraph:</h4>
        <textarea id = "test" className ="form-control"
                  placeholder={"Paragraph text"}
                  onChange={(event) => updateWidget({
                      ...widget, text: event.target.value
                                                    })}/>
        <input className ="form-control" placeholder="Widget Name" />
              <h3>Paragraph Widget</h3>
        <h3>Preview: </h3>
        <p> {widget.text} </p>
            <span><input className ="form-control"
                         onChange={(event) => okWidget({
                                                           ...widget,
                                                           text: event.target.value
                                                       })}
                         value={widget.name}/>
                        <button className="btn btn-info float-right" onClick={() => ok(widget)}>
                            Save Widget <i className="fa fa-check-circle"/>
                        </button>
                        </span>
            </div>
        }
        </div>








export default ParagraphWidget
