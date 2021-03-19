import React from 'react';
import fakeData from '../../fakeData/fakeData.json'
import RiderType from '../RiderType/RiderType';
const Riders = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className="row mt-5">
                {
                    fakeData.map(rd => <RiderType key={rd.id} rider={rd} />)
                }
            </div>
        </div>
    );
};

export default Riders;