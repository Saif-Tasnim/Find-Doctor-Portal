import React from 'react';

const ProgressBar = ({ value, star }) => {
    return (
        <div className='flex gap-10 items-center'>
            <progress className="progress progress-accent w-80 h-3" value={value} max="100"></progress> <span className='text-sm font-bold opacity-70'> {star} Stars </span>
        </div>
    );
};

export default ProgressBar;