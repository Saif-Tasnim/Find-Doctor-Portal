import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img from '../../../assets/DoctorImage/doctor_listing_2.jpg'

const NearAbout = ({ data }) => {

    return (
        <div className='my-10 w-[97%] mx-auto p-6 bg-white'>
            {/* <h1 className='bg-[#3f4079] p-6 text-white text-lg md:text-2xl font-semibold'> Near About Your Area </h1> */}

            <div className='flex flex-col md:flex-row md:gap-10'>
                <div>
                    {
                        data?.map(ar => <Link to={`/single-doctor-details/${ar._id}`}
                            className='flex flex-col md:flex-row md:items-center gap-6 border-2 shadow-md p-5 my-12'
                        >
                            {/* img part */}
                            <div className=' w-full md:w-1/2'>
                                <img src={ar.image} alt="" className=' rounded-xl' />
                            </div>

                            {/* content part */}
                            <div className='mt-2'>
                                <h1 className='text-xl opacity-70 font-semibold mb-2'>{ar.name}</h1>
                                <h2 className='mb-2 italic'>{ar.position}</h2>
                                <h2 className='pb-1 text-blue-600 font-semibold'>{ar.hospital} Hospital </h2>
                                <h2 className='mb-5'> {ar.location} </h2>

                                {/* book button */}
                                <div className='flex justify-end mt-8'>
                                    <Link to={`/single-doctor-details/${ar._id}`}>
                                        <button className='btn bg-[#e74e84] text-white px-10 rounded-full hover:bg-accent'> Book Now </button>
                                    </Link>
                                </div>
                            </div>

                        </Link>)
                    }
                </div>


                {/* for right side part */}
                <div>
                    {
                        data?.map(ar => <Link to={`/single-doctor-details/${ar.id}`}
                            className='flex flex-col md:flex-row md:items-center gap-6 border-2 shadow-md p-5 my-12'
                        >
                            {/* img part */}
                            <div className=' w-full md:w-1/2'>
                                <img src={ar.image} alt="" className=' rounded-xl' />
                            </div>

                            {/* content part */}
                            <div className='mt-2'>
                                <h1 className='text-xl opacity-70 font-semibold mb-2'>{ar.name}</h1>
                                <h2 className='mb-2 italic'>{ar.position}</h2>
                                <h2 className='pb-1 text-blue-600 font-semibold'>{ar.hospital} Hospital </h2>
                                <h2 className='mb-5'> {ar.location} </h2>

                                {/* book button */}
                                <div className='flex justify-end mt-8'>
                                    <Link to={`/single-doctor-details/${ar.id}`}>
                                        <button className='btn bg-[#e74e84] text-white px-10 rounded-full hover:bg-accent'> Book Now </button>
                                    </Link>
                                </div>
                            </div>

                        </Link>)
                    }
                </div>

                <div>

                </div>
            </div>

        </div>
    );
};

export default NearAbout;