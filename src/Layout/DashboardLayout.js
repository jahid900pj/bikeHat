import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-2xl mr-5">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                        {/* <li><Link to='/dashboard/allUsers'>All Users</Link></li> */}
                        {/* {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctors'>Manage Doctor</Link></li>
                            </>
                        } */}


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;