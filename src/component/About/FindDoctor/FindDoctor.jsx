import React from 'react';
import image from '../../../assets/About/FinDOctor/about_1.jpg';
import CommonTitle from '../../Common/CommonTitle/CommonTitle';

const FindDoctor = () => {

    return (

        <div className='my-28'>

            <CommonTitle
                title="About Findoctor"
                para="Cum doctus civibus efficiantur in imperdiet deterruisset."
            ></CommonTitle>

            <div className='py-20 w-full mx-auto flex flex-col md:flex-row md:justify-center gap-28'>
                {/* left part */}
                <div className='w-full md:w-1/2 md:ml-12'>
                    <img src={image} alt="" />
                </div>

                {/* right part */}
                <div className='w-full md:w-1/3 md:mr-7'>
                    <p>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos scaevola probatus. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>
                    
                    <p className='pt-7'>Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos scaevola probatus. Nam atqui intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto pertinax, at cum malis vitae facilisis.</p>

                    <p className='italic pt-9'>CEO Marc Schumaker</p>
                </div>
            </div>
        </div>
    );
};

export default FindDoctor;