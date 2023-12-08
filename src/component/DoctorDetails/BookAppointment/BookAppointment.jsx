import React, { useState } from 'react';
import { format, isSunday } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import { Link } from 'react-router-dom';
import TimeSelectButton from '../TimeSelectButton/TimeSelectButton';
import SelectVisit from '../SelectVisit/SelectVisit';
import './BookAppointment.css';
import useDoctor from '../../../hooks/useDoctor';
import Swal from 'sweetalert2';


const BookAppointment = ({data}) => {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [visit, setVisit] = useState();
    const [price, setPrice] = useState();
    const doctor = useDoctor();


    if (date && time && visit && price) {
        const newDate = date ? format(date, 'dd MMM yyyy', { locale: enGB }) : ''

        const bookingInfo = {
            date: newDate,
            time,
            problem: visit,
            price
        };

        localStorage.setItem("booking", JSON.stringify(bookingInfo))
        localStorage.setItem("doctorData", JSON.stringify(data))

    }

    const modifiers = {
        sunday: (date) => isSunday(date),
        otherDay: (date) => !isSunday(date)

    };

    const modifiersClassNames = {
        sunday: 'red-background',
        otherDay: 'hover-day'
    };

    return (
        <section className='bg-white py-10 px-6'>
            <div className='pb-10 pt-5'>
                <p className='text-xl font-light'>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

            </div>

            {/* Calendar */}
            <div>
                <h1 className='bg-[#3f4079] text-center py-4 text-white font-semibold'> <span className='bg-[#e74e84] rounded-full px-3 mr-2 py-1'>1</span> SELECT YOUR DATE </h1>

                <DatePickerCalendar
                    date={date}
                    onDateChange={setDate}
                    locale={enGB}
                    modifiers={modifiers}
                    modifiersClassNames={modifiersClassNames}
                />

                <div className='flex gap-8 mt-6'>
                    <h1> <span className='bg-[#8ec549] px-3 py-[1px] mr-2'>
                    </span> Available </h1>
                    <h1> <span className='bg-[#eb525b] px-3 py-[1px] mr-2'>
                    </span> Not Available </h1>
                </div>
            </div>

            {/* time part */}
            <div className='mt-20 mb-5'>
                <h1 className='bg-[#3f4079] text-center py-4 text-white font-semibold'> <span className='bg-[#e74e84] rounded-full px-3 mr-2 py-1'>2</span> SELECT YOUR TIME </h1>

                <div className='flex justify-center items-center gap-20 mt-14'>
                    {/* am  */}
                    <div>
                        <TimeSelectButton time="09:30 am" setTime={setTime} />
                        <TimeSelectButton time="10:00 am" setTime={setTime} />
                        <TimeSelectButton time="10:30 am" setTime={setTime} />
                        <TimeSelectButton time="11:00 am" setTime={setTime} />
                        <TimeSelectButton time="11:30 am" setTime={setTime} />
                        <TimeSelectButton time="12:00 pm" setTime={setTime} />
                    </div>
                    {/* pm */}
                    <div>
                        <TimeSelectButton time="01:30 pm" setTime={setTime} />
                        <TimeSelectButton time="02:00 pm" setTime={setTime} />
                        <TimeSelectButton time="02:30 pm" setTime={setTime} />
                        <TimeSelectButton time="03:00 pm" setTime={setTime} />
                        <TimeSelectButton time="03:30 pm" setTime={setTime} />
                        <TimeSelectButton time="04:00 pm" setTime={setTime} />
                    </div>
                </div>

            </div>

            {/* visit part */}
            <div className='mt-20 mb-5'>
                <h1 className='bg-[#3f4079] text-center py-4 text-white font-semibold'> <span className='bg-[#e74e84] rounded-full px-3 mr-2 py-1'>3</span> SELECT VISIT </h1>

                <div className='flex flex-col mr-7 md:mr-0 md:flex-row md:justify-center md:items-center md:gap-32 mt-14'>

                    {/* LEFT  */}
                    <div className='w-full ml-4'>
                        <SelectVisit name="Back Pain Visit" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                        <SelectVisit name="Diabetes Consultant" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                        <SelectVisit name="Foot Pain Visit" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                        <SelectVisit name="Neck Pain Visit" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                    </div>

                    {/* RIGHT */}
                    <div className='w-full mr-4'>
                        <SelectVisit name="Cardiovascular screen" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                        <SelectVisit name="Icontinence Visit" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                        <SelectVisit name="Food intollerance Visit" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                        <SelectVisit name="Back Pain Visit" price="55"
                            setVisit={setVisit} setPrice={setPrice} />
                    </div>

                </div>
            </div>


            <hr className='my-10' />

            {/* submit button */}
            <div className='flex justify-center mr-8'
                disabled={doctor}
            >

                <button className='btn bg-[#e74e84] text-white px-10 rounded-full hover:bg-accent' disabled={doctor}>
                    <Link to="/book-doctor">Book Now </Link> </button>
            </div>

        </section>
    );
};

export default BookAppointment;
