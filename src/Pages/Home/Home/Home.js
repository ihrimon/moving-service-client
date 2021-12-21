import React from 'react';
import Advantages from '../../Advantages/Advantages';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import JoinNow from '../JoinNow/JoinNow';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advantages></Advantages>
            <Services></Services>
            <Reviews></Reviews>
            <JoinNow></JoinNow>
            
        </div>
    );
};

export default Home;