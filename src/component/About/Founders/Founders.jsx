import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import CommonTitle from '../../Common/CommonTitle/CommonTitle';


const Founders = () => {
    const [data, setData] = useState([]);
   
    // useEffect(() => {
    //     fetch('founders_data.json')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])


    return (
        <div className='bg-[#e9ecef] py-28'>

            {/* common title */}
            <CommonTitle
                title="OUR FOUNDERS"
                para="Cum doctus civibus efficiantur in imperdiet deterruisset."
            ></CommonTitle>

            {/* founder info slider */}
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
                            <Link to="">
                                <img src={d.img} alt="" className='h-full' />

                                <div className='absolute bottom-0 bg-[#3f4079] text-white left-6 right-6 px-2 py-2'>
                                    <h1 className='text-center font-semibold'>{d.name}</h1>
                                    <p className='text-sm italic text-center'>{d.profession}</p>
                                </div>
                            </Link>

                        </div>

                    </SwiperSlide>
                    )}
            </Swiper>
        
        </div>
    );
};

export default Founders;