import React from 'react';
import { BeakerIcon, CurrencyBangladeshiIcon } from '@heroicons/react/solid'

const Feature = () => {
    return (
        <div className='bg-Green-200'>
            <div class="text-center mb-3">
                <h1 class="sm:text-3xl text-5xl font-extrabold title-font text-gray-900 mb-4">Why Choose Our Service </h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div class="card m-2 w-10/12 bg-green-200 shadow-xl mx-auto">
                    <figure class="px-5  py-2">
                        <CurrencyBangladeshiIcon className="h-40 w-40 text-orange-400" />
                    </figure>
                    <div class="card-body px-2 py-1 items-center text-center">
                        <h2 class="card-title font-bold text-gray-700">UpFront Pricing</h2>
                        <p>No surprises and no hidden fees. you always know what's included in the service package you'r paying for.</p>
                    </div>
                </div>

                <div class="card m-2 w-10/12 bg-green-200 shadow-xl mx-auto">
                    <figure class="px-5  py-2">
                        <CurrencyBangladeshiIcon className="h-40 w-40 text-orange-400" />
                    </figure>
                    <div class="card-body px-2 py-1 items-center text-center">
                        <h2 class="card-title font-bold text-gray-700">Handpicked Pros</h2>
                        <p>All our service providers are required to possess the necessary skills and qualifications to complete your service order to your satisfaction.</p>
                    </div>
                </div>

                <div class="card m-2 w-10/12 bg-green-200 shadow-xl mx-auto">
                    <figure class="px-5  py-2">
                        <CurrencyBangladeshiIcon className="h-40 w-40 text-orange-400" />
                    </figure>
                    <div class="card-body px-2 py-1 items-center text-center">
                        <h2 class="card-title font-bold text-gray-700">Easy Scheduling</h2>
                        <p>Select time that Works for you and We'll take of everything else.</p>
                    </div>
                </div>

                <div class="card m-2 w-10/12 bg-green-200 shadow-xl mx-auto">
                    <figure class="px-5  py-2">
                        <CurrencyBangladeshiIcon className="h-40 w-40 text-orange-400" />
                    </figure>
                    <div class="card-body px-2 py-1 items-center text-center">
                        <h2 class="card-title font-bold text-gray-700">Happiness Guarantee</h2>
                        <p>When you purchess an the quality of the service performed is guaranted under the happiness guarantee.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;