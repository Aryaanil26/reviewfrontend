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
import Books from './routes/movies';
//import About from './routes/about';
import Book, {loader as bookLoader} from './routes/movie';
import Author,{loader as authorLoader} from './routes/reviews';
import Signup from './routes/signup';
import Login from './routes/login';
import { Provider } from 'react-redux';
import store from './app/store';




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
          path:'/reviews',
          element: <Review/>,
       loader: reviewLoader 
         },
      {
        path:'/movies',
        element: <Movies/>,
      },
         {
           path:'/reviews/:review._id',
         element: <Review/>
       },
      {
        path:'/movies/:movie._Id',
        element:<Movie/>,
      loader:MovieLoader
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
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
