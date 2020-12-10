import React from "react";

/*
Widgets will handle if edit rendering.
 */
//pass widget, if it has editing, display etc
const ImageWidget = () =>
    <div>
        <h1>Image Widget h1</h1>

        <h3> Preview </h3>
        <img className={"card-img-top wbdv-image-widget-preview"}
             src="rohit-unsplash.jpg" alt={"No Image Available"}/>
    </div>

export default ImageWidget
