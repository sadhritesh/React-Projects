import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Layout from './Layout.jsx'
import Login from './components/Login/Login.jsx'
import User from './components/User/User.jsx'
import { fetchData } from './components/Github/Github.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Github from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: '/about',
//         element: <AboutUs />
//       },
//       {
//         path: '/contact',
//         element: <ContactUs />
//       },
//       {
//         path: '/login',
//         element: <Login />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<AboutUs/>} />
        <Route path='contact' element={<ContactUs/>} />
        <Route path='login' element={<Login/>} />
        <Route 
            path='github' 
            element={<Github/>} 
            loader={fetchData}    
        />
        <Route path='user/:name' element={<User/>} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
