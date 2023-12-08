import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const GeneralInfo = ({ data }) => {

    const halfLength = data.Specialist.length / 2;
    const firstHalf = data.Specialist.slice(0, halfLength);
    const secondHalf = data.Specialist.slice(halfLength);

    return (

        <div className='bg-white py-10 px-6'>
            <div className='pb-7'>
                <p className='text-xl font-light'>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>


            {/* professional statement */}
            <div className='my-5 flex flex-col space-y-1 md:space-y-0 md:flex-row md:gap-4'>
                <div className='text-3xl'>
                    <FaRegCircleUser></FaRegCircleUser>
                </div>

                <div>
                    <h1 className='text-xl font-semibold'>Professional statement </h1>

                    <h5 className='opacity-60'>Mussum ipsum cacilds, vidis litro abertis.</h5>

                    <p className='py-6'>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>

                    <h1 className='text-xl font-semibold pb-4'>Specializations</h1>

                    <div className='flex flex-col md:flex-row md:gap-32 opacity-75'>
                        <div>
                            {
                                firstHalf.map(fh => <li>{fh}</li>)
                            }
                        </div>

                        <div>
                            {
                                secondHalf.map(sh => <li>{sh}</li>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <hr className='my-12' />


            {/* education statement */}
            <div className='my-5 flex flex-col space-y-1 md:space-y-0 md:flex-row md:gap-4'>
                <div className='text-3xl'>
                    <LuNewspaper></LuNewspaper>
                </div>

                <div>
                    <h1 className='text-xl font-semibold'>Education </h1>
                    <h5 className='opacity-60'>Mussum ipsum cacilds, vidis litro abertis.</h5>

                    <p className='py-6'>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>

                    <h1 className='text-xl font-semibold pb-4'>Curriculum</h1>

                    <div>
                        {
                            data.education.map(fh => {
                                const splitEducation = fh.split('-')
                                return (
                                    <li key={fh} className='list-none flex gap-2 items-center space-y-2 md:space-y-0 '>
                                        <FaGraduationCap className='opacity-60 md:opacity-40' />
                                        <span className='font-semibold opacity-70'>{splitEducation[0]}</span>
                                        <span> - </span>
                                        <span>{splitEducation[1]}</span>
                                    </li>
                                );
                            })}
                    </div>
                </div>
            </div>

            <hr className='my-12' />


            {/* pricing */}
            <div className='my-5 flex flex-col space-y-1 md:space-y-0 md:flex-row md:gap-4'>
                <div className='text-3xl'>
                    <MdOutlinePayments></MdOutlinePayments>
                </div>

                <div>
                    <h1 className='text-xl font-semibold'>Prices & Payments </h1>
                    <h5 className='opacity-60'>Mussum ipsum cacilds, vidis litro abertis.</h5>

                    <p className='py-6'>Zril causae ancillae sit ea. Dicam veritus mediocritatem sea ex, nec id agam eius. Te pri facete latine salutandi, scripta mediocrem et sed, cum ne mundi vulputate. Ne his sint graeco detraxit, posse exerci volutpat has in.</p>


                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='font-semibold text-base opacity-100 text-black'>Service - Visit</th>

                                    <th className='font-semibold text-base opacity-100 text-black'>Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    data.visit.map((dv, index) =>
                                        <tr key={index}>
                                            <td className='text-base'> {dv.service} </td>
                                            <td> $ {dv.price} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GeneralInfo;