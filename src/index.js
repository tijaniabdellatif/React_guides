import React from "react";
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import './style.css';

const timestamp = Date.now();
const date = new Date(timestamp);
const dateString = date.toLocaleString('en-US',{
    weekday:'short',
    day :'numeric',
    year:'numeric',
    month : 'long',
});

//Set up data
const book = {
    title:"American Marxism",
    author:"Mark R.Levin",
    date : dateString,
    price : 150 + ' MAD',
    authorImage : "https://picsum.photos/32/32/?random",
    url: 'https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg'
};

const book1 = {
    title:"It Ends with Us",
    author:"Paperback",
    date : dateString,
    price : 120 + ' MAD',
    authorImage : "https://picsum.photos/32/32/?random",
    url: 'https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._SX320_BO1,204,203,200_.jpg'
};

const book2 = {
    title:"Billy Summers Hardcover",
    author:"Stephen King",
    date :dateString,
    price : 190 + ' MAD',
    authorImage : "https://picsum.photos/32/32/?random",
    url: 'https://images-na.ssl-images-amazon.com/images/I/51EU9naCcwL._SX325_BO1,204,203,200_.jpg'

}


/**/
function BookList(){
    return (
        <section className="container my-12 mx-auto px-4 md:px-12">
       <Heading name="Featured List" />
            <Books />
        </section>
    )
}


const Books = () => {
    return (
        <article className="flex flex-wrap -mx-1 lg:-mx-4">
            <Card
                title={book.title}
                price={book.price}
                author={book.author}
                date={book.date}
                url={book.url}
                authorIma={book.authorImage} />
            <Card
                title={book1.title}
                price={book1.price}
                author={book1.author}
                date={book1.date}
                url={book1.url}
                authorIma={book1.authorImage}/>
            <Card
                title={book2.title}
                price={book2.price}
                author={book2.author}
                date={book2.date}
                url={book2.url}
                authorIma={book2.authorImage}/>
        </article>
    );
}

const Heading = (props) =>{
    return (
        <h1 className="font-mono text-3xl subpixel-antialiased font-extrabold text-center text-red-800"> {props.name}</h1>
    );
}

const Card = (props) => {

    console.log(props);
    return(
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src={props.url} />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg" >
                        <a className="no-underline hover:underline" style={{color:'red'}} href="#">
                            {props.title}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {props.date}
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src={props.authorIma} />
                        <p className="ml-2 text-sm">
                            {props.author.toUpperCase()}
                        </p>
                        <p>{/*  let x = 10 is not allowed */}</p>
                        <p> {/* 6+6 is allowed*/}</p>

                        <p className="ml-2 text-sm">
                            Price : <span className="text-red-800"
                                          style={{color:"#617D98",fontSize:"0.75rem",marginTop:"0.25rem"}}>{props.price}</span>
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <Font/>
                    </a>
                </footer>
            </div>
        </div>

    );
}

const Font = () => {

    return (<FontAwesomeIcon icon={faHeart} />);
}


/*
*
*
* Component spliting
* const Image = () => {

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
* */
ReactDom.render(<BookList />,document.getElementById('root'));



