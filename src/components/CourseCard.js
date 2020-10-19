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

            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Card text.</p>
                    <a href="/edit" className="btn btn-primary">More...</a>
                    {/*<Link className="btn btn-primary"*/}
                    {/*      onClick={() => selectCourse(course)}*/}
                    {/*      to={`/course/edit/${course.id}`}>*/}
                    {/*    More...*/}
                    {/*</Link>*/}
                </div>
            </div>
        )
    }
}

