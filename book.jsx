import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';


export async function loader({params}) {
    const response = await axios.get(`http://localhost:3000/books/${params.book._Id}`)
    const book = response.data
    return{book}


    // const response =  await fetch('http://localhost:3000/books/${params.bookId}')
    // const book = await response.json()
    // return {book}
}


function Book(props) {
    const {book} = useLoaderData()
   return (
    <main className='container mx-auto'>
      <section className='py-10 grid grid-cols-2 gap-5 items-center'>
      <div>
        <img src = {book.thumbnail} alt=""/>
        
            <h2 className='text-3*1 font-bold mb-4'>{book.title}</h2>
        <span>{book.description}</span>
        </div>
       
      </section>
    </main>
      
   );
  } 
  
  export default Book;