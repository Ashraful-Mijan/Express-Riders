import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchData from '../../fakeData/SearchData.json'
import AvailableVehicle from '../AvailableVehicle/AvailableVehicle';
import { MapDestination } from '../MapDestination/MapDestination';

const Destination = () => {
    const [search, setSearch] = useState(false)
    const { vehicleName } = useParams();
    const [destination, setDestination] = useState({
        from: '',
        to: '',
        date: '',
        time: ''
    })
    const availableVehicle = SearchData.filter(dt => { return dt.vehicleName === vehicleName })
    console.log(availableVehicle)

    const storeDestination = (e) => {
        const newDestination = {...destination}
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);
    }
    console.log(destination)

    return (
        <div className='container'>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <div className="card border-0 bg-light p-4 rounded shadow">
                        { search &&
                            <div className='bg-danger text-uppercase text-white p-3 rounded'>
                                <h6>From: {destination.from}</h6>
                                
                                <h6>To: {destination.to}</h6>
                                
                                <h6>Date: {destination.date}</h6>
                                
                                <h6>Time: {destination.time}</h6>
                            </div>
                        }
                        { search ||
                            <form onSubmit={(e)=> e.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="from" className="form-label">Pick From</label>
                                <input onBlur={storeDestination} type="text" name="from" className="form-control border-0" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="to" className="form-label">Pick To</label>
                                <input onBlur={storeDestination} type="text" name="to" className="form-control border-0" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input onBlur={storeDestination} type="date" name="date" className="form-control border-0" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="time" className="form-label">Time</label>
                                <input onBlur={storeDestination} type="time" name="time" className="form-control border-0" />
                            </div>
                            <button onClick={() => setSearch(true)} type="submit" className="btn btn-primary w-100">Search</button>
                        </form>}
                        
                        {
                            search &&
                            availableVehicle.map(vh => <AvailableVehicle key={vh.id} matchVehicle={vh} />)

                        }
                    </div>

                </div>
                <div className="col-md-8 px-3">
                    <MapDestination/>
                </div>
            </div>
        </div>
    );
};

export default Destination;