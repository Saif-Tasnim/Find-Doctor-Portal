import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';
import DropDown from '../../Common/DropDown/DropDown';

const ResponsiveNav = () => {
    const [isOpen, setOpen] = useState(false)
    const { user } = useContext(AuthContext);

    const navItems =
        <>
            <ul className={`bg-white flex flex-col items-center gap-3 ${open ? "translate-x-0 duration-1000" : "-translate-x-[3000px] duration-1000"}`}>
                <li className='px-2 font-semibold'> <Link to="/"> Home </Link> </li>
                <li className='px-2 font-semibold'> <Link to="/find-doctor"> Doctors </Link>
                </li>

                <li className='px-2 font-semibold'>
                    <Link to="/about-us"> About Us </Link>
                </li>

                <li className='px-2 font-semibold'> <Link to="/"> Contact Us </Link> </li>
                {
                    user ? <DropDown></DropDown> : <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/login"> Log In </Link> </li>
                }

            </ul>
        </>
    return (
        <nav className='block lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />

            <div className='absolute right-0 w-full pb-5 pt-2'>
                {
                    isOpen && navItems
                }
            </div>
        </nav>
    );
};

export default ResponsiveNav;