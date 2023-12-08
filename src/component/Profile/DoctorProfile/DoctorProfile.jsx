import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Skeleton from '../../Common/Skeleton/Skeleton';

const DoctorProfile = () => {
    const { user } = useContext(AuthContext);

    const { data: doctor = {} , isLoading} = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/doctor-profile?email=${user?.email}`)

            return res.data;
        }
    })

    if(isLoading){
        return <Skeleton></Skeleton>
    }

    return (
        <section>
            <h1 className='text-center text-2xl font-semibold border-b-2 border-primary my-10 py-10'> Your All Appointments </h1>

            {/* table */}
            <div className="overflow-x-auto mx-14">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='bg-primary text-white text-md'>
                            <th>#</th>
                            <th> Client Name </th>
                            <th> Booking Date </th>
                            <th> Booking Time </th>
                            <th> Problem </th>
                            <th> Hospital </th>
                            <th> Location </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            doctor?.map((dt, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{dt?.clientName}</td>
                                    <td>{dt?.date}</td>
                                    <td>{dt?.time}</td>
                                    <td>{dt?.problem}</td>
                                    <td>{dt?.hospital}</td>
                                    <td>{dt?.location}</td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DoctorProfile;