import React from 'react';
import logoImg from '../../../assets/Banner/logo.png';
import { Link } from 'react-router-dom';
import NavBar from '../../../component/Nav/NavBar/NavBar';
import ResponsiveNav from '../../../component/Nav/ResposniveNav/ResponsiveNav';

const Header = () => {
    return (
        <header className='fixed w-full flex justify-between md:justify-around bg-white top-0 py-7 md:px-12 z-10'>

            <div className='md:mr-72 md:ml-28'>
                <Link to='/'>
                    <img src={logoImg} alt="logo_find-my-doctor" className='w-32' />
                </Link>
            </div>

            <nav>
                <NavBar></NavBar>
                <ResponsiveNav></ResponsiveNav>
            </nav>

        </header>
    );
};

export default Header;