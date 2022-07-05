import React from 'react';
import UseServices from '../../customHooks/UseServices';
import ServiceCard from '../home/ServiceCard';
import Footer from '../Shared/Footer';

const Services = () => {
    const [services] = UseServices();
    return (
        <div>
            <div>
                <h4 className='text-3xl font-semibold text-center text-gray-700 mb-4'>Our Service Make Your Life Easier</h4>

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
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Services;