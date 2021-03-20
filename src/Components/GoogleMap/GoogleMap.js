import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';

export class GoogleMap extends Component {
    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={14}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCPcpfo2S7x5wS191BhCGZ3aV1fhWqqsCo")
})(GoogleMap)