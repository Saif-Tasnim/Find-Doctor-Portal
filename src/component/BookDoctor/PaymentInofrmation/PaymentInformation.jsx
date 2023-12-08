import React from 'react';
import img from '../../../assets/Payment/payments.png';
import paypalImg from '../../../assets/Payment/paypal_bt.png'
import TextInput from '../../Common/TextInput/TextInput';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import Skeleton from '../../Common/Skeleton/Skeleton';


const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK_Key);

const PaymentInformation = ({ bookingInfo, doctorData, price }) => {

    if (!price) {
        return <Skeleton></Skeleton>
    }

    return (

        <div className='my-12 flex gap-2'>
            <div>
                <h1 className='w-12 h-12 rounded-full bg-[#e74e84] text-white text-center pt-2 text-2xl'> 1 </h1>
            </div>

            <div>
                <h1 className='text-3xl font-semibold opacity-70'> Payment Information </h1>
                <small>Mussum ipsum cacilds, vidis litro abertis.</small>

                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        bookingInfo={bookingInfo}
                        doctorData={doctorData}
                        price={price}
                    ></CheckoutForm>
                </Elements>


                {/* <form action="" className='mt-6'>

                   
                    <TextInput
                        type="text"
                        label="Name on card"
                        placeholder="Name on card"
                        w={true}
                    />


                    
                    <div className='flex flex-col space-y-5 md:flex-row md:items-center md:gap-16 md:space-y-0'>
                        <TextInput
                            type="text"
                            label="Card Number"
                            placeholder="xxxx-xxxx-xxxx-xxxx" />

                        <div>
                            <img src={img} alt="" className='mt-6' />
                        </div>
                    </div>

                   
                    <div className='flex gap-20 my-4'>
                        <div>
                            <p className='pb-3 font-semibold opacity-75'> Expiration Date </p>
                            <div className='flex gap-4'>
                                <input type="text"
                                    placeholder='MM' className='input w-32 border-2 border-black' />
                                <input type="text" className='input w-32 border-2 border-black' placeholder='Year' />
                            </div>
                        </div>

                        <div>
                        <p className='pb-3 font-semibold opacity-75'> Security code </p>

                            <div className='flex gap-4'>
                                <input type="text" name="" id="" placeholder='CCV'
                                    className='input w-32 border-2 border-black'
                                />
                                <input type="text" name="" id="" placeholder='last 3 digits'
                                    className='input w-32 border-2 border-black'
                                />
                            </div>
                        </div>
                    </div>

                  
                    <div className='mt-6'>
                        <h1 className='text-2xl font-semibold py-4'>Or checkout with Paypal</h1>
                        <p className='pb-10'>Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.</p>

                        <img src={paypalImg} alt="" />
                    </div>


                </form> */}

            </div>
        </div>
    );
};

export default PaymentInformation;