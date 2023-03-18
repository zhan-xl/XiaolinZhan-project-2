import React from 'react';
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import './Style.css';
import Home from "./Home";
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Normal from "./Normal";
import Difficult from "./Difficult";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'normal',
    element: <Normal />,
  },
  {
    path: 'difficult',
    element: <Difficult />,
  }
  ])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);