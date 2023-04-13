import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import Phones from './components/Phones/Phones'
import Phone from './components/Phones/Phone'
import SinglePhone from './components/Phones/SinglePhone'

import AllPhones from './components/Phones/AllPhones'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:5001/phones"),
        children: [
          {
            path: "/phones/phone/:id",
            element: <Phone />,
            loader: ({ params }) => {
              console.log("phone details every time");
              return fetch(`http://localhost:5001/phone/${params.id}`);
            },
          },
        ],
      },
      {
        path: "/all-phones",
        element: <AllPhones />,
        loader: () => {
          console.log('all phone loaded');
          return fetch("http://localhost:5001/phones");
        },
        children:[
          {
            path:"/all-phones/phone/:id",
            element:<SinglePhone />
          }
        ]
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <RouterProvider router={router} />
   
  </React.Fragment>,
)
