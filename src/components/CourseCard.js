/*
The CourseGrid component should be responsive.
The number of grid columns should respond to the size of the screen
 */
import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export default class CourseCard extends React.Component {
    render() {
        return (

            <div className="card" styles="width=200rem">
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h6 className="card-title">{this.props.course.title}</h6>
                    <p className="card-text">Description of course.</p>
                    {/*<a href="/edit" className="btn btn-primary">More...</a>*/}
                    <Link className="btn btn-primary"
                          onClick={this.props.selectCourse}
                          to={`/edit/${this.props.course.id}`}>
                        More...
                    </Link>
                </div>
            </div>
        )
    }
}

