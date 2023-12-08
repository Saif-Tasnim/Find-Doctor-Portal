import React from 'react';
import img from '../../../assets/Banner/logo.png';
import ParaLink from './ParaLink/ParaLink';
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (

        <footer className='py-14 mx-10 mt-10'>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-12 pb-10'>
                {/* logo  */}
                <Link to="/">
                    <img src={img} alt="" className='md:ml-10 w-40' />
                </Link>

                {/* about */}
                <div>
                    <h1 className='pb-4 opacity-60 font-bold uppercase'> About </h1>

                    <ParaLink text="About Us"></ParaLink>

                    <ParaLink text="Blog"></ParaLink>

                    <ParaLink text="FAQ"></ParaLink>

                    <ParaLink text="Login"></ParaLink>

                    <ParaLink text="Register"></ParaLink>
                </div>

                {/* useful links */}
                <div>
                    <h1 className='pb-4 opacity-60 font-bold uppercase'> Useful Links </h1>

                    <ParaLink text="Doctors"></ParaLink>
                    <ParaLink text="Clinics"></ParaLink>
                    <ParaLink text="Specialization"></ParaLink>
                    <ParaLink text="Join as a Doctor"></ParaLink>
                    <ParaLink text="Download App"></ParaLink>

                </div>

                {/* contact us */}

                <div className='flex flex-col space-y-7 md:block md:space-y-0'>
                    <h1 className='pb-4 opacity-60 font-bold uppercase'> CONTACT WITH US </h1>

                    {/* mobile and emails */}
                    <div>
                        <li className='list-none flex items-center'>
                            <FaMobileScreen className='w-9 text-[#e74e84]' />
                            <input type="tel" name="" id=""
                                value=" + 61 23 8093 3400"
                                readOnly
                                className='hover:cursor-pointer hover:text-[#e74e84]' />
                        </li>

                        <li className='list-none flex items-center pt-3'>
                            <MdOutlineMailOutline className='w-9 text-[#e74e84]' />
                            <input type="email" name="" id=""
                                value="help@findoctor.com"
                                readOnly
                                className='hover:cursor-pointer hover:text-[#e74e84]' />
                        </li>
                    </div>


                    {/* social link */}
                    <h1 className='pb-3 opacity-60 font-bold uppercase pt-6'> Follow US
                    </h1>

                    <div className='flex flex-row gap-8 opacity-75 font-bold'>
                        <FaFacebookF className='hover:text-[#e74e84] cursor-pointer' />
                        <FaTwitter className='hover:text-[#e74e84] cursor-pointer' />
                        <FaLinkedinIn className='hover:text-[#e74e84] cursor-pointer' />
                    </div>
                </div>

            </div>

            <hr />

            {/* copyright with privacy term */}

            <div className='flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-center pt-8 text-sm opacity-70 md:mx-10'>
                <div>
                    <Link className='hover:text-[#e74e84]'> Terms & Condition </Link> |
                    <Link className='hover:text-[#e74e84]'> Privacy </Link>
                </div>

                <div>
                    <p> © Findoctor </p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;