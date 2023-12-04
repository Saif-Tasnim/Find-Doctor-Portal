import React from 'react';
import CommonTitle from '../../Common/CommonTitle/CommonTitle';
import LeftUpper from './LeftUpper/LeftUpper';
import SearchCard from './SearchCard/Searchcard';
import RightUpper from './RightUpper/RightUpper';

const DoctorAddress = () => {
    const cityList = ["Albany", "Albuquerque", "Atlanta", "Baltimore", "Baton Rouge", "Birmingham", "Boston", "Buffalo", "Charleston"];

    const typeList = ["Allergist", "Cardiologist", "Chiropractor", "Dentis", "Dermatologist", "Gastroenterologist", "Ophthalmologist", "Optometrist", "Pediatrician"];

    return (
        <section className='pt-28 pb-10 bg-[#f5f8fa]'>

            {/* common title */}
            <CommonTitle
                title="FIND YOUR DOCTOR OR CLINIC"
                para="Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur. Nonumy ponderum oporteat cu mel, pro movet cetero at."
            ></CommonTitle>

            {/* search card */}
            <div className='my-8 flex flex-col w-full space-y-9 md:flex-row md:justify-center md:space-y-0 md:pt-10 md:gap-10 md:w-3/4 md:mx-auto'>

                {/* for left side card */}
                <div className='w-full md:w-1/2'>
                    <LeftUpper></LeftUpper>
                    <SearchCard list={cityList}></SearchCard>
                </div>

                {/* for right side card */}
                <div className='w-full md:w-1/2'>
                    <RightUpper></RightUpper>
                    <SearchCard list={typeList}></SearchCard>
                </div>
            </div>

        </section>
    );
};


export default DoctorAddress;