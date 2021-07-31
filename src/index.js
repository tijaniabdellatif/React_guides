/**
 * First component
 */
/**
 * ES6 modules
 * Importing dependencies
 */
import React from "react";
import ReactDom from 'react-dom';

/**
 * Return JSX
 *
 * @function Greeting
 */
const Greeting = () => {

return <h4>this is first component</h4>

};

/**
 * Rendering the component
 */
ReactDom.render(<Greeting />,document.getElementById('root'));



