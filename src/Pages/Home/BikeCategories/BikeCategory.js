import React from 'react';
import { Link } from 'react-router-dom';

const BikeCategory = ({ bikeCategory }) => {
    const { description, img, title, category_id
    } = bikeCategory
    // console.log(bikeCategory)
    return (

        <div className="card w-96 bg-base-100 shadow-2xl">
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
        </div>

    );
};

export default BikeCategory;