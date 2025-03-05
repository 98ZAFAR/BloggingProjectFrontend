import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import Blogs from './components/Blogs.jsx';
import CreateBlog from './components/CreateBlog.jsx';
import BlogDetail from './components/BlogDetail.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
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
      {
        path:"/blogs",
        element:<Blogs/>,
      },
      {
        path:"/create-blog",
        element:<CreateBlog/>,
      },
      {
        path:"/blog/:id",
        element:<BlogDetail/>,
      },
      {
        path:"/forgot-password",
        element:<ForgotPassword/>,
      },
      {
        path:"/reset-password/:resetToken",
        element:<ResetPassword/>,
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
