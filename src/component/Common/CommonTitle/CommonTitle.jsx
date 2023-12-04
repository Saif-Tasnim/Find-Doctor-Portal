import React from 'react';

const CommonTitle = ({ title, para }) => {
    return (
        <div className='text-center'>
            <h1 className='font-semibold text-xl md:text-3xl py-2 text-[#333333]'>{title}</h1>
            <p className='mx-6 md:w-[56%] md:mx-auto text-[#777777] md:text-lg'>{para}</p>
        </div>
    );
};

export default CommonTitle;