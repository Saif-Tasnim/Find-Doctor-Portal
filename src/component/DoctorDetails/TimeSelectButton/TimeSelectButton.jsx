import React from 'react';

const TimeSelectButton = ({ time, setTime }) => {
    
    const handleBtn = event => {
        setTime(event.target.textContent);
    }

    return (
        <div className='mb-5'>
            <button className='btn px-6 bg-[#f8f8f8] font-normal text-black hover:bg-[#e74e84] hover:text-white hover:transition-all duration-1000 ease-in-out'
                onClick={handleBtn}
            > {time} </button>
        </div>
    );
};

export default TimeSelectButton;