
import React from "react";
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import './style.css';

function BookList(){

    return (
        <section className="container my-12 mx-auto px-4 md:px-12">
       <Heading name="Featured List" />

            <Books />
            <Books />

        </section>
    )
}

const Heading = (props) =>{
    return (
        <h1 className="font-mono text-3xl subpixel-antialiased font-extrabold text-center text-red-800"> {props.name}</h1>
    );


}

const Books = () => {
    return (

        <article className="flex flex-wrap -mx-1 lg:-mx-4">
            <Card />
            <Card />
            <Card />
        </article>

    );
}

const Card = () => {

    return(

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-lg">
                 <Image />
                 <Description />
                <Footer />
            </div>
        </div>

    );
}


const Image = () => {

    return(
        <a href="#">
            <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
        </a>
    );
}


const Description = () => {
    return (
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg" >
                <a className="no-underline hover:underline" style={{color:'red'}} href="#">
                    Article Title
                </a>
            </h1>
            <p className="text-grey-darker text-sm">
                11/1/19
            </p>
        </header>
    );
}

const Footer = () => {

    return (
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a className="flex items-center no-underline hover:underline text-black" href="#">
                <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                <p className="ml-2 text-sm">
                    Author Name
                </p>
                <p className="ml-2 text-sm">
                    Price : <span className="text-red-800"
                                  style={{color:"#617D98",fontSize:"0.75rem",marginTop:"0.25rem"}}>120</span>
                </p>
            </a>
            <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                <span className="hidden">Like</span>
               <Font/>
            </a>
        </footer>
    );
}

const Font = () => {

    return (<FontAwesomeIcon icon={faHeart} />);
}


ReactDom.render(<BookList />,document.getElementById('root'));



