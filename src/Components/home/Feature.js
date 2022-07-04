import React from 'react';
import Usefceilites from '../../customHooks/Usefecilites';
import FeatureCard from './FeatureCard';

const Feature = () => {
    const [facilities, setfacilities] = Usefceilites();
    return (
        <div className='bg-Green-200'>
            <div className="text-center mb-3">
                <h1 className="sm:text-3xl text-5xl font-extrabold title-font text-gray-900 mb-4">Why Choose Our Service </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700"> we are guarantees satisfaction for the services provided by participating service professionals.This guarantee ensures that if a customer is dissatisfied with service, the job will be rectified or a full refund will be provided. They also offer price matching within 14 days</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    facilities.map(data =>
                        <FeatureCard
                            key={data.id}
                            data={data}
                        ></FeatureCard>

                    )
                }
            </div>
        </div>
    );
};

export default Feature;