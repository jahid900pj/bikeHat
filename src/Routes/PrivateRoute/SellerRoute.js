import useSeller from "../../hooks/useSeller";

const { useContext, useState } = require("react");
const { Navigate, useLocation } = require("react-router-dom");
const { AuthContext } = require("../../Context/AuthProvider");
const { default: Loading } = require("../../Pages/Shared/Loading/Loading");

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user)
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    let location = useLocation()

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;