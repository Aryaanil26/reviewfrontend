import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './routes/root';
import ErrorPage from './error-page';
import Home, {loader as homeLoader} from './routes/home';
//import Contact from './routes/contact';
import Books from './routes/books';
//import About from './routes/about';
import Book, {loader as bookLoader} from './routes/book';
import Author,{loader as authorLoader} from './routes/authors';
import Signup from './routes/signup';
import Login from './routes/login';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        loader: homeLoader
      },
         {
          path:'/authors',
          element: <Author/>,
       loader: authorLoader 
         },
      {
        path:'/books',
        element: <Books/>,
      },
         {
           path:'/authors/:author._id',
         element: <Author/>
       },
      {
        path:'/books/:book._Id',
        element:<Book/>,
      loader:bookLoader
      },
      {
        path:'/signup',
      element: <Signup/>
    },
    {
      path:'/login',
      element: <Login/>
    }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
