import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../../assets/Banner/banner-1.jpg'
import banner2 from '../../../assets/Banner/banner-2.jpg'
import banner3 from '../../../assets/Banner/banner-3.jpg'

const Banner = () => {

    const content = [
        {
            img: banner1,
            textUp: "Choose A Doctor",
            textBottom: "Or Clinic !"
        },
        {
            img: banner2,
            textUp: "Book Online",
            textBottom: "Your Visit !"
        },
        {
            img: banner3,
            textUp: "Feel Good",
            textBottom: "And Happy !"
        },
    ]


    return (

        <div className='mt-20 h-screen max-w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-screen"
            >
                {
                    content.map((ct, index) => (
                        <SwiperSlide
                            key={index}
                            className='h-screen w-full scale-125 transition-all duration-[3000ms]'
                            style={{
                                backgroundImage: `url(${ct.img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >


                            <h2 className='absolute top-[40%] left-16 text-3xl md:left-28 font-bold md:text-5xl text-blue-900 uppercase'>{ct.textUp}</h2>
                            <h2 className='absolute top-[47%] md:top-[50%] left-16 text-3xl  md:left-28 font-bold md:text-5xl text-blue-900 uppercase'>{ct.textBottom}</h2>

                        </SwiperSlide>
                    ))

                }
            </Swiper>
        </div>
    );
};

export default Banner;