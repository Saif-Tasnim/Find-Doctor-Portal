import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const ParaLink = ({ text }) => {

    return (

        <li className='pb-2 list-none hover:pl-1 hover:text-[#e74e84] text-sm hover:transition-all duration-500'>
            <Link to="" className='flex items-center gap-1'>
                {text} <FaArrowRightLong className='w-6 hidden custom-hover' />
            </Link>
        </li>
    );
};

export default ParaLink;