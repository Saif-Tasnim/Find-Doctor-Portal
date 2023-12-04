import React from 'react';

const HomeAppointmentCard = ({ img, heading, para }) => {
    return (
        <div className='bg-white border-2 px-3 py-4 rounded-md shadow-lg'>
            <div className='w-1/2 mx-auto mb-4'>
                <img src={img} alt="" />
            </div>

            <div className='flex flex-col items-center justify-center px-6'>
                <h1 className='my-3 text-[#e74e84] text-xl font-semibold'> {heading}</h1>
                <p>{para}</p>
            </div>
        </div>
    );
};

export default HomeAppointmentCard;