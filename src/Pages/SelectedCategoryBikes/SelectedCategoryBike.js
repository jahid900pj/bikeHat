import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';

const SelectedCategoryBike = ({ bike }) => {
    const [booking, setBooking] = useState({ bike })
    const { phoneNumber, condition, description, location, img, original_price, published_date, resale_price, seller, title, used, category_id, _id, } = bike
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-16">
            <div className='lg:w-[500px]'>
                <figure><img className='lg:w-[600px] lg:h-full' src={img} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-secondary">Bike Name : {title}</h2>
                <p className=''>{description}</p>
                <h5 className='text-info'>Original Price : $ {original_price}</h5>
                <h5 className='text-xl'>Resale Price : $ {resale_price}</h5>
                <p className='text-info'>location : {location}</p>
                <p className='text-info'>posted : {published_date}</p>
                <p className='text-info'>Published by : {seller}</p>


                <div className='md:flex md:justify-between'>
                    <div>
                        <p className='text-info '>used : {used}</p>
                        <p className='text-info'>Condition  : {condition}</p>
                        <p className='text-info'>Published by : {phoneNumber}</p>
                    </div>
                    <div className="card-actions justify-start mt-2">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary "
                        > Book Now
                        </label>
                    </div>
                </div>



                <div>
                    {
                        booking && <BookingModal setBooking={setBooking} bike={bike}></BookingModal>
                    }

                </div>
            </div>
        </div>

    );
};

export default SelectedCategoryBike;