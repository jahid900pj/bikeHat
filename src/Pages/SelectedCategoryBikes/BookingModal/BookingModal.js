import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ bike, setBooking }) => {
    const { user } = useContext(AuthContext)
    const { description, location, img, original_price, published_date, resale_price, seller, title, used, category_id, _id, } = bike
    // const [booking, setBooking] = useState(null)

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        // const patientName = form.name.value;
        const name = form.name.value
        const email = form.email.value;
        const bikeName = form.title.value;
        const price = form.price.value;
        const MeetingLocation = form.location.value;
        const phone = form.phone.value;


        const booking = {
            name: name, email: email, bikeName: bikeName, price: price,
            MeetingLocation: MeetingLocation, phone: phone, sellerName: seller
        }
        console.log(booking)

        fetch('http://localhost:5000/bikeBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBooking(null)
                    toast.success('Booking Conform')
                }
                else {
                    toast.error(data.message)
                }

            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-1">{title}</h3>

                    <form onSubmit={handleBooking} className='grid gap-2'>

                        <input defaultValue={user?.displayName} disabled name='name' type="text" placeholder="Name" className="input input-bordered w-full" />

                        <input defaultValue={user?.email} disabled type="text" placeholder="email" name='email' className="input input-bordered w-full" />

                        <input defaultValue={title} disabled type="text" placeholder="Bike Name" name='title' className="input input-bordered w-full" />

                        <input defaultValue={`$${original_price}`} disabled type="text" placeholder="price" name='price' className="input input-bordered w-full" />

                        <input type="text" placeholder="Meeting location" name='location' className="input input-bordered w-full" required />

                        <input type="text" placeholder="phone" name='phone' className="input input-bordered w-full" required />

                        <input className='btn btn-primary input input-bordered w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;