import React from 'react';
import MovieCard from '../components/MovieCard';
import { useLoaderData } from 'react-router-dom';



export async function loader() {
    const response = await fetch('http://localhost:3000/movies')
    const movies = await response.json()
    return {movies}
  }

function Home(props) {
    const {movies} = useLoaderData()
     return (
        <main>
            <section className='container mx-auto py-16'>
           <h2 className ='font-bold text-lg'>New arravial</h2>
           <div className='mt-8 grid grid-cols-4 gap-4'>
            {
               movies.map(movie => {
                    return <MovieCardCard
                    key={movie._Id}
                    movie = {movie}/>
                 })
             }
           </div>
           </section>
        </main>
    );
}

export default Home;