import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const uri = `http://localhost:5000/bikeBooking?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
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
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>location</th>
                            <th>Seller</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((booking, i) =>
                                <tr key={booking._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking.bikeName}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.MeetingLocation}</td>
                                    <td>{booking.sellerName}</td>
                                    <td> <button className="btn btn-sm btn-primary">Delete</button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;