import React from 'react';
import { useHistory } from 'react-router-dom';

const RiderType = ({ rider }) => {
    const { vehicleImg, vehicleName } = rider;
    let history = useHistory()
    
    const handleTicket = () => {
        history.push(`/destination/${vehicleName}`)
    }
    return (
        <div className='col-md-3 mb-3' onClick={handleTicket}>
            <div className="card rounded-3 h-100 mx-auto text-center">
                <img src={vehicleImg} className="card-img-top mt-3 w-75 mx-auto" alt="..." />
                <div className="card-body text-center fw-bold fs-4">
                    <p className="card-text">{vehicleName}</p>
                </div>
            </div>
        </div>
    );
};

export default RiderType;