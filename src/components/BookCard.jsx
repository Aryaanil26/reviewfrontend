import React from 'react';
import {Link} from 'react-router-dom';


function BookCard(props) {
    const book = props.book
    return(
        <article>
            <Link to={`/books/${book._Id}`}>
        <img className='asspect-[4/4] object-cover w-full'src={book.thumbnail} alt="" />
        </Link>
        <h3 className='text-lg font-bold mt-2'>{book.title}</h3>
        <span>{book.description}</span>
    </article>
    );
}

export default BookCard;