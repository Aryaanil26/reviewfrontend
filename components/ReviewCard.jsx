import React from 'react';
import {Link} from 'react-router-dom';


function ReviewCard(props) {
    const review = props.review
    return(
        <article>
            <Link to={`/reviews/${review._id}`}>
        <img className='asspect-[4/4] object-cover w-full'src={movie.thumbnail} alt="" />
        </Link>
        <h3 className='text-lg font-bold mt-2'>{review.moviename}</h3>
        <span>{review.review}</span>
    </article>
    );
}

export default ReviewCard;