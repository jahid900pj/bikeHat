import React from 'react';
import { Link } from 'react-router-dom';

const BikeCategory = ({ bikeCategory }) => {
    const { description, img, title, category_id
    } = bikeCategory
    // console.log(bikeCategory)
    return (

        <article class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
            <a href="#">
                <img src={img} class="h-56 w-full object-cover" alt="" />
                <div class="flex-auto px-6 py-5">
                    <span class="mb-2 flex items-center text-sm font-semibold text-primary">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" /></svg>
                        Awards</span
                    >
                    <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl ">{title}</h3>
                    <p class="mb-4 text-base font-light ">{description}</p>
                    {/* <span class="inline-block cursor-pointer select-none rounded-full border border-primary bg-primary px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">Learn More</span> */}
                    <Link
                        className="btn btn-primary w-full max-w-xs text-white"
                        to={`/bikes/${category_id}`}>
                        Get Bikes
                    </Link>
                </div>
            </a>


            {/* <div className="card w-96 bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                    <Link
                        className="btn btn-secondary w-full max-w-xs"
                        to={`/bikes/${category_id}`}>
                        Get Bikes
                    </Link>


                </div>
            </div> */}
        </article>



    );
};

export default BikeCategory;