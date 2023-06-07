import React from 'react';

const BikeGallery = () => {
    return (
        <div>
            <div>

            </div>
            <div class="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
                <h2 className='text-center text-4xl text-primary font-bold mb-16'>Bike Gallery</h2>
                <div class="flex flex-col md:flex-row gap-2">
                    <div class="flex flex-1 flex-col gap-2">
                        <div class="flex flex-1 flex-col">
                            <img class="object-cover h-full" src="https://htmldemo.net/oswan/oswan/assets/img/banner/banner-2.png" />
                        </div>
                        <div class="hidden md:flex flex-1 flex-row gap-2">
                            <div class="flex flex-1 flex-col">
                                <img class="object-cover h-full" src="https://htmldemo.net/oswan/oswan/assets/img/banner/banner-1.jpg" />
                            </div>
                            <div class="hidden md:flex flex-1 flex-col">
                                <img class="object-cover h-full" src="https://htmldemo.net/oswan/oswan/assets/img/banner/banner-2.jpg" />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col gap-2">
                        <div class="hidden md:flex flex-1 flex-row gap-2">
                            <div class="flex flex-1 flex-col">
                                <img class="object-cover h-full" src="https://htmldemo.net/oswan/oswan/assets/img/banner/banner-3.jpg" />
                            </div>
                            <div class="hidden md:flex flex-1 flex-col">
                                <img class="object-cover h-full" src="https://i.ibb.co/LYPDphf/naked-bike-2.jpg" />
                            </div>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <img class="object-cover h-full" src="https://htmldemo.net/oswan/oswan/assets/img/blog/blog-hm-3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeGallery;