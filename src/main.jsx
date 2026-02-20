import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './home/Home.jsx'
import About from './about-us/About.jsx'
import Service from './services/Service.jsx'
import Contact from './contact-us/Contact.jsx'
import Signup from './LOGINS/Signup.jsx'
import Login from './LOGINS/Login.jsx'
import { Toaster } from 'react-hot-toast'
import Products from './products/Products.jsx'
import ProductDetails from './Details/Details.jsx'


// ← ADD THIS IMPORT (Step 1 done already?)
import { CartProvider } from './context/CartContext.jsx'   // ← New line
import Checkout from './Checkout/Checkout.jsx'
import Placeorder from './final-order/Placeorder.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about-us", element: <About/> },
      { path: "/services", element: <Service/> },
      { path: "/contact", element: <Contact/> },
      { path: "/products", element: <Products/> },
      { path: "/products/:id", element: <ProductDetails /> },
      {path:"/checkout",element :<Checkout/>},
      {path:"/placeorder",element :<Placeorder/>}

    ]
  },
  { path: "/signup", element: <Signup/> },
  { path: "/login", element: <Login/> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ← Wrap the app with HelmetProvider and CartProvider */}
   
      <CartProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </CartProvider>
   
    {/* ← End of wrap */}
  </StrictMode>
)