import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/myProducts/${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json()
                // console.log('my products', data)
                return data
            }
            catch (err) {
                console.log(err)
            }
        }
    })


    const handleDelete = (product) => {
        // console.log()
        fetch(`http://localhost:5000/myProduct/${product._id}`, {
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
                    toast.success(` deleted  successfully`)

                }

            })

    }


    return (
        <div className='mt-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>delete</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            myProducts.map((product, i) =>
                                <tr key={product._id} className="hover">
                                    <th>{i + 1}</th>
                                    {console.log(product._id)}
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 ring ring- secondary rounded-full">
                                                <img src={product.img} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.title}</td>
                                    <td>$ {product.resale_price}</td>

                                    <td> <button onClick={() => handleDelete(product)} className="btn btn-sm btn-error">Delete</button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;