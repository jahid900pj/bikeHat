import React from 'react';
import Banner from '../Banner/Banner';
import BikeCategories from '../BikeCategories/BikeCategories';
import BikeInfoCard from '../BikeInfoCards/BikeInfoCard';
import BikeInfoCards from '../BikeInfoCards/BikeInfoCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1440px] mx-auto'>
                <BikeInfoCards></BikeInfoCards>
                <BikeCategories></BikeCategories>
            </div>

        </div>
    );
};

export default Home;