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
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import BasicTable from './pages/Dashboard/Allemployee.jsx';
import BasictableAdmin from './pages/Dashboard/AllEmployeesAdmin.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskForm from './pages/Dashboard/TaskForm.jsx';
import WorkSheetPage from './pages/Dashboard/WorkSheetPage.jsx';





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
  
  
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
     { 
      path: '/dashboard/all-employees',
      element: <BasicTable></BasicTable>
    },
    {
      path: '/dashboard/admin/all-employees',
      element: <BasictableAdmin></BasictableAdmin>
    },
    {
      path: '/dashboard/worksheet',
      element: <TaskForm></TaskForm>
    },
    {
      path: '/dashboard/progress',
      element: <WorkSheetPage></WorkSheetPage>
    }
    // {
    //   path: '/payment',
    //   element:<PaymentMethod></PaymentMethod>
    // }
      
     ]
  }
]
 
  
  );
  const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  
  </AuthProvider>
   
   
  </React.StrictMode>,
)
