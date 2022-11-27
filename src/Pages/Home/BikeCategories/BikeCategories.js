import React from 'react';
import { useQuery } from '@tanstack/react-query'
import BikeCategory from './BikeCategory';

const BikeCategories = () => {


    const { data: bikeCategories = [], refetch, isLoading } = useQuery({
        queryKey: ['bikeCategories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bikeCategories`)
            const data = await res.json()
            // console.log(data)
            return data
        }
    })

    return (
        <div>
            <div>
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