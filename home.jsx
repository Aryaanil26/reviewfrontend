import React from 'react';
import BookCard from '../components/BookCard';
import { useLoaderData } from 'react-router-dom';



export async function loader() {
    const response = await fetch('http://localhost:3000/books')
    const books = await response.json()
    return {books}
  }

function Home(props) {
    const {books} = useLoaderData()
     return (
        <main>
            <section className='container mx-auto py-16'>
           <h2 className ='font-bold text-lg'>New arravial</h2>
           <div className='mt-8 grid grid-cols-4 gap-4'>
            {
                books.map(book => {
                    return <BookCard
                    key={book._Id}
                    book = {book}/>
                 })
             }
           </div>
           </section>
        </main>
    );
}

export default Home;