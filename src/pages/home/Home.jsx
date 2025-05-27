import React from 'react';
import Banner from './Banner';
import Marathons from './Marathons';
import UpcomingMarathons from './UpcomingMarathons';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Marathons />
            <UpcomingMarathons />
            <WhyUs />
        </div>
    );
};

export default Home;