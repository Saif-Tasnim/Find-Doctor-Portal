import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DoctorIntro from '../../component/DoctorDetails/DoctorIntro/DoctorIntro';
import BookAppointment from '../../component/DoctorDetails/BookAppointment/BookAppointment';
import GeneralInfo from '../../component/DoctorDetails/GeneralInfo/GeneralInfo';
import Reviews from '../../component/DoctorDetails/Reviews/Reviews';

const DoctorDetails = () => {
    const { id } = useParams();

    const { data: singleData = {} } = useQuery({
        queryKey: ['singleData'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/get-single-doctors/${id}`)
            return res.data;
        }

    })


    // console.log(singleData);

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


            {/* doctor site */}
            <div className='flex flex-col space-y-6 md:flex-row md:gap-10 py-14 md:mx-24'>
                {/* doctor intro card */}
                <DoctorIntro data={singleData} />

                {/* tab section */}
                <div className='w-full md:w-2/3'>
                    <Tabs>
                        <TabList role="tablist" className="flex flex-col space-y-2 mb-8 md:flex-row md:mb-0 md:space-y-0 tabs-lifted">

                            <Tab role="tab" className="tab py-1 h-14 text-xl text-blue-500 transition-all ease-in-out duration-700" > Book an appointment
                            </Tab>
                            <Tab role="tab" className="tab py-1 h-14 text-xl text-blue-500 transition-all ease-in-out duration-700"> General info </Tab>
                            <Tab role="tab" className="tab py-1 h-14 text-xl text-blue-500 transition-all ease-in-out duration-700 "> Reviews </Tab>
                        </TabList>

                        <TabPanel>
                            <BookAppointment data={singleData}></BookAppointment>
                        </TabPanel>
                        <TabPanel>
                            <GeneralInfo data={singleData} ></GeneralInfo>
                        </TabPanel>
                        <TabPanel>
                            <Reviews data={singleData}></Reviews>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>


        </section>
    );
};

export default DoctorDetails;