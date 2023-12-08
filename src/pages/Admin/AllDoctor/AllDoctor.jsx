import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const AllDoctor = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/get-doctors")
            console.log(res.data)
            return res.data;
        }

    })


    return (
        <div className='w-full mx-7'>
            <h1 className='text-center my-20 py-9 text-3xl font-semibold border-b-2 border-primary'> All Doctors List </h1>

            {/* table data */}

            <div className="overflow-x-auto w-full">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className='text-lg'>
                            <th>#</th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Position </th>
                            <th> Location </th>
                            <th> Hospital </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            users.map((user, idx) =>
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td> {user?.name} </td>
                                    <td> {user?.email} </td>
                                    <td>{user?.position}</td>
                                    <td>{user?.location}</td>
                                    <td>{user?.hospital}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllDoctor;