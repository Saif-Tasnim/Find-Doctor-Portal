import React from 'react';
import img from '../../assets/AppImage/app_img.svg';
import appStoreImg from '../../assets/AppImage/apple_app.png';
import googleStoreImg from '../../assets/AppImage/google_play_app.png';
import './FindApp.css';

const FindApp = () => {
    return (
        <section className='find-app-bg flex flex-col space-y-20 px-7 py-5 md:flex-row md:space-y-0 md:justify-evenly md:items-center md:px-10 md:py-28 bg-fixed'>

            {/* left image */}
            <div className='w-full'>
                <img src={img} alt="" className='w-3/4' />
            </div>

            {/* right content */}
            <div className='w-full text-white'>
                <h4 className='opacity-60 font-semibold uppercase pb-1 text-xs md:text-base'>Application</h4>

                <h1 className='text-xl md:text-4xl font-semibold pb-4'>Download <span className='text-yellow-500'>Findoctor App</span> Now!</h1>

                <p>Tota omittantur necessitatibus mei ei. Quo paulo perfecto eu, errem percipit ponderum no eos. Has eu mazim sensibus. Ad nonumes dissentiunt qui, ei menandri electram eos. Nam iisque consequuntur cu.</p>


                <div className='pt-10 flex flex-col space-y-8 md:space-y-0 md:flex-row md:gap-10'>
                    <img src={appStoreImg} alt="" className='w-36' />
                    <img src={googleStoreImg} alt="" className='w-36' />
                </div>

            </div>
        </section>
    );
};

export default FindApp;