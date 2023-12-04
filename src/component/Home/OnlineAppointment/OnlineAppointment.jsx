import React from 'react';
import img1 from '../../../assets/HomeCard/icon-home-1.svg'
import img2 from '../../../assets/HomeCard/icon-home-2.svg'
import img3 from '../../../assets/HomeCard/icon-home-3.svg'
import arrowImg from '../../../assets/HomeCard/arrow-gray-1.svg';
import { Link } from 'react-router-dom';
import CommonTitle from '../../Common/CommonTitle/CommonTitle';
import HomeAppointmentCard from './HomeAppointmentCard/HomeAppointmentCard';

const OnlineAppointment = () => {
    const content = [
        {
            img: img1,
            heading: "FIND A DOCTOR",
            para: "Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie."
        },
        {
            img: img2,
            heading: "VIEW PROFILE",
            para: "Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie."
        },
        {
            img: img3,
            heading: "BOOK A VISIT",
            para: "Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie."
        },
    ]


    return (
        <div className='py-28 bg-[#f5f8fa] relative'>

            {/* title code of this component  */}
            <CommonTitle
                title="DISCOVER THE ONLINE APPOINTMENT!"
                para="Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie. Sed ad debet scaevola, ne mel."
            ></CommonTitle>

            {/* card part */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-12 lg:w-[85%] lg:mx-auto w-[93%] mx-auto'>
                {
                    content.map((ct, index) => <HomeAppointmentCard
                        key={index}
                        img={ct.img}
                        heading={ct.heading}
                        para={ct.para}
                    ></HomeAppointmentCard>)
                }

            </div>

            {/* arrow image position */}

            <div className='hidden lg:block'>

                <div className='absolute h-16 w-16 rounded-full border-2 bg-white top-1/2 -translate-y-5 left-[33%] flex justify-center items-center'>
                    <img src={arrowImg} alt="" />
                </div>

                <div className='absolute h-16 w-16 rounded-full border-2 bg-white top-1/2 -translate-y-5 left-[62%] flex justify-center items-center'>
                    <img src={arrowImg} alt="" />
                </div>
            </div>


            {/* find doctor button */}

            <div className='mt-16 flex justify-center'>
                <button className='btn bg-primary px-10 py-1 rounded-full text-white hover:bg-accent'>
                    <Link to='/find-doctor'>
                        Find Doctor
                    </Link>
                </button>

            </div>


        </div>
    );
};

export default OnlineAppointment;