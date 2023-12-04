import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const LeftUpper = () => {
    return (
        <div className='bg-[#3f4079] w-full p-10 text-center rounded-md mb-1 text-3xl'>
             <IoLocationOutline className='text-white w-full mb-5 text-4xl'></IoLocationOutline>
             <h2 className='text-[#74D1C6]'>SEARCH BY CITY OR ZONE</h2>
        </div>
    );
};

export default LeftUpper;