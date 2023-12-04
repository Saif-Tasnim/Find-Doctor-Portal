import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import img from '../../../assets/About/FinDOctor/avatar1.jpg'

const CommentCard = ({ a }) => {

    return (
        <div className='border-2 rounded-md px-4 py-4 md:w-[87%]'>
            <div className='flex gap-3'>
                <Rating
                    style={{ maxWidth: 80 }}
                    value={5}
                    readOnly
                ></Rating>

                <h3 className='font-semibold'> {a === 1 ? "Excellent!" : a === 2 ? "Superb!" : a === 3 ? "Very useful!" : "Satisfying"} </h3>
            </div>

            <p className='my-6'>"Vel esse mucius omittantur ei. Nostrum fabellas similique ex qui, dolor semper mentitum ut est, ea nec mutat vocent. Animal commodo in quo, et nec zril dolor homero. Meis graece ad pro, mea simul discere no."</p>

            <div className='flex gap-5 items-center mt-7'>
                <img src={img} alt="" className='w-12 h-12 rounded-full' />

                <div>
                    <h3 className='font-semibold opacity-75'>Dr. Joseph Luiss</h3>
                    <h5 className='text-sm'>Doctor</h5>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;