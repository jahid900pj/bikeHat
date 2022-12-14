import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const uri = `https://server-side-assigment-12-jahid900pj.vercel.app/allSellers`

    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch(uri, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            // console.log(data)
            return data
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    toast.success('Admin make successfully')
                    refetch()
                }
            })
    }

    const handleMakeVerify = (id) => {
        fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/users/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    toast.success('Verified successfully')
                    refetch()
                }
            })
    }


    const handleDeleteBuyer = (seller) => {
        // console.log()
        fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${seller.name} deleted  successfully`)

                }

            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th> Name</th>
                            <th>Email</th>
                            <th>Verified</th>
                            {/* <th>Admin</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allSellers.map((seller, i) =>
                                <tr key={seller._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>

                                    <td>
                                        {seller?.verified ? <button className="btn btn-sm btn-primary">Verified</button> :
                                            <button onClick={() => handleMakeVerify(seller._id)} className="btn btn-sm btn-primary">Make Verify</button>
                                        }
                                    </td>

                                    {/* <td>  {seller?.role ? <button className="btn btn-sm btn-secondary">Admin</button> : <button onClick={() => handleMakeAdmin(seller._id)} className="btn btn-sm btn-secondary">Make admin</button>}</td> */}

                                    <td> <button onClick={() => handleDeleteBuyer(seller)} className="btn btn-sm btn-error">Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;