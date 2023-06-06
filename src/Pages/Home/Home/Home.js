import React from 'react';
import Banner from '../Banner/Banner';
import BikeCategories from '../BikeCategories/BikeCategories';
import BikeInfoCard from '../BikeInfoCards/BikeInfoCard';
import BikeInfoCards from '../BikeInfoCards/BikeInfoCards';
import OSWAN from '../OSWAN/OSWAN';
import BikeBlogs from '../BikeBlogs/BikeBlogs';
import FAQ from '../FAQ/FAQ';
import ACCESSORIES from '../ACCESSORIES/ACCESSORIES';
import Review from '../Reivew/Review';
import Subscribe from '../Subscribe/Subscribe';
import BikeGallery from '../BikeGallery/BikeGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-[1240px] mx-auto'>
                <OSWAN></OSWAN>

                <BikeCategories></BikeCategories>
                <BikeInfoCards></BikeInfoCards>
                <ACCESSORIES></ACCESSORIES>
                <BikeBlogs></BikeBlogs>
                <Review></Review>
                <BikeGallery></BikeGallery>
                <Subscribe></Subscribe>
            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;