import React from 'react';

const TextInput = ({ label, placeholder, type }) => {
    return (
        <div>
            <label className="form-control w-full max-w-lg my-5">
                <div className="label mb-1 font-semibold opacity-80">
                    <span className="label-text text-lg"> {label} </span>
                </div>
                <input type={type} placeholder={placeholder} className="input input-bordered input-primary w-full" />
            </label>
        </div>
    );
};

export default TextInput;