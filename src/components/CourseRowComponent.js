// row inside of a table, we are turning into a compoment

import React from "react";
//creating class based (not function based)

const CourseRowComponent = ({item}) =>
    <tr>
        <td>{item.title}</td>
        <td>{item.owner}</td>
        <td>{item.lastOpened}</td>
        <td>
            <button className="btn-primary">Remove</button>
            <button className="btn-primary">Delete</button>
        </td>
    </tr>

export default CourseRowComponent

