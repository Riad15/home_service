import React, { useRef } from 'react';

const WorkRegistry = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');

    const regForm = () => {
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const email = emailRef.current.value;
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-sky-700 uppercase">
                    Registry From
                </h1>
                <form onSubmit={regForm} className="mt-6">
                    <div className="mb-2">
                        <label for="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input ref={emailRef} type="email" className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label for="name" className="block text-sm font-semibold text-gray-800" >
                            Name
                        </label>
                        <input ref={nameRef} type="text" className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label for="name" className="block text-sm font-semibold text-gray-800" >
                            image
                        </label>
                        <input ref={nameRef} type="file" className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label for="area" className="block text-sm font-semibold text-gray-800">
                            Area
                        </label>
                        <select class="select block w-full px-4 py-2 mt-2 text-sky-700 bg-white border border-gray-300 rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            <option disabled selected>Your service Area ?</option>
                            <option> Dhanmondi</option>
                            <option>Farm Gate</option>
                            <option>mohaKhali</option>
                            <option>badda</option>
                            <option>ghulshan-1,2</option>
                            <option>Bonani</option>
                            <option>Boshundhora</option>
                            <option>Uttora</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label for="phone" className="block text-sm font-semibold text-gray-800" >
                            Phone Number
                        </label>
                        <input ref={numberRef} type="number" className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label for="area" className="block text-sm font-semibold text-gray-800">
                            service
                        </label>
                        <select class="select block w-full px-4 py-2 mt-2 text-sky-700 bg-white border border-gray-300 rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40">
                            <option disabled selected>service category ?</option>
                            <option value="Ac Repapering"> Ac Repapering</option>
                            <option value="Electricity Home Service">Electricity Home Service</option>
                            <option value="Cooking Home Service">Cooking Home Service</option>
                            <option value="Home Cleaner">Home Cleaner</option>
                            <option value="Doctor Service">Doctor Service</option>
                        </select>
                    </div>
                    <div className="mt-6">
                        <input className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-700 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600' type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WorkRegistry;