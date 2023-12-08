import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const SubmitReview = () => {
    return (
        <section className='my-20 flex justify-center items-center bg-[#F5F8FA]'>
            <div className='bg-white pt-8 px-8  border-[1px] my-20'>
                <h2 className='text-xl md:text-3xl font-semibold py-5 mr-0 md:mr-40'>Write a review for Dr. Julia Smooths</h2>

                {/* review form */}
                <form action="">
                    <p className='pt-6 pb-2 font-semibold opacity-75'>Overall Rating
                    </p>
                    <Rating
                        style={{ maxWidth: 250 }}
                        value={0}
                        className='text-yellow-400'

                    ></Rating>

                    <p className='pt-10 pb-2 font-semibold opacity-70'> Title of your review </p>
                    <input type="text" name="" id="" className='input border-2 border-slate-300 w-full' placeholder='If you could say it in one sentence, what could you say ?' />

                    <p className='pt-10 pb-2 font-semibold opacity-70'> Your review </p>
                    <textarea className="textarea w-full border-2 border-slate-300 h-32" placeholder="Write your review here ..."></textarea>

                    <p className='pt-10 pb-2 font-semibold opacity-70'>Add your photo (optional)</p>
                    <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />

                    <hr className='my-10 w-full -ml-8 -mr-8' />


                    {/* terms and conditions */}
                    <div className="form-control flex gap-4 flex-row">
                        <input type="checkbox" className="checkbox checkbox-secondary" />
                        <Link>I accept <span className='text-[#e74e84]'>terms and condition and general policy</span></Link>

                    </div>

                    {/* submit review */}
                    <div className='flex justify-start my-10'>
                        <Link to="/submit-review">
                            <button className='btn bg-[#e74e84] text-white rounded-full hover:bg-accent'> Submit Review </button>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SubmitReview;