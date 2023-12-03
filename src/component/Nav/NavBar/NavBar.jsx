import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItems =
        <>
            <ul className='flex gap-5'>
                <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/"> Home </Link> </li>
                <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/find-doctor"> Doctors </Link> </li>

                <li className='px-2 font-semibold hover:text-[#e74e84]'>
                    <Link to="/about-us"> About Us </Link>
                </li>

                <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/"> Contact Us </Link> </li>
                <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/"> Log In </Link> </li>
            </ul>
        </>


    return (
        <nav className='hidden lg:block'>
            {navItems}
        </nav>
    );
};

export default NavBar;