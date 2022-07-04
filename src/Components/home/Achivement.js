import React from 'react';

const Achivement = () => {

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center ">
                        <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
                            <div className='card w-42 bg-sky-400 text-white shadow-xl'>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 hover:text-white">2.7K</h2>
                                <p className="leading-relaxed">Service Provider</p>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
                            <div className='card w-42 bg-orange-400 text-white shadow-xl'>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 hover:text-white">1.8K</h2>
                                <p className="leading-relaxed">Subscribes</p>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
                            <div className='card w-42 bg-lime-400 text-white shadow-xl'>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 hover:text-white">35</h2>
                                <p className="leading-relaxed">Downloads</p>
                            </div>

                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2 cursor-pointer">
                            <div className='card w-42 bg-violet-400 text-white shadow-xl'>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 hover:text-white">4</h2>
                                <p className="leading-relaxed">Products</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Achivement;