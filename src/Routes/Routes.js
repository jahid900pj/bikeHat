import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Form/Login/Login";
import SignUp from "../Pages/Form/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import SelectedCategoryBikes from "../Pages/SelectedCategoryBikes/SelectedCategoryBikes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/bikes/:id', element: <PrivateRoute><SelectedCategoryBikes></SelectedCategoryBikes></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bikeCollections/${params.id}`)
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/login', element: <Login></Login>
            }
        ]
    },

])