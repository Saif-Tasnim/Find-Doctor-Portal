import React, { useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ label, placeholder }) => {
    const [show, isShow] = useState(false)

    return (
        <div>
            <label className="form-control w-full max-w-lg my-5">
                <div className="label mb-1 font-semibold opacity-80">
                    <span className="label-text text-lg"> {label} </span>
                </div>
                <div className='relative'>
                    <input type={show ? "text" : "password"} placeholder={placeholder} className="input input-bordered input-primary w-full" />
                    <FaRegEyeSlash className={`absolute right-2 top-[35%] hover:cursor-pointer ${show ? "opacity-100" : "opacity-50"}`}
                        onClick={() => { isShow(!show) }}
                        onChange={(e) => console.log(e)}
                    />
                </div>
            </label>
        </div>
    );
};

export default PasswordInput;