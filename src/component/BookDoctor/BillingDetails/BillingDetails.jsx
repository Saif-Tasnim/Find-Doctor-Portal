import React from 'react';
import TextInput from '../../Common/TextInput/TextInput';

const BillingDetails = () => {
    return (
        <div className='my-12 flex gap-2'>
            <div>
                <h1 className='w-12 h-12 rounded-full bg-[#e74e84] text-white text-center pt-2 text-2xl'> 2 </h1>
            </div>

            <div>
                <h1 className='text-3xl font-semibold opacity-70'> Billing Address </h1>
                <small>Mussum ipsum cacilds, vidis litro abertis.</small>

                <form action="" className='mt-6'>

                    {/* country field */}
                    <select className="select select-bordered w-full max-w-xs my-4">
                        <option disabled selected>Select your area </option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Rajshahi</option>
                    </select>

                    {/* street field */}
                    <div className='flex flex-col space-y-5 md:flex-row md:items-center md:gap-16 md:space-y-0'>
                        <TextInput
                            type="text"
                            label="Street line 1"
                            placeholder="Street line 1" />
                        <TextInput
                            type="text"
                            label="Street line 2"
                            placeholder="Street line 2" />

                    </div>

                    {/* city,state,postal code */}
                    <div className='flex flex-col space-y-5 md:flex-row md:items-center md:gap-16 md:space-y-0 mt-5'>
                        <TextInput
                            type="text"
                            label="City"
                            placeholder="city" />

                        <div className='flex mt-3 gap-10'>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='pb-3 font-semibold opacity-75'>State</label>
                                <input type="text"
                                    className='input border-2 border-black w-24'
                                    placeholder='state'
                                />

                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='pb-3 font-semibold opacity-75'>Postal Code</label>
                                <input type="text"
                                    className='input border-2 border-black w-36'
                                    placeholder='postal code'
                                />
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default BillingDetails;