import React from 'react';
import { MdListAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import CommonTitle from '../../Common/CommonTitle/CommonTitle';

const WhyChoose = () => {

    const reasons = [1, 2, 3, 4, 5, 6];

    return (
        <div className='py-28 bg-[#e9ecef]'>

            {/* title */}
            <CommonTitle
                title="WHY CHOOSE FINDOCTOR"
                para="Cum doctus civibus efficiantur in imperdiet deterruisset."
            ></CommonTitle>


            {/* reason card */}
            <div className='w-full md:w-[90%] md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-20'>
                {
                    reasons.map(res => <Link to="">
                        <div className='border-2 rounded-md px-6 py-12 bg-white hover:-translate-y-10 transition-all duration-1000'>
                            <div className='mb-5 text-center py-4'>
                                <MdListAlt className='w-full text-7xl'></MdListAlt>
                            </div>

                            <div className='text-center'>
                                <h1 className='font-semibold text-xl mb-3'>+ 5575 Doctors</h1>
                                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>


        </div>
    );
};

export default WhyChoose;