import React from 'react';
import {Link} from 'react-router-dom';


function MovieCard(props) {
    const movie = props.movie
    return(
        <article>
            <Link to={`/movies/${movie._Id}`}>
        <img className='asspect-[4/4] object-cover w-full'src={movie.thumbnail} alt="" />
        </Link>
        <h3 className='text-lg font-bold mt-2'>{movie.moviename}</h3>
        <span>{movie.description}</span>
    </article>
    );
}

export default MovieCard;