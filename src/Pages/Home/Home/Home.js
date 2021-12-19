import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import JoinNow from '../JoinNow/JoinNow';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <JoinNow></JoinNow>
            
        </div>
    );
};

export default Home;