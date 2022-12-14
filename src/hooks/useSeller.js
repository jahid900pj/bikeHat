const { useState, useEffect } = require("react")

const useSeller = (email) => {
    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    const [isVerify, setIsVerify] = useState(false)
    // console.log('verify', isVerify)
    // console.log('seller', isSeller)
    useEffect(() => {
        if (email) {
            fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsSeller(data.isSeller)
                    setIsSellerLoading(false)
                    setIsVerify(data.users.verified)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading, isVerify]
}

export default useSeller;