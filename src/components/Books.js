import React from "react";
import {Card} from "./Card";
import {dataBook} from '../data/data';


export const Books = () => {
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