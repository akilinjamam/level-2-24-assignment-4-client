import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Products from "../components/products/Products";
import Layout from "../components/layout/Layout";
import ProductDetails from "../components/productDetails/ProductDetails";
import Checkout from "../components/checkout/Checkout";
import Cart from "../components/cart/Cart";
import Dashboard from "../components/dashboard/Dashboard";
import DashProduct from "../components/dashboard/dashProductList/DashProduct";
import DashAddProduct from "../components/dashboard/dashAddProduct/DashAddProduct";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home/></Layout>
    },
    {
        path: '/products',
        element: <Layout><Products/></Layout>
    },
    {
        path: '/productDetail/:id',
        element: <Layout><ProductDetails/></Layout>
    },
    {
        path: '/checkout',
        element: <Layout><Checkout/></Layout>
    },
    {
        path: '/cart/:id',
        element: <Layout><Cart/></Layout>
    },
    {
        path: '/dashboard',
        element: <Layout><Dashboard/></Layout>,
        children: [
            { index: true, element: <DashProduct/> },
            {
                path: 'addProduct',
                element: <DashAddProduct/>
            }
        ]
    },
])