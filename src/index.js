import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Category from './Pages/category/Category';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },

    {
        path: "category",
        element: <Category/>,
      },

  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
  
);


