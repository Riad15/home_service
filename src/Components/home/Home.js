import React from 'react';
import Footer from '../Shared/Footer';
import Achivement from './Achivement';
import Feature from './Feature';
import Services from './Services';
import Slider from './Slider';
import SlideSection from './SlideSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Achivement></Achivement>
            <Feature></Feature>
            <Services></Services>
            <SlideSection></SlideSection>
            <Footer></Footer>

        </div>
    );
};

export default Home;