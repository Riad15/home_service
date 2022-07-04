import React from 'react';
const FeatureCard = (props) => {
    const { title, about, icon } = props.data;
    return (
        <div>
            <div className="card m-2 w-10/12 bg-green-200 shadow-xl mx-auto">
                <figure className="px-5  py-2">
                    <img src={icon} alt="" className="h-40 w-40 rounded-full text-orange-400" />
                </figure>
                <div className="card-body px-2 h-48 py-1 items-center text-center">
                    <h2 className="card-title font-bold text-gray-700">{title}</h2>
                    <p className='text-gray-500 text-justify'>{about}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;