import React from "react";
import ReactDom from 'react-dom';
import {Books} from "./components/Books";
import './index.css';
import './style.css';



function BookList(){
    return (
        <section className="container my-12 mx-auto px-4 md:px-12">
       <Heading name="Featured List" />
            <Books />
        </section>
    )
}


const Heading = (props) =>{
    return (
        <h1 className="font-mono text-3xl subpixel-antialiased font-extrabold text-center text-red-800"> {props.name}</h1>
    );
}

ReactDom.render(<BookList />,document.getElementById('root'));



