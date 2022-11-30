import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {

    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/allBuyers`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            // console.log(data)
            return data
        }
    })

    const handleDeleteBuyer = (buyer) => {
        // console.log()
        fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/users/${buyer._id}`, {
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
                    toast.success(`${buyer.name} deleted  successfully`)
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyers.map((buyer, i) =>
                                <tr key={buyer._id} className="hover">
                                    <th>{i + 1}</th>
                                    {console.log('adsfdfjidjaj', buyer._id)}
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td> <button onClick={() => handleDeleteBuyer(buyer)} className="btn btn-sm btn-primary">Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;