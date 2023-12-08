import React, { useState } from 'react';

const SelectVisit = ({ name, price, setVisit, setPrice }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            setVisit(name)
            setPrice(price)

        }
    };

    return (
        <div className='flex justify-between items-center border-b-[1px] mb-5 py-3'>
            <div className="flex flex-row">
                <label className="label cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox hover:bg-[#e74e84] hover:transition-transform duration-700"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="label-text ml-5"> {name} </span>
                </label>
            </div>

            <div>
                <h1 className='font-semibold'>$ {price}</h1>
            </div>
        </div>
    );
};

export default SelectVisit;
