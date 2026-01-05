import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import { path } from 'framer-motion/client'

import Home from './home/Home.jsx'
import About from './about-us/About.jsx'
import Service from './services/Service.jsx'
import Contact from './contact-us/Contact.jsx'
import Signup from './LOGINS/Signup.jsx'
import Login from './LOGINS/Login.jsx'
import { Toaster } from 'react-hot-toast'
import Products from './products/Products.jsx'

const router = createBrowserRouter ([
  {
    
        path: "/",
        element: <Layout/>,
        children:[
          {
            path: "/",
            element: <Home/>
          },{
            path:"/about-us",
            element: <About/>
          },{
            path:"/services",
            element: <Service/>
          },{
            path:"/contact",
            element: <Contact/>
          },{
            path:"/products",
            element:<Products/>
          }
          
        ]
      }
      ,{
          path:"/signup",
          element: <Signup/>
        },{
          path:"/login",
          element: <Login/>
        }
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} /> 
   <RouterProvider router={router}/>
  </StrictMode>,
)
