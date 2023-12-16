import React from "react";
import ReactDOM from "react-dom";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const mappingFunction = (item, index) => {
    return   <li className="list-group-item" key={index}>{item}</li>
};





// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const content = (<ul className="list-group m-5">{planets.map(mappingFunction)}</ul>);

ReactDOM.render(content, document.querySelector("#myDiv"));
