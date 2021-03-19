import React from 'react';
import Navbar from '../Navbar/Navbar';
import Riders from '../Riders/Riders';
import './Home.css'

const Home = () => {
    return (
        <div className='wrapper wrapper-bg'>
            <Navbar/>
            <Riders/>
        </div>
    );
};

export default Home;