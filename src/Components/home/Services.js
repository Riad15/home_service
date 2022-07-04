import React from 'react';
import UseServices from '../../customHooks/UseServices';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services] = UseServices();
    return (
        <div>
            <div>
                <h4 className='text-start text-2xl font-extrabold text-gray-900 ml-5 p-4'>Our Service Category</h4>
                <div className='border-spacing-0 border-solid border-2 border-spacing-1 bg-gray-800 mx-7'></div>
            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    services.map(data =>
                        <ServiceCard
                            key={data._id}
                            data={data}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;