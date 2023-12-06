import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';
import DropDown from '../../Common/DropDown/DropDown';

const NavBar = () => {
    const { user } = useContext(AuthContext);


    const navItems =
        <>
            <ul className='flex gap-5 items-center'>
                <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/"> Home </Link> </li>
                <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/find-doctor"> Doctors </Link> </li>

                <li className='px-2 font-semibold hover:text-[#e74e84]'>
                    <Link to="/about-us"> About Us </Link>
                </li>

                <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/"> Contact Us </Link> </li>

                {
                    user ? <DropDown></DropDown> : <li className='px-2 font-semibold hover:text-[#e74e84]'> <Link to="/login"> Log In </Link> </li>
                }

            </ul>
        </>


    return (
        <nav className='hidden lg:block'>
            {navItems}
        </nav>
    );
};

export default NavBar;