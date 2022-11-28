import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SelectedCategoryBike from './SelectedCategoryBike';

const SelectedCategoryBikes = () => {
    const bikes = useLoaderData()
    console.log(bikes)

    return (
        <div className='max-w-[1340px] mx-auto'>
            <div className='gap-8'>
                {
                    bikes.map(bike =>
                        <SelectedCategoryBike
                            key={bike._id}
                            bike={bike}
                        >
                        </SelectedCategoryBike>)
                }
            </div>
        </div>
    );
};

export default SelectedCategoryBikes;