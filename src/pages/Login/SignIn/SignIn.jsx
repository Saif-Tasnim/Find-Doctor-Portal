import React from 'react';
import TextInput from '../../../component/Common/TextInput/TextInput';
import PasswordInput from '../../../component/Common/PasswordInput/PasswordInput';
import googleImg from '../../../assets/Entry/search.png';


const SignIn = () => {

    return (

        <section className='mt-9'>
            <h1 className='text-3xl font-bold text-primary mb-8'> Sign In ! </h1>

            <div className='bg-white rounded-xl px-12 py-8 mb-4'>

                <div>
                    <TextInput
                        label="Your Email"
                        placeholder="Enter Your Email"
                        type="email"

                    ></TextInput>


                    <PasswordInput
                        label="Your Password"
                        placeholder="Enter Your Password"
                    ></PasswordInput>

                    <button className='btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full md:w-1/3 my-5'> Sign In </button>
                </div>


                <div className="divider">OR</div>

                <div>
                    <p className='font-semibold pb-3'> Sign In With ... </p>
                    <img src={googleImg} className='w-8 mt-3 mx-auto hover:cursor-pointer' alt="" />
                </div>
            </div>


        </section>
    );
};

export default SignIn;