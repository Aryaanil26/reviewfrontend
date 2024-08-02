// import React from 'react';

// function Authors(props){
//     return(
//         <main>
//             <author>
//         </main>
//     );
// }

// export default Authors;



import React from 'react';
import AuthorCard from '../components/AuthorCard';
// import AuthorCard from '../components/AuthorCard';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';



export async function loader() {
    const response = await axios.get('http://localhost:3000/authors')
    const authors = await response.data
    return {authors}
  }

function Authors(props) {
    const {authors} = useLoaderData()
     return (
        <main>
            <section className='container mx-auto py-16'>
           <h2 className ='font-bold text-lg'>New arravial</h2>
           <div className='mt-8 grid grid-cols-4 gap-4'>
            {
                authors.map(author => {
                    return <AuthorCard
                    key={author._id}
                    author = {author}/>
                 })
             }
           </div>
           </section>
        </main>
    );
}

export default Authors;