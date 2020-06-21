import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import Typography from '@material-ui/core/Typography';

const DEFAULT_LANGITUDE = -58.3743613;  
const DEFAULT_LATITUDE = -34.9809373;

function Maps(){
    return (
        <Map center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]} zoom={16}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]}>
                <Popup><Typography variant="h6" color="initial">Ayemostartas</Typography></Popup>
            </Marker>
        </Map>
    )
}

export default Maps

