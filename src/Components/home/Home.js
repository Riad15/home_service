import React from 'react';
import Achivement from './Achivement';
import Feature from './Feature';
import Navbar from './Navbar';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Achivement></Achivement>
            <Feature></Feature>
        </div>
    );
};

export default Home;