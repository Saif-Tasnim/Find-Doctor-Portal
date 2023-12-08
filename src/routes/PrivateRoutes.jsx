import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Skeleton from '../component/Common/Skeleton/Skeleton';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Skeleton></Skeleton>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace> </Navigate>
};

export default PrivateRoutes;