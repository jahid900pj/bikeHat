import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Context/AuthProvider';
import useJwtToken from '../../../hooks/useJwtToken';
import SocialLogin from '../SocalLogin/SocalLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loginError, setLoginError] = useState('')
    const { login } = useContext(AuthContext)
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useJwtToken(loginUserEmail)

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/"

    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        login(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                setLoginUserEmail(data.email)

                // navigate(from, { replace: true });

            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
            })
    }

    if (token) {
        navigate(from, { replace: true });
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 rounded-md shadow-2xl'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs"{...register("email", { required: "Email Address is required" })} />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"{...register("password",
                        {
                            required: "Password Address is required",
                            minLength: { value: 6, message: 'password must be 6 characters' }
                        })} />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text">Forget password </span>
                    </label>
                    {loginError && <p className='text-red-600' role="alert">{loginError}</p>}
                    <input className='btn btn-primary w-full max-w-xs' value='Login' type="submit" />
                </form>
                <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>

                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;