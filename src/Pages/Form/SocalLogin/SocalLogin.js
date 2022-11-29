import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const SocialLogin = () => {
    const { googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {

        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })

    }
    return (
        <div>
            <button onClick={handleGoogleSingIn} className="btn btn-outline w-full max-w-xs ">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;