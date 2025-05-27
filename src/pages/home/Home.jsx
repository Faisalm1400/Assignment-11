import React from 'react';
import Banner from './Banner';
import Marathons from './Marathons';
import UpcomingMarathons from './UpcomingMarathons';
import WhyUs from './WhyUs';
import Blog from './Blog';

const Home = () => {
    return (
        <div className='space-y-6'>
            <Banner />
            <Marathons />
            <UpcomingMarathons />
            <WhyUs />
            <Blog />
        </div>
    );
};

export default Home;