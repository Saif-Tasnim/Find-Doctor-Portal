import React, { useContext } from 'react';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const DropDown = () => {
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
         logOut()
         .then(() => {
            Swal.fire({
                title: "LogOut!",
                icon: "success"
              });
         })
    }


    return (
        <details className="dropdown bg-white shadow-none">
            <summary className="m-1 btn bg-transparent border-none hover:bg-white">
                <Avatar></Avatar>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><Link to=''> My Profile </Link></li>
                <li> <button onClick={handleLogOut}> LogOut </button></li>
            </ul>
        </details>
    );
};

export default DropDown;