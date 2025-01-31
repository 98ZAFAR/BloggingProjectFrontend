import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/signup",
        element:<Signup/>,
      },
      {
        path:"/signin",
        element:<Signin/>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
