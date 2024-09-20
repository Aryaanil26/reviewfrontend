import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';


export async function loader({params}) {
    const response = await axios.get(`http://localhost:3000/books/${params.movie._Id}`)
    const movie = response.data
    return{movie}
}


function Movie(props) {
    const {book} = useLoaderData()
   return (
    <main className='container mx-auto'>
      <section className='py-10 grid grid-cols-2 gap-5 items-center'>
      <div>
        <img src = {Movie.thumbnail} alt=""/>
        
            <h2 className='text-3*1 font-bold mb-4'>{movie.moviename}</h2>
        <span>{Movie.description}</span>
        </div>
       
      </section>
    </main>
      
   );
  } 
  
  export default Movie;