import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useDoctor = () => {
    const { user } = useContext(AuthContext)

    const { data: doctor = {} } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/doctor?email=${user?.email}`)
            return res.data
        }

    })

    return doctor
};

export default useDoctor;