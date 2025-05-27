import React from 'react';
import Banner from './Banner';
import Marathons from './Marathons';
import UpcomingMarathons from './UpcomingMarathons';

const Home = () => {
    return (
        <div>
            <Banner />
            <Marathons />
            <UpcomingMarathons />
        </div>
    );
};

export default Home;