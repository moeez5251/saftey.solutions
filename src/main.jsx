import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Imports from './imports/imports.jsx'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import { path } from 'framer-motion/client'
import Layout from './layout/Layout.jsx'
import Home from './home/home.jsx'
import About from './about-us/About.jsx'
import Service from './services/service.jsx'


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
          }
        ]
      }
    
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
