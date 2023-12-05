import React from 'react';
import TextInput from '../../../component/Common/TextInput/TextInput';
import PasswordInput from '../../../component/Common/PasswordInput/PasswordInput';

const SignUp = () => {
    return (
        <section className='mt-9'>
            <h1 className='text-3xl font-bold text-primary mb-8'> Create Account ! </h1>

            <div className='bg-white rounded-xl px-12 py-8 mb-4'>
                {/* name part */}
                <div className='flex flex-col space-y-2 mb-0 md:space-y-0 md:flex-row md:gap-5 md:mb-4 '>
                    <div className='w-full'>
                        <TextInput
                            type="text"
                            placeholder="First Name"
                            label="Your First Name"
                        ></TextInput>
                    </div>

                    <div className='w-full'>
                        <TextInput
                            type="text"
                            placeholder="Last Name"
                            label="Your Last Name"
                        ></TextInput>
                    </div>
                </div>

                {/* contact part */}

                <div className='flex flex-col space-y-2 mb-0 md:space-y-0 md:flex-row md:gap-5 md:mb-4'>
                    <div className='w-full'>
                        <TextInput
                            type="email"
                            placeholder="Email"
                            label="Your Email"
                        ></TextInput>
                    </div>

                    <div className='w-full'>
                        <TextInput
                            type="text"
                            placeholder="Phone"
                            label="Your Cell No"
                        ></TextInput>
                    </div>
                </div>

                {/* password part */}
                <div className='flex flex-col space-y-2 mb-0 md:space-y-0 md:flex-row md:gap-5 md:mb-4 '>
                    <div className='w-full'>
                        <PasswordInput
                            label="Password"
                            placeholder="Your Password"
                        ></PasswordInput>
                    </div>
                    <div className='w-full'>
                        <PasswordInput
                            label="Confirm Password"
                            placeholder="Confirm Password"
                        ></PasswordInput>
                    </div>
                </div>

                <button className='btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full md:w-1/3 my-5'> Sign Up </button>
            </div>
        </section>
    );
};

export default SignUp;