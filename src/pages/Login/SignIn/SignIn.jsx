import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { FaRegEyeSlash } from "react-icons/fa6";
import Swal from 'sweetalert2';
import googleImg from '../../../assets/Entry/search.png';
import { AuthContext } from '../../../auth/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [show, isShow] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        setBtnDisabled(true)

        signIn(data.email, data.password)
            .then(() => {
                if (data.email === "admin@gmail.com") {
                    navigate('/admin-route')
                }
                else {
                    navigate(from, { replace: true });
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err
                });

                setBtnDisabled(false)
            })
    }


    return (

        <section className='mt-9'>
            <h1 className='text-3xl font-bold text-primary mb-8'> Sign In ! </h1>

            <div className='bg-white rounded-xl px-12 py-8 mb-4'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* email */}
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

                    {/* password */}
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

                    <button className='btn bg-primary text-white px-8 py-4 rounded-xl hover:bg-accent w-full md:w-1/3 my-5'
                        disabled={btnDisabled}
                    > Sign In </button>
                </form>


                <div className="divider">OR</div>

                <div>
                    <p className='font-semibold pb-3'> Sign In With ... </p>
                    <img src={googleImg} className='w-8 mt-3 mx-auto hover:cursor-pointer' alt="" />
                </div>
            </div>
        </section>
    );
};

export default SignIn;