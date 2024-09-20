import React from 'react';
import ReviewCard from '../components/ReviewCard';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';



export async function loader() {
    const response = await axios.get('http://localhost:3000/reviews')
    const review = await response.data
    return {reviews}
  }

function Reviews(props) {
    const {reviews} = useLoaderData()
     return (
        <main>
            <section className='container mx-auto py-16'>
           <h2 className ='font-bold text-lg'>New arravial</h2>
           <div className='mt-8 grid grid-cols-4 gap-4'>
            {
                reviews.map(review => {
                    return <reviewCard
                    key={review._id}
                    review = {review}/>
                 })
             }
           </div>
           </section>
        </main>
    );
}

export default Reviews;