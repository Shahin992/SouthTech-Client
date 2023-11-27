import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import HomePage from './Home/HomePage/HomePage.jsx';
import About from './pages/About/About.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import AuthProvider from './Firebase/AuthProvider/AuthProvider.jsx';
import Login from './pages/Login/Login.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element : <About></About>
      },
      {
        path: '/contact',
        element: <ContactPage></ContactPage>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    
    ]
  
  
  }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
   
   
  </React.StrictMode>,
)
