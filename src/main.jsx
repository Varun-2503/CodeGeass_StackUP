import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Register from './Register.jsx';
import Cart from './Cart.jsx';
import ProductDetail from './ProductDetail.jsx';
import products from './Products.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />
      },
      { 
        path:"cart",
        element:<Cart />
      },
      {
        path: 'product/:productId', 
        element: <ProductDetail products={products} />, 
      },
      {
        path: "",
        element: <App />
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
