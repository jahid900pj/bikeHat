import React from 'react';

const BikeBlogs = () => {
    return (
        <section class="py-10">
            <h1 class="mb-12 text-center font-sans text-5xl font-bold mt-10">Our Blog</h1>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 justify-items-center">

                <article class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <a href="#">
                        <img src="https://htmldemo.net/oswan/oswan/assets/img/blog/blog-hm-3.jpg" class="h-56 w-full object-cover" alt="" />
                        <div class="flex-auto px-6 py-5">
                            <span class="mb-2 flex items-center text-sm font-semibold">
                                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" /></svg>
                                Awards</span
                            >
                            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">We came first in Awwwards ceremony 2021</h3>
                            <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
                            <span class="inline-block cursor-pointer select-none rounded-full border border-primary bg-primary px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Learn More</span>
                        </div>
                    </a>
                </article>

                <article class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <a href="#">
                        <img src="https://htmldemo.net/oswan/oswan/assets/img/banner/banner-3.jpg" class="h-56 w-full object-cover" alt="" />
                        <div class="flex-auto px-6 py-5">
                            <span class="mb-2 flex items-center text-sm font-semibold">
                                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" /></svg>
                                Awards</span
                            >
                            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">We came first in Awwwards ceremony 2021</h3>
                            <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
                            <span class="inline-block cursor-pointer select-none rounded-full border border-primary bg-primary px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Learn More</span>
                        </div>
                    </a>
                </article>

                <article class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <a href="#">
                        <img src="https://htmldemo.net/oswan/oswan/assets/img/banner/banner-2.jpg" class="h-56 w-full object-cover" alt="" />
                        <div class="flex-auto px-6 py-5">
                            <span class="mb-2 flex items-center text-sm font-semibold">
                                <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" /></svg>
                                Awards</span
                            >
                            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">We came first in Awwwards ceremony 2021</h3>
                            <p class="mb-4 text-base font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.</p>
                            <span class="inline-block cursor-pointer select-none rounded-full border border-primary bg-primary px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Learn More</span>
                        </div>
                    </a>
                </article>
            </div>
        </section>

    );
};

export default BikeBlogs;