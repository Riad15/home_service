import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from "../../assets/images/loading.gif"
import UseServices from '../../customHooks/UseServices';
import Workers from './Workers';


const Service = () => {
    const { id } = useParams();
    const [workers, setWorkers] = useState([])
    useEffect(() => {
        const url = `http://localhost:7000/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setWorkers(data.Workers);
            })
    }, [])

    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>experiance</th>
                            <th>gender</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            workers.map(data =>
                                <Workers
                                    key={data._id}
                                    info={data}
                                ></Workers>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Service;