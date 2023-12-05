import React, { useEffect, useState } from 'react';
import SearchingField from '../../component/FindDoctor/SearchingField/SearchingField';


const FindDoctor = () => {
    const [allData, setAllData] = useState([]);

    // useEffect(() => {
    //     fetch('/doctor_data.json')
    //         .then(res => res.json())
    //         .then(data => setAllData(data));
    // }, [])

    return (
        <div className='my-24'>

            <div className='w-full mb-10'>
                <h1 className='bg-[#3f4079] p-6 text-white text-2xl font-semibold text-center'> Find Your Doctor </h1>
            </div>

            <div className='my-14 py-10 text-center'>
                <p className='text-2xl opacity-80'>We are here to help you find your doctor arround your area or your preferred specialization </p>
            </div>

            {/* searching field */}
            <SearchingField
                data={allData}
            ></SearchingField>

            {/* near about your area */}
            {/* <NearAbout></NearAbout> */}

            {/* most popular doctor */}
            {/* <PopularDoctor></PopularDoctor> */}

            <hr />
        </div>
    );
};

export default FindDoctor;