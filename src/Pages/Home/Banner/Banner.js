import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full ">
                        <img style={{ height: '650px' }} src="https://i.ibb.co/hmD90D4/croud-banner.jpg" className="w-full " alt='' />
                        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5  top-3/4">
                            <h2 className='text-3xl text-slate-200'>Cruiser Bike</h2>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full ">
                        <img style={{ height: '650px' }} src="https://i.ibb.co/0y7cFnP/naked-banner.jpg" className="w-full" alt='' />
                        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5  top-3/4">
                            <h2 className='text-3xl text-slate-200'>Naked Bike</h2>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img style={{ maxHeight: '650px' }} src="https://i.ibb.co/QKNB29Q/sports-banner.jpg" className="w-full " alt='' />
                        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5  top-3/4">
                            <h2 className='text-3xl text-slate-200'>Sports Bike</h2>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;