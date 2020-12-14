import React from "react";

const ImageWidget = (
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
                <img className={"card-img-top"}
                     src={widget.src} alt={"No Image Available"}/>
            </div>

        }

        {
            widget.editing &&
            <div>

                <select className = "float-right" onChange={(event) => okWidget({
                                                          ...widget,
                                                          type: event.target.value
                                                      })}
                        value="widget type" name="userSelectedWidgetType">
                    <option value="Widget Type"> Widget Type</option>
                    <option value="HEADING"> Heading</option>
                    <option value="PARAGRAPH"> Paragraph</option>
                    <option value="LIST"> List</option>
                    <option value="IMAGE"> Image</option>

                </select>

                <button type="button" className="btn btn-success pull-right"
                        onClick={() => okWidget(widget)}>
                    <i className = "fa fa-check"></i>
                </button>

                <h3> Image </h3>
                {/*enter in location, renders image in widget on browser*/}
                <textarea placeholder={"Add Image Source"} value={widget.src}
                          className="form-control"
                          onChange={(event) =>
                              updateWidget({...widget, src: event.target.value})}></textarea>
                <input placeholder="Name" className="form-control"
                       onChange={(event) =>
                           updateWidget({...widget, name: event.target.value})}/>

                <div>
                    <h3> Preview </h3>
                    <img className={"card-img-top image-preview"}
                         src={widget.src} alt={"No Image Available"}/>
                </div>

                <button type="button" className="btn btn-danger pull-right"
                        onClick={() => deleteWidget(widget)}>
                    <i className = "fa fa-trash"></i>
                </button>


            </div>
        }

    </div>

export default ImageWidget
