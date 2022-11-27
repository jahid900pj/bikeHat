import React from 'react';

const BikeInfoCard = ({ service }) => {
    const { description, name } = service;
    return (
        <div className="card bg-secondary text-white  shadow-xl">
            {/* bg-base-100 */}
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BikeInfoCard;