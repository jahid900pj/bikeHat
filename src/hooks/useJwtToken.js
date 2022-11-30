import { useEffect, useState } from "react";

const useJwtToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)

                    }
                })
        }
    }, [email])
    return [token]
}
export default useJwtToken;