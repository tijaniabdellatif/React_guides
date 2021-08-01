import React from "react";
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faShoppingCart,faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import './style.css';
import dataBook from "./data/data";


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
        <article className="flex flex-wrap -mx-1 lg:-mx-4" onMouseOver={()=>{
             console.log("This is a card article");
        }
        }>

            {
               dataBook.map((book)=>{
                   return(
                       <Card key={book.id} book={book}></Card>
                   );
               })
            }
        </article>
    );
}

const Heading = (props) =>{
    return (
        <h1 className="font-mono text-3xl subpixel-antialiased font-extrabold text-center text-red-800"> {props.name}</h1>
    );
}

const Card = (props) => {

    /*
    *
    * Basic events
    * */

    const clickHandler = (e) =>{

        console.log(e);
    }
    const getAuthor = (author) => {

        console.log(author);
    }

    /*Destructuring*/
    /**/
    console.log(props);

    const {url,title,date,author,authorImage,price} = props.book;
    //console.log(props);
    return(
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src={url} />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline" style={{color:'red'}} href="#">
                            {title}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {date}
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src={authorImage} />
                        <p className="ml-2 text-sm">
                            {author.toUpperCase()}
                        </p>

                        <p>{/*  let x = 10 is not allowed */}</p>
                        <p> {/* 6+6 is allowed*/}</p>

                        <p className="ml-2 text-sm">
                            Price : <span className="text-red-800"
                                          style={{color:"#617D98",fontSize:"0.75rem",marginTop:"0.25rem"}}>{price}</span>
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <Font name={faHeart}/>
                    </a>
                </footer>
                <div className='text-center my-7'>
                    <button onClick={clickHandler}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Add to cart <span>
                         <Font name={faShoppingCart}/>
                    </span>
                    </button>

                    <button onClick={() => getAuthor(author)}
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Author <span>
                         <Font name={faPersonBooth}/>
                    </span>
                    </button>
                </div>

            </div>

        </div>

    );
}

const Font = (props) => {


    return (<FontAwesomeIcon icon={props.name} />);
}

ReactDom.render(<BookList />,document.getElementById('root'));



