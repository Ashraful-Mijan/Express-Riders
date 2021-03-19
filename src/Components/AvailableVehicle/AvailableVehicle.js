import React from 'react';
import { FiUsers } from "react-icons/fi";
const AvailableVehicle = ({matchVehicle}) => {
    const {vehicleImg, vehicleName, quatity, price} = matchVehicle
    return (
        <div className='row shadow mt-2'>
            <div className="col d-flex rounded p-2 fw-bold">

                <img src={vehicleImg} alt="" className='w-25 pe-4' />

                <span className='px-2 py-2'>{vehicleName}</span>
            
                <span className='px-2 py-2'><FiUsers/> {quatity}</span>
            
            
                <span className='ps-5 py-2'> $ {price}</span>
            </div>
        </div>
    );
};

export default AvailableVehicle;