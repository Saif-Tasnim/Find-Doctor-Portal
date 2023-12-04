import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './searchCard.css';

const SearchCard = ({ list }) => {
    return (
        <ul>
            {
                list.map(lst =>
                    <li className='bg-white rounded-md hover:bg-[#e74e84] hover:text-white hover:h-12 hover:transition-all hover:ease-in-out hover:duration-700 hover:scale-105'>
                        <Link to="">
                            <div className='flex justify-between p-3 mb-2 text-sm items-center '>
                                <div className='flex flex-row gap-3 items-center font-semibold opacity-80'>
                                    <h1 className='rounded-md px-2 bg-slate-100 text-black'> 23 </h1>
                                    <p> {lst} </p>
                                </div>
                                <div>
                                    <FaArrowRightLong className='text-[#e74e84] arrow-css'></FaArrowRightLong>
                                </div>
                            </div>
                        </Link>
                    </li>)
            }

            <li className='bg-white rounded-md hover:bg-[#e74e84] hover:text-white hover:h-12 hover:transition-all hover:ease-in-out hover:duration-700 hover:scale-105'>
                <Link to="">
                    <div className='flex justify-between p-3 mb-2 text-sm items-center'>
                        <p> More ... </p>
                        <div>
                            <FaArrowRightLong className='text-[#e74e84] arrow-css'></FaArrowRightLong>
                        </div>
                    </div>
                </Link>
            </li>
       
        </ul>
    );
};

export default SearchCard;