import React from 'react';
import { useQuery } from '@tanstack/react-query'
import BikeCategory from './BikeCategory';

const BikeCategories = () => {


    const { data: bikeCategories = [], refetch, isLoading } = useQuery({
        queryKey: ['bikeCategories'],
        queryFn: async () => {
            const res = await fetch(`https://server-side-assigment-12-jahid900pj.vercel.app/bikeCategories`)
            const data = await res.json()
            // console.log(data)
            return data
        }
    })

    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Bikes Collections</h3>
                <h2 className='text-3xl'>Bikes types We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    bikeCategories.map(bikeCategory =>
                        <BikeCategory
                            key={bikeCategory._id}
                            bikeCategory={bikeCategory}
                        >
                        </BikeCategory>)
                }
            </div>

        </div>
    );
};

export default BikeCategories;