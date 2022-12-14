import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useJwtToken from '../../../hooks/useJwtToken';
import SocialLogin from '../SocalLogin/SocalLogin';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signupError, setSignupError] = useState('');
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useJwtToken(createdUserEmail)

    const handleSignup = data => {
        console.log(data)
        setSignupError('')
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                toast.success('user created successfully')
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUserDb(data.name, data.email, data.seller)
                    })
                    .catch(err => { console.log(err) })
            })
            .catch(err => {
                setSignupError(err.message)

                console.log(err)
            })
    }

    const saveUserDb = (name, email, seller) => {
        const user = { name, email, seller }
        fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data)
                setCreatedUserEmail(email)
                reset()


            })
    }


    if (token) {
        navigate('/')
    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 rounded-md shadow-2xl'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: 'name is required',
                        maxLength: { value: 20, message: 'name length  max 20 character' }
                    })}
                        type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", {
                            required: 'Email is required',

                        })}
                        type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}


                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password",
                        {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'password must be 6 characters' },
                            pattern: { value: /(?=.*[A-Z].*[A-Z])/, message: 'password must have two uppercase' }
                        })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                    <label className="label cursor-pointer">
                        <span className="label-text">Click for seller account</span>
                        <input type="checkbox" {...register('seller', {})} className="checkbox checkbox-primary" />
                    </label>


                    {signupError && <p className='text-red-600' role="alert">{signupError}</p>}


                    <input className='btn btn-primary w-full max-w-xs mt-6' value='Sign Up' type="submit" />
                </form>
                <p>Already have an account ?<Link className='text-secondary' to='/login'>login</Link></p>

                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;