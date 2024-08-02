// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import axios from 'axios';


// export async function loader({params}) {
//     const response = await axios.get(`http://localhost:3000/authors/${params.author._id}`)
//     const author = response.data
//     return{author};


   
// }


// function Author(props) {
//     const {author} = useLoaderData()
//    return (
//     <main className='container mx-auto'>
//       <section className='py-10 grid grid-cols-2 gap-5 items-center'>
//       <div>
//         <img src = {author.authorpht} alt=""/>
        
//             <h2 className='text-3*1 font-bold mb-4'>{author.authorname}</h2>
//         <span>{author.deails}</span>
//         </div>
       
//       </section>
//     </main>
      
//    );
//   } 
  
//   export default Author;