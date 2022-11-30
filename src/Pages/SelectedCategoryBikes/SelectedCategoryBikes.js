import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import SelectedCategoryBike from './SelectedCategoryBike';

const SelectedCategoryBikes = () => {
    const [booking, setBooking] = useState(null)
    const bikes = useLoaderData()

    // function refreshPage() {
    //     window.location.reload(false);
    // }
    return (
        <div className='max-w-[1340px] mx-auto'>
            <div className='gap-8'>

                {
                    bikes.map(bike =>
                        <SelectedCategoryBike
                            key={bike._id}
                            bike={bike}
                            setBooking={setBooking}
                        >
                        </SelectedCategoryBike>)
                }
                {
                    <div>
                        {
                            booking && <BookingModal setBooking={setBooking} booking={booking}></BookingModal>
                        }

                    </div>
                }
            </div>
        </div>
    );
};

export default SelectedCategoryBikes;