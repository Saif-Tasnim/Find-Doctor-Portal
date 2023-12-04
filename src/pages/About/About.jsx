import React from 'react';
import FindDoctor from '../../component/About/FindDoctor/FindDoctor';
import Founders from '../../component/About/Founders/Founders';
import PeopleSays from '../../component/About/PeopleSays/PeopleSays';
import WhyChoose from '../../component/About/WhyChooseUs/WhyChooseUs';

const About = () => {
    return (
        <section className='mt-20'>

            {/* breedcrambs */}
            <div className="text-sm breadcrumbs bg-[#3f4079] w-full px-20 py-7 text-white">
                <ul>
                    <li className='hover:text-cyan-600 duration-500'><a>Home</a></li>
                    <li className='hover:text-cyan-600 duration-500'><a> Category </a></li>
                    <li className='opacity-70'> page active </li>
                </ul>
            </div>

             {/* about find Doctor */}
            <FindDoctor></FindDoctor>

            {/* founder component */}
            <Founders></Founders>

            {/* people says */}
            <PeopleSays></PeopleSays>

            {/* why choose us */}
            <WhyChoose></WhyChoose>

        </section>

    );
};

export default About;