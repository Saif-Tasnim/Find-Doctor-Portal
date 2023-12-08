import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useClient = () => {
    const { user } = useContext(AuthContext)

   const { data: client = {} } = useQuery({
        queryKey: ['client'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/user?email=${user?.email}`)
            return res.data
        }
    })

    return client;
};

export default useClient;