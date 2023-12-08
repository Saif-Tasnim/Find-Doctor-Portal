import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import CommonTitle from '../../Common/CommonTitle/CommonTitle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const MostViewedDoctor = () => {

    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/get-doctors")
            return res.data;
        }

    })

    return (

        <div className='py-28'>

            {/* component title  */}
            <CommonTitle
                title="MOST VIEWED DOCTORS"
                para="Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri."
            ></CommonTitle>

            {/* doctor info slider */}
            <Swiper

                slidesPerView={4}
                spaceBetween={300}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper w-[80%] mx-auto"
            >
                {
                    data?.map((d, index) => <SwiperSlide key={index}>

                        {/* card content */}
                        <div className="my-16 border-2 rounded-lg w-[280px] h-[350px] relative">
                            <Link to={`/single-doctor-details/${d._id}`}>
                                <img src={d.image} alt="" className='h-full w-full' />

                                <div className='absolute bottom-0 bg-[#3f4079] text-white left-6 right-6 px-2 py-2'>
                                    <h1 className='text-center font-semibold'>{d.name}</h1>
                                    <p className='text-sm italic text-center'>{d.position}</p>
                                </div>
                            </Link>

                        </div>

                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
    );
};

export default MostViewedDoctor;
