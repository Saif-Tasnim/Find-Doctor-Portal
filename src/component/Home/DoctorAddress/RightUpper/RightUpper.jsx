import React from 'react';
import { FaBoxArchive } from "react-icons/fa6";


const RightUpper = () => {
    return (
        <div className='bg-[#3f4079] w-full p-10 text-center rounded-md mb-1 text-3xl'>
            <FaBoxArchive className='text-white w-full mb-5 text-4xl'></FaBoxArchive>
            <h2 className='text-[#74D1C6]'> SEARCH BY TYPE </h2>
        </div>
    );
};

export default RightUpper;