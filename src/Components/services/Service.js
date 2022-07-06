import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from "../../assets/images/loading.gif"


const Service = () => {
    const { id } = useParams();
    const [a, setA] = useState([]);
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => {
                setA(data);
                console.log(data);
            })
    }, [])
    console.log(`a = ${a}`);

    return (
        <div>
            <div class=" max-w-full bg-white bg-base-100">

                <img className='mx-auto' src={loading} alt="" />

            </div>
        </div>
    );
};

export default Service;