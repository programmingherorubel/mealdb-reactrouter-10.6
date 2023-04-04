import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';




const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'products',element:<Products /> 
            },
            {
                path:'product',
                element:<Product/>
            },
            {
                path:'/product/:productid',
                element:<SingleProduct/>,
                loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productid}`)
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
