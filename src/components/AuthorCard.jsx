import React from 'react';
import {Link} from 'react-router-dom';


function AuthorCard(props) {
    const author = props.author
    return(
        <article>
            <Link to={`/authors/${author._id}`}>
        <img className='asspect-[4/4] object-cover w-full'src={author.authorpht} alt="" />
        </Link>
        <h3 className='text-lg font-bold mt-2'>{author.authorname}</h3>
        <span>{author.details}</span>
    </article>
    );
}

export default AuthorCard;