import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {

            })
            .catch(err => console.log(err))
    }


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>

        {
            user?.uid && <li> <Link to='/dashboard' >Dashboard</Link></li>
        }
        <li><Link to='/blogs'>Blogs</Link></li>

    </>




    return (
        <div className=' bg-primary'>
            <div className="navbar lg:container ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div className='flex'>
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>


                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Bike HAT</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-black">
                        {menuItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <Link onClick={handleLogout} className="btn btn-secondary">Log Out</Link> :
                            <Link to='/login' className="btn btn-secondary">Login</Link>
                    }

                </div>
            </div>
        </div>


    );
};

export default Navbar;