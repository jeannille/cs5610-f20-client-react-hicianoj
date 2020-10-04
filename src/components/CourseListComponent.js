import React from "react";

//declare a function, that by concevtion, that wil hav same name as file
//returns an html item

//array of courses
const courses = [
    {
        _id: "1",
        title: "CS5610 - Web Development",
        //add properties
        owner: "Ladrian",
        lastOpened: "10/02/20"
    },
    {
        _id: "2",
        title: "CS5008",
        owner: "Ladrian",
        lastOpened: "10/02/20"
    },
    {
        _id: "3",
        title: "CS5001",
        owner: "Ladrian",
        lastOpened: "10/02/20"
    },
]

//implicit version of function() { etc} return etc
//grabs and deconstricts CourseListComponent object, and extracts desired fields
//value of keys, gets bound by the original obj, becomes local value
//function here, takes one large argument, and parses, order doesnt matter
//theyre being bound by their name
const CourseListComponent = ({instructor, term}) =>
    //{} notifies that  this is an expression that needs to be evaluated 58:17
//wrap in an outer div to be able to grab as one component 1:01
    <div>
        <h1>Course List (Professor: {instructor}) {term}</h1>
        {/*can't use keyword 'class' because its a key word in javascript E6
            so that keywords don't collide, JSX forces us to use differemt tokens ie. style, for*/}
        <table className="table">
            {
                //when maps calls a function, it passes 2 args to
                // map  iterates over the array elements, as it iterates it calls a dunction for
                // every single item as it iterates every single itme
                //     take function as argument, whatever the function returns, oit conacates all
                // the oupts into one big string
                courses.map(item =>
                                <CourseRowComponent item={item}/>
                )
            }
        </table>
    </div>

// you can decalre at most one default

export default CourseListComponent