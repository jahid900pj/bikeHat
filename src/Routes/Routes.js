import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellars";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Login from "../Pages/Form/Login/Login";
import SignUp from "../Pages/Form/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import SelectedCategoryBikes from "../Pages/SelectedCategoryBikes/SelectedCategoryBikes";
import AdminRoute from "./PrivateRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./PrivateRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/bikes/:id', element: <PrivateRoute><SelectedCategoryBikes></SelectedCategoryBikes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/bikeCollections/${params.id}`)
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/blogs', element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard', element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct', element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProducts', element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allSellers', element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers', element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    },
    {
        path: '*', element: <NotFound></NotFound>
    }

])