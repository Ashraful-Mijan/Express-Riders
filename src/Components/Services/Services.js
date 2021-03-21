import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Services.css'
const Services = () => {
    return (
        <div className='about-body'>
            <Navbar />
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 pb-3">
                        <h1>Why Your Ride with us?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi provident, veritatis sapiente ducimus cupiditate deleniti labore explicabo commodi magni vel!</p>
                        <button className='btn btn-outline-success'>Get Services</button>
                    </div>
                    <div className="col-md-6">
                        <img className='w-100' src="https://image.freepik.com/free-vector/sports-web-banner-motivational-concept-biker-silhouette-man_207954-104.jpg" alt="images" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Simple dummy text</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, totam!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;