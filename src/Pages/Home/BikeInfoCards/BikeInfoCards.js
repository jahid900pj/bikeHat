import React from 'react';
import BikeInfoCard from './BikeInfoCard';

const BikeInfoCards = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Warranty',
            description: "If there is any problem with the bike within two days of purchase we do not refund it"
            ,

        },
        {
            id: 2,
            name: 'Free Service',
            description: " If you buy a bike from us, we will give you six months of free service"
            ,

        },
        {
            id: 3,
            name: "facility",
            description: "We offer bikes on loan if you are interested"
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl mb-3'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5'>
                {
                    servicesData.map(service => <BikeInfoCard key={service.id}
                        service={service}></BikeInfoCard>)
                }
            </div>
        </div>
    );
};

export default BikeInfoCards;