import { Rating } from '@smastrom/react-rating';
import React from 'react';
import img from '../../../assets/Reviews/avatar3.jpg';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import useDoctor from '../../../hooks/useDoctor';

const Reviews = ({ data }) => {
    const arr = [1, 2, 3];
    const doctor = useDoctor();

    return (

        <section className='bg-white pt-14 pb-9 '>

            {/* ratings card */}
            <div className='flex flex-col md:flex-row gap-8 px-12'>
                {/* left box */}
                <div className='bg-[#3f4079] text-white px-5 py-6'>
                    <div className='flex'>
                        <h1 className='text-5xl font-bold'>4.7</h1>
                        <p className='mt-6'>
                            <Rating
                                style={{ maxWidth: 75 }}
                                value={4}
                                className='text-yellow-400'
                                readOnly
                            ></Rating>
                        </p>
                    </div>
                    <p>Based on 4 reviews</p>
                </div>

                {/* right box */}
                <div className='flex flex-col space-y-2'>
                    <ProgressBar value={90} star={5} />
                    <ProgressBar value={93} star={4} />
                    <ProgressBar value={56} star={3} />
                    <ProgressBar value={31} star={4} />
                    <ProgressBar value={0} star={1} />
                </div>
            </div>

            <hr className='my-16 w-full' />
            {/* peoples reviews part */}

            {
                arr.map(() => <div className='flex gap-10 mx-7 my-9'>
                    {/* image part */}
                    <div>
                        <img src={img} alt="" className='w-36' />
                    </div>

                    {/* content part */}
                    <div className='border-[1px] border-[#ededed] p-4 rounded-md'>
                        <Rating
                            style={{ maxWidth: 50 }}
                            value={4}
                            className='text-yellow-400'
                            readOnly
                        ></Rating>

                        <p className='opacity-60 italic'>Sara – March 31, 2016</p>

                        <p className='py-3'>Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis</p>
                    </div>
                </div>)
            }

            <hr className='my-16 w-full' />

            {/* submit button */}
            <div className='flex justify-end mr-8'>
                <button className='btn bg-[#e74e84] text-white rounded-full hover:bg-accent'
                    disabled={doctor}
                >
                    <Link to="/submit-review">
                        Submit Review
                    </Link>
                </button>

            </div>


        </section>
    );
};

export default Reviews;