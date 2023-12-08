import React from 'react';
import img from '../../../assets/DoctorImage/badge_1.svg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';


const DoctorIntro = ({ data }) => {

    return (

        <div className='sticky w-[94%] mx-auto md:mx-0 md:w-1/3 bg-white border-2 h-fit mt-10'>
            {/* doctor image */}
            <div>
                <img src={data?.image} alt="" className='w-full' />
            </div>

            {/* doctor bio */}
            <div className='text-center py-5'>
                <h3 className='uppercase font-semibold text-sm text-[#999999]'> {data?.position} </h3>
                <h3 className='uppercase font-semibold text-sm text-[#999999] my-2'> {data?.hospital} Hospital </h3>
                <h1 className='text-2xl font-semibold text-[#333333]'> {data?.name} </h1>
                <p className='py-3 flex gap-3 justify-center items-center'>
                    <Rating
                        style={{ maxWidth: 110 }}
                        value={4}
                        readOnly
                    />

                    <img src={img} alt="" className='w-6' />
                </p>

                <div className='py-5 flex justify-center items-center gap-3'>
                    <h3 className='bg-[#74D1C6] font-bold text-white rounded-md px-3 py-2'> 854 Views </h3>
                    <h3 className='bg-[#74D1C6] font-bold text-white rounded-md px-3 py-2'> 124 Patients </h3>
                </div>
            </div>

            <hr className='py-4' />

            {/* doctor contact */}
            <div className='py-3 px-8'>
                <div>
                    <p className='font-bold'>Address</p>
                    <p className='pb-5'> {data?.hospital} Hospital , {data?.location}</p>
                </div>
                <div>
                    <p className='font-bold'> Phone </p>
                    <p className='pb-5 text-[#E74E84] hover:cursor-pointer'> {data?.phone} </p>
                </div>
            </div>

            <hr className='py-5' />

            {/* doctor map */}
            <div className='flex justify-center pb-10'>
                <button className='flex flex-row-reverse gap-2 items-center btn text-[#E74E84] border-[#E74E84] bg-white text-lg hover:bg-[#E74E84] rounded-3xl hover:text-white transition-all duration-500'> View on map <FaMapMarkerAlt /> </button>
            </div>


        </div>
    );
};

export default DoctorIntro;