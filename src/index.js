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

return (
    <div className="heading">
        <Heading />
        <h4>this is first component</h4>
        <Heating />
    </div>
    );

};

const Heating = () => {

    return React.createElement('div',{},React.createElement('h1',{},'A title inside a div'));

};

const Heading = () => {

    return(
<React.Fragment>
    <section>

        <article>
            <h3>Logo</h3>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </article>
    </section>
</React.Fragment>
        );

}

/**
 * Rendering the component
 */
ReactDom.render(<Greeting />,document.getElementById('root'));



