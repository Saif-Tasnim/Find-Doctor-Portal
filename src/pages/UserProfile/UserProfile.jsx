import React, { useContext, useEffect, useState } from 'react';
import useDoctor from '../../hooks/useDoctor';
import DoctorProfile from '../../component/Profile/DoctorProfile/DoctorProfile';
import useClient from '../../hooks/useClient';
import ClientProfile from '../../component/Profile/ClientProfile/ClientProfile';
import { AuthContext } from '../../auth/AuthProvider/AuthProvider';
import Skeleton from '../../component/Common/Skeleton/Skeleton';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [info, setInfo] = useState(null)
    const [client , setClient] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/doctor?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    return (
        <section className='my-20'>
            {
                info ?
                    <DoctorProfile></DoctorProfile>
                    :
                    <ClientProfile></ClientProfile>
            }
        </section>
    );
};

export default UserProfile;