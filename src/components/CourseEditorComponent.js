/*
Create a React component called CourseEditor, renders a course instance selected from the
 CourseGrid or CourseTableComponent component (CourseRowComponents will map to edit when clicked on).
 Modules, Lessons will be static.
 */
//using objects to create layers of abstraction
//building an aggregation of multiple subcomponents (ie. modulelist, lessonTabs)
import React from "react";
import {findCourseById} from "../services/CourseService";

export default class CourseEditorComponent extends React.Component {

    // state = {
    //     course: {
    //         _id: "",
    //         title: ""
    //     }
    // }

    //Route creates properties and passes it to CourseEditor!
    //used to render titles since courseId is a props
    componentDidMount() {
        console.log(this.props)
    }

    //route passes ID to course editor
    // componentDidMount() {
    //     this.props.findCourseById(this.props.match.params.courseId)
    //     this.props.findModulesForCourse(this.props.match.params.courseId)
    //     // console.log(this.props)
    //     // findCourseById(this.props.match.params.courseId)
    //     //     .then(actualCourse => this.setState({
    //     //                                             course: actualCourse
    //     //                                         }))
    // }

    render() {
        return (
            <div class="container">
                <h1>Course Editor</h1>


                <div className="row">
                    <div className="col-4">
                        <ul class="list-group wbdv-module-list">
                            <li class="list-group-item active wbdv-module-item">Module 1: Intro &
                                Review
                                <i class="fas fa-times float-right wbdv-module-item-delete-btn "></i>
                            </li>
                            <li class="list-group-item wbdv-module-item">Module 2: Divide & Conquer
                                <i class="fas fa-times float-right wbdv-module-item-delete-btn"></i>
                            </li>
                            <li class="list-group-item wbdv-module-item">Module 3 :Dynamic
                                Programming
                                <i class="fas fa-times float-right wbdv-module-item-delete-btn"></i>
                            </li>
                            <li class="list-group-item wbdv-module-item"> Module 4: Greedy
                                Algorithms
                                <i class="fas fa-times float-right wbdv-module-item-delete-btn"></i>
                            </li>
                            <li class="list-group-item wbdv-module-item">Module 5: Graph
                                Algorithms<i
                                    class="fas fa-times float-right wbdv-module-item-delete-btn"></i>
                            </li>

                            <li class="list-group-item">New Module<i
                                class="fas fa-plus float-right wbdv-module-item-delete-btn"></i>
                            </li>
                        </ul>
                    </div>

                    <div className="col-8">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a href="#" className="nav-link wbdv-lesson-tabs">Lesson 1</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active wbdv-lesson-tabs">Lesson
                                    2</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link wbdv-lesson-tabs">Lesson 3</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link wbdv-lesson-add-btn">Add Lesson</a>
                            </li>
                        </ul>

                        <br/>

                        <ul className="nav nav-pills wbdv-topic-pill-list">
                            <li className="nav-item wbdv-topic-pill">
                                <a href="#" className="nav-link">Recurrence Relations</a>
                            </li>
                            <li className="nav-item wbdv-topic-pill">
                                <a href="#" className="nav-link active">Stable Matching</a>
                            </li>
                            <li className="nav-item wbdv-topic-pill">
                                <a href="#" className="nav-link">Asymptotic Order of Growth</a>
                            </li>
                            <li className="nav-item wbdv-topic-pill">
                                <a href="#" className="nav-link wbdv-topic-add-btn"><i
                                    className="far fa-plus fa-.5x"></i> Add
                                    topic</a></li>
                        </ul>

                        <br/>

                        <div className="form-group">

                            <h3>
                                Heading Widget
                                <span className="float-right">
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-up"></i>
                        </a>
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-down"></i>
                        </a>
                        <select>
                            <option>Heading</option>
                            <option>Textbook</option>
                            <option>Document</option>
                            <option>Slides</option>
                        </select>
                        <a className="btn btn-warning"><i className="fas fa-trash"></i></a>
                            </span>
                            </h3>

                            <input className="form-control" placeholder="enter paragraph text"/>

                            <select className="form-control">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                                <option>Heading 3</option>
                                <option>Heading 4</option>
                                <option>Heading 5</option>
                            </select>

                            <input className="form-control"
                                   title="Name your widget" placeholder="Widget Name"/>
                        </div>

                        <div className="form-group">
                            <h3>
                                Paragraph Widget
                                <span className="float-right">
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-up"></i>
                        </a>
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-down"></i>
                        </a>
                        <select>
                            <option>Paragraph</option>
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                        </select>
                        <a className="btn btn-warning"><i className="fas fa-trash"></i></a>
                            </span>
                            </h3>


                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Enter text</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                          rows="3"></textarea>
                            </div>
                        </div>


                       <div class = "form-group">

                            <h3>
                                List Widget
                                <span className="float-right">
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-up"></i>
                        </a>
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-down"></i>
                        </a>
                        <select>
                            <option>List</option>
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>Image</option>
                        </select>
                        <a className="btn btn-warning"><i className="fas fa-trash"></i></a>
                            </span>
                            </h3>
                       </div>


                        <div className="form-group">
                            <h3>
                                Image Widget
                                <span className="float-right">
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-up"></i>
                        </a>
                        <a className="btn btn-info">
                            <i className="fas fa-arrow-down"></i>
                        </a>
                        <select>
                            <option>Image</option>
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                        </select>
                        <a className="btn btn-warning"><i className="fas fa-trash"></i></a>
                            </span>
                            </h3>
                        </div>

                    </div> {/*   column 8 */}


                </div>


            </div>
        )

    }

}
