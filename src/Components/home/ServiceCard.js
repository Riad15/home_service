import React from 'react';

const ServiceCard = (props) => {
    const { service_name, service_pic, service_charge } = props.data;
    return (
        <div>
            <div class="card my-3 w-72 bg-blue-300 shadow-xl mx-auto">
                <figure class="px-5 pt-4">
                    <img className='h-40 rounded-xl w-60' src={service_pic} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black">{service_name}</h2>
                    <p className='text-black'>charge: {service_charge}</p>
                    <div class="card-actions justify-end">
                        <button class="btn font-bold bg-blue-400 text-gray-700 hover:bg-blue-200 border-none"> more details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;