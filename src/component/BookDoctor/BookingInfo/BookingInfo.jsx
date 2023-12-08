import React from 'react';
import { Link } from 'react-router-dom';
import PaymentInformation from '../PaymentInofrmation/PaymentInformation';
import BillingDetails from '../BillingDetails/BillingDetails';

const BookingInfo = ({ bookingInfo, doctorData, price }) => {
    return (
        <div>
            {/* navigate to login */}
            {/* <div className='p-4 bg-[#f8f8f8]'>
                <p> Existing Customer ? <Link to="/login" className='text-[#E74E84]'> Click here to login</Link></p>
            </div> */}

            {/* user details */}
            {/* <UserDetails /> */}

            <hr className='mt-3 mb-6' />

            {/* payment information */}
            <PaymentInformation
                bookingInfo={bookingInfo}
                doctorData={doctorData}
                price={price}
            />

            <hr className='mt-3 mb-6' />

            {/* Billing Details */}
            {/* <BillingDetails /> */}

            <hr className='mt-3 mb-6' />

            {/* cancellation policy */}
            {/* <div className='mt-7 ml-8'>
                <h1 className='text-2xl font-semibold opacity-70'> Cancellation Policy </h1>

                <div className="form-control flex gap-4 flex-row mt-6">
                    <input type="checkbox" className="checkbox checkbox-secondary" />
                    <Link>I accept <span className='text-[#e74e84]'>terms and condition and general policy</span></Link>

                </div>
            </div> */}

        </div>
    );
};

export default BookingInfo;