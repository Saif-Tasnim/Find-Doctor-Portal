import React, { useEffect, useState } from 'react';
import BookingInfo from '../../component/BookDoctor/BookingInfo/BookingInfo';
import BookingConfirmation from '../../component/BookDoctor/BookingConfirmation/BookingConfirmation';

const BookDoctor = () => {
    const [book, setBook] = useState({});
    const [doctor, setDoctor] = useState({});
    const [price, setPrice] = useState();
    useEffect(() => {
        const bookingInfo = JSON.parse(localStorage.getItem("booking"));
        const doctorData = JSON.parse(localStorage.getItem("doctorData"));
        setBook(bookingInfo);
        setDoctor(doctorData);
        setPrice(bookingInfo?.price)
        // localStorage.removeItem("booking")
        // localStorage.removeItem("doctorData")
    }, [])



    return (
        <section className='mt-20 bg-[#F5F8FA]'>
            {/* breedcrambs */}
            <div className="text-sm breadcrumbs bg-[#3f4079] w-full px-20 py-7 text-white">
                <ul>
                    <li className='hover:text-cyan-600 duration-500'><a>Home</a></li>
                    <li className='hover:text-cyan-600 duration-500'><a> Category </a></li>
                    <li className='opacity-70'> page active </li>
                </ul>
            </div>


            {/* booking details */}
            <div className='w-[90%] mx-auto flex flex-col-reverse md:grid md:grid-cols-12 md:gap-12 md:py-20'>
                {/* booking info */}
                <div className='col-span-8 border-2 bg-white p-7'>
                    <BookingInfo
                        bookingInfo={book}
                        doctorData={doctor}
                        price={price}
                    > </BookingInfo>
                </div>

                {/* booking confirmation */}
                <div className='col-span-4 border-2 bg-white'>
                    <BookingConfirmation
                        bookingInfo={book}
                        doctorData={doctor}
                    ></BookingConfirmation>
                </div>
            </div>

        </section>
    );
};

export default BookDoctor;