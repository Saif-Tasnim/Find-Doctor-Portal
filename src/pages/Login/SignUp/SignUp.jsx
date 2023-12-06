import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form"
import { FaRegEyeSlash } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [show, isShow] = useState(false)
    const [conShow, isConShow] = useState(false)
    const { signUp, updateData } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    let fullName = "";
    const from = location.state?.from?.pathname || '/';
    const [btnClick, setBtnClick] = useState(false);


    const onSubmit = (data) => {
        setBtnClick(true);

        if (data.password !== data.conPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password did not match",
            });
        }

        if (data.phone.length !== 11) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Phone number is not correct",
            });
        }

        fullName = `${data.firstName} ${data.lastName}`;

        //TODO : AJAX query for storing into db
        signUp(data.email, data.password)
            .then(() => {
                updateData(fullName)
                    .then(() => {
                        Swal.fire({
                            title: "Good job!",
                            text: "Account Created",
                            icon: "success"
                        });

                        navigate(from, { replace: true });
                        setBtnClick(false);
                        reset();

                    })
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,
                });
                setBtnClick(false);
            })
    };

    return (

        <section className='mt-9'>
            <h1 className='text-3xl font-bold text-primary mb-8'> Create Account ! </h1>

            <form className='bg-white rounded-xl px-12 py-8 mb-4'
                onSubmit={handleSubmit(onSubmit)} >

                {/* name part */}
                <div className='flex flex-col space-y-2 mb-0 md:space-y-0 md:flex-row md:gap-5 md:mb-4 '>
                    {/* first name */}
                    <div className='w-full'>
                        <label className="form-control w-full max-w-lg my-5">
                            <div className="label mb-1 font-semibold opacity-80">
                                <span className="label-text text-lg"> First Name </span>
                            </div>
                            <input type="text" placeholder="Your First Name"
                                className="input input-bordered input-primary w-full"
                                {...register("firstName", { required: true })}
                            />
                            {errors.firstName?.type === "required" && (
                                <p role="alert" className='text-red-500 pt-2'> First name is required </p>
                            )}
                        </label>
                    </div>
                    {/* last name */}
                    <div className='w-full'>
                        <label className="form-control w-full max-w-lg my-5">
                            <div className="label mb-1 font-semibold opacity-80">
                                <span className="label-text text-lg"> Last Name </span>
                            </div>
                            <input type="text" placeholder="Your Last Name"
                                className="input input-bordered input-primary w-full"
                                {...register("lastName", { required: true })}
                            />
                            {errors.lastName?.type === "required" && (
                                <p role="alert" className='text-red-500 pt-2'> Last name is required </p>
                            )}
                        </label>
                    </div>
                </div>

                {/* contact part */}
                <div className='flex flex-col space-y-2 mb-0 md:space-y-0 md:flex-row md:gap-5 md:mb-4'>
                    {/* email */}
                    <div className='w-full'>
                        <label className="form-control w-full max-w-lg my-5">
                            <div className="label mb-1 font-semibold opacity-80">
                                <span className="label-text text-lg"> Email </span>
                            </div>
                            <input type="email" placeholder="Your Email"
                                className="input input-bordered input-primary w-full"
                                {...register("email", { required: true })}
                            />
                            {errors.email?.type === "required" && (
                                <p role="alert" className='text-red-500 pt-2'> Email is required </p>
                            )}
                        </label>
                    </div>

                    {/* phone */}
                    <div className='w-full'>
                        <label className="form-control w-full max-w-lg my-5">
                            <div className="label mb-1 font-semibold opacity-80">
                                <span className="label-text text-lg"> Phone </span>
                            </div>
                            <input type="text" placeholder="Cell No"
                                className="input input-bordered input-primary w-full"
                                {...register("phone", { required: true })}
                            />
                            {errors.phone?.type === "required" && (
                                <p role="alert" className='text-red-500 pt-2'> Phone is required </p>
                            )}
                        </label>
                    </div>
                </div>

                {/* password part */}
                <div className='flex flex-col space-y-2 mb-0 md:space-y-0 md:flex-row md:gap-5 md:mb-4 '>

                    {/* password */}
                    <div className='w-full'>
                        <label className="form-control w-full max-w-lg my-5">
                            <div className="label mb-1 font-semibold opacity-80">
                                <span className="label-text text-lg"> Password
                                </span>
                            </div>
                            <div className='relative'>
                                <input type={show ? "text" : "password"} placeholder="Password"
                                    className="input input-bordered input-primary w-full"
                                    {...register('password')}
                                    required
                                />

                                <FaRegEyeSlash className={`absolute right-2 top-[35%] hover:cursor-pointer ${show ? "opacity-100" : "opacity-50"}`}
                                    onClick={() => { isShow(!show) }}
                                />
                            </div>
                        </label>
                    </div>

                    {/* confirm password */}
                    <div className='w-full'>
                        <label className="form-control w-full max-w-lg my-5">
                            <div className="label mb-1 font-semibold opacity-80">
                                <span className="label-text text-lg"> Confirm Password </span>
                            </div>
                            <div className='relative'>
                                <input type={conShow ? "text" : "password"} placeholder="Password" className="input input-bordered input-primary w-full"
                                    {...register('conPassword')}
                                    required
                                />
                                <FaRegEyeSlash className={`absolute right-2 top-[35%] hover:cursor-pointer ${conShow ? "opacity-100" : "opacity-50"}`}
                                    onClick={() => { isConShow(!conShow) }}
                                />
                            </div>
                        </label>
                    </div>
                </div>
                {/* button */}
                <button type='submit' className='btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full md:w-1/3 my-5'
                    disabled={btnClick}
                > Sign Up </button>

            </form>
        </section>
    );
};

export default SignUp;