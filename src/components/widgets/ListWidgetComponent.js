import React from "react";

// import widgetTypeDropDownList from "./widgetTypeDropDownList";


class ListWidgetComponent extends React.Component {

    state = {
        listType: "unordered",
    }

    render() {
        return(

            <div>
                {
                    this.props.widget.editing &&
                    <div>
                        <select onChange={ (event) => this.props.okWidget({
                                                                              ...this.props.widget,
                                                                              type: event.target.value                  })}
                                value="widget type" name="userSelectedWidgetType">
                            <option value="Widget Type"> Widget Type </option>
                            <option value="HEADING"> Heading </option>
                            <option value="PARAGRAPH"> Paragraph </option>
                            <option value="LIST"> List </option>
                            <option value="IMAGE"> Image </option>


                        </select>

                        <button type="button" className="btn btn-success pull-right" onClick={() => this.props.okWidget({...this.props.widget})}>
                            Save
                        </button>

                        <h3> List </h3>
                        <textarea placeholder={" ​Enter one list item per line​.\n"}  className="form-control" value={this.props.widget.text}
                                  onChange={ (event) =>
                                      this.props.updateWidget({...this.props.widget, text: event.target.value })}></textarea>


                        <select onChange={ (event) => this.props.updateWidget({...this.props.widget, value: event.target.value })}
                                className={"form-control"}
                                value="list type"
                                name="userSelectedListType"
                        >
                            <option value="">  Choose List Type  </option>
                            <option value="unordered">  Unordered List  </option>
                            <option value="ordered"> Ordered List  </option>
                        </select>

                        <input placeholder="Name" className="form-control"
                               onChange={ (event) => this.props.updateWidget({...this.props.widget, name: event.target.value })}/>

                        <div>
                            <h3> Preview </h3>
                            {
                                this.props.widget.value === ("unordered") &&
                                <ul>
                                    {this.props.widget.text.split("\n").map((i, key) => {
                                        return <li key={key}>{i}</li>;
                                    })}
                                </ul>
                            }
                            {
                                this.props.widget.value === ("ordered") &&
                                <ol>
                                    {this.props.widget.text.split("\n").map((i, key) => {
                                        return <li key={key}>{i}</li>;
                                    })}
                                </ol>
                            }
                            {
                                this.props.widget.value === null &&
                                <ul>
                                    {this.props.widget.text.split("\n").map((i, key) => {
                                        return <li key={key}>{i}</li>;
                                    })}
                                </ul>
                            }
                        </div>

                        <button type="button" className="btn btn-danger pull-right"
                                onClick={() => this.props.deleteWidget(this.props.widget)}>
                            Delete
                        </button>


                    </div>
                }
                {
                    !this.props.widget.editing &&
                    <div>
                        {
                            this.props.widget.value === ("unordered") &&
                            <ul>
                                {this.props.widget.text.split("\n").map((i, key) => {
                                    return <li key={key}>{i}</li>;
                                })}
                            </ul>
                        }
                        {
                            this.props.widget.value === ("ordered") &&
                            <ol>
                                {this.props.widget.text.split("\n").map((i, key) => {
                                    return <li key={key}>{i}</li>;
                                })}
                            </ol>
                        }
                        {
                            this.props.widget.value === null &&
                            <ul>
                                {this.props.widget.text.split("\n").map((i, key) => {
                                    return <li key={key}>{i}</li>;
                                })}
                            </ul>
                        }

                    </div>

                }
            </div>

        );
    }


}

export default ListWidgetComponent










// //pass widget, if it has editing, display etc
// const ListWidget = (widget, okWidget, updateWidget, listType = ['ordered', 'unordered']) =>
//
//
//             <div>
//                 {
//                     widget.editing &&
//                     <div>
//                         <input placeholder="Name" className="form-control"
//                                onChange={(event) => updateWidget(
//                                    {...widget, name: event.target.value})}/>
//
//
//                         <button type="button" className="btn btn-success float-right"
//                                 onClick={() => okWidget(widget)}>
//                             Save
//                         </button>
//
//                         {/*<button className="btn btn-info float-right" onClick={() => ok(widget)}>*/}
//                         {/*    Save Widget <i className="fa fa-check-circle"/>*/}
//                         {/*</button>*/}
//
//                     <h4>List: </h4>
//                     <select onChange={ (event) => updateWidget({...widget, value: event.target.value })}
//                     className="form-control"
//                     value="list type"
//                     name="selectListType"
//                     >
//                     <option value=""> Select List Type</option>
//                     <option value="unordered"> Unordered List</option>
//                     <option value="ordered"> Ordered List</option>
//                     </select>
//
//                         {
//                             !widget.editing &&
//
//                             <div>
//                                 <h3> Preview </h3>
//                                 {
//                                     widget.value === ("unordered") &&
//
//                                     <ul>
//                                         <li> {widget.text}</li>
//                                         <li> list item</li>
//                                         <li> list item</li>
//                                     </ul>
//
//                                 }
//                                 {
//                                     widget.value === ("ordered") &&
//                                     <ol>
//                                         <li> {widget.text}</li>
//                                         <li> list item</li>
//                                         <li> list item</li>
//                                     </ol>
//                                 }
//
//                             </div>
//                         }
//
//                     </div>
//                 }
//
//             </div>
//
//
//
// export default ListWidget
