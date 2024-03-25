import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import Root from './Components/Root/Root.jsx';
import PagesRead from './Components/PagesRead/PagesRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/read",
        element: <PagesRead></PagesRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      

    <RouterProvider router={router} />
  </>,
)
