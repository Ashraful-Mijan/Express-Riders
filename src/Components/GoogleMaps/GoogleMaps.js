import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '85vh',
  borderRadius: '10px'
};

const center = {
  lat: 24.898353,
  lng: 91.872748
};

function GoogleMaps() {
  return (
    <div >
      <LoadScript
      googleMapsApiKey="AIzaSyC7Q1XST9HXziZWT8WU1nFi2KZET6Ndl9U"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default React.memo(GoogleMaps)