import React from 'react';
import img from '../../../assets/Entry/login.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './MainSignIn.css'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const MainSignIn = () => {
    return (
        <section className='md:py-24 md:px-20 flex flex-col space-y-10 md:flex-row md:justify-center md:gap-16 bg-[#F5F8FA]'>

            <div className='w-full md:w-4/5 flex items-center'>
                <img src={img} alt="" className='w-full rounded-lg shadow-lg' />
            </div>


            {/* tabs section */}
            <div className='w-full text-center'>
                <Tabs>
                    <TabList role="tablist" className="tabs tabs-boxed">
                        <Tab role="tab" className="tab transition-all duration-500 h-11 text-lg font-bold"> Sign In </Tab>
                        <Tab role="tab" className="tab transition-all duration-500 h-11 text-lg font-bold"> Sign Up </Tab>
                    </TabList>

                    <TabPanel>
                        <SignIn></SignIn>
                    </TabPanel>
                    <TabPanel>
                        <SignUp></SignUp>
                    </TabPanel>
                </Tabs>
            </div>

        </section>
    );
};

export default MainSignIn;