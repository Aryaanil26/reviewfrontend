
import React from 'react';
import SignupForm  from '../components/SignupForm'

function Signup(props){
    return(
        <main className='container mx-auto py-10'> 
          <section className=''>
          <h2 className='text-3x1 font-bold'>Signup</h2>
          <SignupForm/>
          </section>
        </main>
    );
}

export default Signup;