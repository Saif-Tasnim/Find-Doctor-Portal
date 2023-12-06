import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Log Out!",
                    icon: "success"
                });

                navigate('/')
            })
    }

    const navItems = <>

        <li className='text-2xl font-semibold mx-auto py-3 hover:cursor-pointer'> <Link to="/admin-route/admin-route"> All User </Link> </li>

        <li className='text-2xl font-semibold mx-auto py-3 hover:cursor-pointer'> <Link to="/admin-route/account-doctors"> All Doctor </Link> </li>

        <li className='text-2xl font-semibold mx-auto py-3 hover:cursor-pointer'
            onClick={handleLogOut}
        > Log Out </li>

    </>

    return (

        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center  lg:mt-0">

                    <Outlet></Outlet>

                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-primary text-white flex flex-col justify-center">
                        {/* Sidebar content here */}
                        {
                            navItems
                        }
                    </ul>

                </div>

                {/* mobile responsive start*/}

                <div className="navbar-end flex lg:hidden ml-3">
                    <label className="btn btn-circle swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        {/* hamburger icon */}
                        <svg onClick={() => setIsOpen(!isOpen)} className="swap-off fill-primary " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        {/* close icon */}
                        <svg onClick={() => setIsOpen(!isOpen)} className="swap-on fill-error " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>


                    <ul className={`${isOpen ? "absolute top-16 left-0 space-y-5 flex flex-col items-center bg-[#ffffff] bg-opacity-80 w-full py-6 transition-all duration-300" : "absolute -top-[500px] left-0 space-y-5 flex flex-col items-center bg-success bg-opacity-40 w-full py-6 transition-all duration-300"}`}>
                        {
                            navItems
                        }
                    </ul>

                </div>

                {/* mobile responsive end*/}


            </div>
        </div>
    );
};

export default Profile;