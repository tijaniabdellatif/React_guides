/* Here is the data */

const timestamp = Date.now();
const date = new Date(timestamp);
const dateString = date.toLocaleString('en-US',{
    weekday:'short',
    day :'numeric',
    year:'numeric',
    month : 'long',
});


const dataBook = [{

    id:1,
    title:"American Marxism",
    author:"Mark R.Levin",
    date : dateString,
    price : 150 + ' MAD',
    authorImage : "https://picsum.photos/32/32/?random",
    url: 'https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg'

},{
    id:2,
    title:"It Ends with Us",
    author:"Paperback",
    date : dateString,
    price : 120 + ' MAD',
    authorImage : "https://picsum.photos/32/32/?random",
    url: 'https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._SX320_BO1,204,203,200_.jpg'

},{

    id:3,
    title:"Billy Summers Hardcover",
    author:"Stephen King",
    date :dateString,
    price : 190 + ' MAD',
    authorImage : "https://picsum.photos/32/32/?random",
    url: 'https://images-na.ssl-images-amazon.com/images/I/51EU9naCcwL._SX325_BO1,204,203,200_.jpg'
}];

export default dataBook;