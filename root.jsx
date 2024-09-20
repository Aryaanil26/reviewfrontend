import React  from 'react';
import { Link, Outlet } from 'react-router-dom';

function Root(props) {
    return (
        <>
        <header className='shadow-lg h-28'>
            <div className='container mx-auto flex flex-row justify-between items-center h-full'>
            <h1>BookMania</h1>
            <nav>
                <ul className='flex flex-row gap-6'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Reviews'}>Authors</Link>
                    </li>
                    <li>
                        <Link to={'/movies'}>movies</Link>
                   </li>
                 
                </ul>
            </nav>
            </div>
        </header> 
        <Outlet/>
        <footer></footer>

        </>
       
    )
}

export default Root;