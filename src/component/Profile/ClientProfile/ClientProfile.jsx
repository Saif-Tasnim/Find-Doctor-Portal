import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';
import Skeleton from '../../Common/Skeleton/Skeleton';

const ClientProfile = () => {
    const { user } = useContext(AuthContext);

    const { data: client = {}, isLoading } = useQuery({
        queryKey: ['client'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/user-profile?email=${user?.email}`)

            return res.data;
        }
    })

    if (isLoading) {
        return <Skeleton></Skeleton>
    }

    return (
        <section>
            <h1 className='text-center text-2xl font-semibold border-b-2 border-primary my-10 py-10'> Here is your all booking </h1>

            {/* table */}
            <div className="overflow-x-auto mx-14">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='bg-primary text-white text-md'>
                            <th>#</th>
                            <th> Doctor Name </th>
                            <th>  Date </th>
                            <th>  Time </th>
                            <th> Problem </th>
                            <th> Hospital </th>
                            <th> Location </th>
                            <th> Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            client?.map((dt, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{dt?.doctorName}</td>
                                    <td>{dt?.date}</td>
                                    <td>{dt?.time}</td>
                                    <td>{dt?.problem}</td>
                                    <td>{dt?.hospital}</td>
                                    <td>{dt?.location}</td>
                                    <td>$ {dt?.price}</td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ClientProfile;