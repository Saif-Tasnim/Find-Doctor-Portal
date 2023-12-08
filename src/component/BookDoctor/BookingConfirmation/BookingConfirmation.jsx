import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation = ({ bookingInfo, doctorData }) => {
    console.log(bookingInfo);
    console.log(doctorData);
    
    return (
        <div>
            <h1 className='bg-[#3f4079] text-white text-3xl font-semibold w-full p-6'>
                Your booking </h1>

            <div className='flex flex-col space-y-3 my-16 mx-6'>
                <p>Date : <span className='font-semibold'>{bookingInfo?.date}</span></p>
                <p>Time : <span className='font-semibold'>{bookingInfo?.time}</span></p>
                <p className='pb-4'>Dr. Name: <span className='font-semibold'>{doctorData?.name}</span></p>

                <hr className='py-1' />
                <p>{bookingInfo?.problem} <span className='font-semibold'>${bookingInfo?.price}</span></p>



                <hr className='py-3' />
                <p className='text-2xl'>TOTAL <span className='font-semibold ml-2'>${bookingInfo?.price}</span></p>

                <div className='flex justify-center pt-16'>
                    <Link to="">
                        <button className='btn bg-[#e74e84] text-white rounded-full hover:bg-accent px-12'> Confirm and Pay </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;