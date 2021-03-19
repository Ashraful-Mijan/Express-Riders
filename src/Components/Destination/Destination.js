import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchData from '../../fakeData/SearchData.json'
import AvailableVehicle from '../AvailableVehicle/AvailableVehicle';
const Destination = () => {
    const [search, setSearch] = useState(false)
    const { vehicleName } = useParams();

    const availableVehicle = SearchData.filter(dt => { return dt.vehicleName === vehicleName })
    console.log(availableVehicle)

    return (
        <div className='container'>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <div className="card border-0 bg-light p-4 rounded shadow">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="from" className="form-label">Pick From</label>
                                <input type="text" name="from" className="form-control border-0" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="to" className="form-label">Pick To</label>
                                <input type="text" name="to" className="form-control border-0" />
                            </div>
                        </form>
                        <button onClick={() => setSearch(true)} type="submit" className="btn btn-primary w-100">Search</button>
                        {
                            search &&
                            availableVehicle.map(vh => <AvailableVehicle key={vh.id} matchVehicle={vh} />)

                        }
                    </div>

                </div>
                <div className="col-md-8">
                    map col
                </div>
            </div>
        </div>
    );
};

export default Destination;