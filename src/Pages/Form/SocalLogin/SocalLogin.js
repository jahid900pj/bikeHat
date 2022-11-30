import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useJwtToken from '../../../hooks/useJwtToken';

const SocialLogin = () => {
    const { googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [email, setEmail] = useState('')
    const [token] = useJwtToken(email)
    const navigate = useNavigate()

    const handleGoogleSingIn = () => {

        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserDb(user.displayName, user.email)
                console.log(user)

            })
            .catch((error) => {
                console.error(error)
            })

    }

    const saveUserDb = (name, email) => {
        const seller = false
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
                setEmail(email)
            })
    }

    if (token) {
        navigate('/')
    }
    return (
        <div>
            <button onClick={handleGoogleSingIn} className="btn btn-outline w-full max-w-xs ">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;